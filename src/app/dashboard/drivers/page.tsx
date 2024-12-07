"use client";
import { useEffect, useMemo, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react"; 
import ActionList from "./components/actionList/ActionsMenu";
import DriverHeader from "./components/header";
import { statusOptions } from "./components/statusOptions";
import Table from "~/common/components/molecules/table";
import HeadTable from "~/common/components/molecules/headTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./drivers.slice";

function Page() {
  const staticData = [
    {
      driverId: 1,
      driverName: "Ahmad Ali",
      driverNameArabic: "أحمد علي",
      driverAssignedAsset: "ABC123456",
      licenseNumber: "AB12345",
      licenseNumberArabic: "أ ب ١٢٣٤٥",
      mobileNumber: "+201234567890",
      tagid: "BMW X5",
      licenseExpiry: "2025-12-31",
    },
    {
      driverId: 2,
      driverName: "Sara Mohammed",
      driverNameArabic: "سارة محمد",
      driverAssignedAsset: "XYZ987654",
      licenseNumber: "XY98765",
      licenseNumberArabic: "إكس واي ٩٨٧٦٥",
      mobileNumber: "+202345678901",
      tagid: "Toyota Camry",
      licenseExpiry: "2026-07-15",
    },
    {
      driverId: 3,
      driverName: "Mohamed Hassan",
      driverNameArabic: "محمد حسن",
      driverAssignedAsset: "LMN456789",
      licenseNumber: "LM45678",
      licenseNumberArabic: "إل إم ٤٥٦٧٨",
      mobileNumber: "+203456789012",
      tagid: "Honda Accord",
      licenseExpiry: "2024-03-10",
    },
    {
      driverId: 4,
      driverName: "Ali Ahmed",
      driverNameArabic: "علي أحمد",
      driverAssignedAsset: "DEF345678",
      licenseNumber: "DEF34567",
      licenseNumberArabic: "دي إف ٣٤٥٦٧",
      mobileNumber: "+204567890123",
      tagid: "Mazda 3",
      licenseExpiry: "2025-08-22",
    },
    {
      driverId: 5,
      driverName: "Mona Khaled",
      driverNameArabic: "مونا خالد",
      driverAssignedAsset: "OPQ789123",
      licenseNumber: "OP78912",
      licenseNumberArabic: "أو بي ٧٨٩١٢",
      mobileNumber: "+205678901234",
      tagid: "Nissan Altima",
      licenseExpiry: "2027-01-01",
    },
    {
      driverId: 6,
      driverName: "Omar Farouk",
      driverNameArabic: "عمر فاروق",
      driverAssignedAsset: "JKL234567",
      licenseNumber: "JK23456",
      licenseNumberArabic: "جي كيه ٢٣٤٥٦",
      mobileNumber: "+206789012345",
      tagid: "Chevrolet Malibu",
      licenseExpiry: "2024-09-30",
    },
    {
      driverId: 7,
      driverName: "Fatima Zaynab",
      driverNameArabic: "فاطمة زينب",
      driverAssignedAsset: "PQR567890",
      licenseNumber: "PQ56789",
      licenseNumberArabic: "بي كي ٥٦٧٨٩",
      mobileNumber: "+207890123456",
      tagid: "Ford Mustang",
      licenseExpiry: "2026-02-14",
    },
    {
      driverId: 8,
      driverName: "Khaled Mahmoud",
      driverNameArabic: "خالد محمود",
      driverAssignedAsset: "UVW890123",
      licenseNumber: "UV89012",
      licenseNumberArabic: "يو في ٨٩٠١٢",
      mobileNumber: "+208901234567",
      tagid: "Audi A4",
      licenseExpiry: "2025-11-25",
    }
  ];
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.vehiclesSlice);
    
  useEffect(() => {
    const endpoint = "drivers/all";
    const params = { userId: 1, status: "active" };
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET" }));
  }, [dispatch]);

  const [statusData, setStatusData] = useState(staticData); 

  const columns = useMemo(
    () => [
      {
        Header: 'Driver Id',
        accessor: 'driverId',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.driverId}</p>;
        },
      },
      {
        Header: 'Driver Name',
        accessor: 'driverName',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.driverName}</p>;
        },
      },
      {
        Header: 'Driver Name (Arabic)',
        accessor: 'driverNameArabic',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.driverNameArabic}</p>;
        },
      },
      {
        Header: 'Assigned Asset',
        accessor: 'driverAssignedAsset',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.driverAssignedAsset}</p>;
        },
      },
      {
        Header: 'License Number',
        accessor: 'licenseNumber',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.licenseNumber}</p>;
        },
      },
      {
        Header: 'License Number (Arabic)',
        accessor: 'licenseNumberArabic',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.licenseNumberArabic}</p>;
        },
      },
      {
        Header: 'Mobile Number',
        accessor: 'mobileNumber',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.mobileNumber}</p>;
        },
      },
      {
        Header: 'Tag ID',
        accessor: 'tagid',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.tagid}</p>;
        },
      },
      {
        Header: 'License Expiry',
        accessor: 'licenseExpiry',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.licenseExpiry}</p>;
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (tableProps: any) => {
          const selectorStatus = statusOptions.find(
            (option) => option.value === tableProps.row.original?.status
          );
          return (
            <div className="flex justify-start" onMouseDown={(e) => e.stopPropagation()}>
              <Select
                style={{
                  border: `1px solid #008ffb`,
                  backgroundColor: 'transparent',
                  borderRadius: '4px',
                  color: '#008ffb',
                  minHeight: '30px',
                  width: '120px',
                  height: '30px',
                }}
                size="lg"
                placeholder={selectorStatus?.label || 'Not Specified'}
                className="w-40"
                onChange={(status) => {
                  const updatedData = statusData.map((product) =>
                    product.driverId === tableProps.row.original.driverId
                      ? { ...product, status: status.target.value }
                      : product
                  );
                  setStatusData(updatedData);
                }}
              >
                {statusOptions.map((role) => (
                  <SelectItem
                    key={role.value}
                    value={role.value}
                    style={{
                      backgroundColor: '#E4F2F2',
                      borderRadius: '4px',
                      color: '#008ffb',
                    }}
                  >
                    {role.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          );
        },
      },
      {
        Header: 'Actions',
        Cell: (tableProps: any) => {
          return <ActionList item={tableProps.row.original} />;
        },
      },
    ],
    [statusData]
  );
  
  


  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
    <HeadTable title="Drivers" description="View details and actions" />
    <div className="container">
      <Table
        header={<DriverHeader />}
        columns={columns}
        data={statusData}
        loading={false}
        pageCount={9}
        limit={10}
        nextPage={() => { }}
        prevPage={() => { }}
        setLimit={() => { }}
      />
    </div>
  </div>
  );
}

export default Page;
