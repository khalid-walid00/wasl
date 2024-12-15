"use client";
import { useEffect, useMemo, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react"; 
import ActionList from "./components/actionList/ActionsMenu";
import DriverHeader from "./components/header";
import { statusOptions } from "./components/statusOptions";
import Table from "~/common/components/molecules/table";
import HeadTable from "~/common/components/molecules/headTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, setSelectedRowId } from "./drivers.slice";

function Page() {
  const dispatch = useDispatch();
  const { items:{Data}, loading, itemsSearch } = useSelector((state: any) => state.driversSlice);
    
  useEffect(() => {
    const endpoint = "drivers/all";
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET" }));
  }, [dispatch]);


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
      // {
      //   Header: 'Status',
      //   accessor: 'status',
      //   Cell: (tableProps: any) => {
      //     const selectorStatus = statusOptions.find(
      //       (option) => option.value === tableProps.row.original?.status
      //     );
      //     return (
      //       <div className="flex justify-start" onMouseDown={(e) => e.stopPropagation()}>
      //         <Select
      //           style={{
      //             border: `1px solid #008ffb`,
      //             backgroundColor: 'transparent',
      //             borderRadius: '4px',
      //             color: '#008ffb',
      //             minHeight: '30px',
      //             width: '120px',
      //             height: '30px',
      //           }}
      //           size="lg"
      //           placeholder={selectorStatus?.label || 'Not Specified'}
      //           className="w-40"
      //           onChange={(status) => {
      //             const updatedData = statusData.map((product) =>
      //               product.driverId === tableProps.row.original.driverId
      //                 ? { ...product, status: status.target.value }
      //                 : product
      //             );
      //             setStatusData(updatedData);
      //           }}
      //         >
      //           {statusOptions.map((role) => (
      //             <SelectItem
      //               key={role.value}
      //               value={role.value}
      //               style={{
      //                 backgroundColor: '#E4F2F2',
      //                 borderRadius: '4px',
      //                 color: '#008ffb',
      //               }}
      //             >
      //               {role.label}
      //             </SelectItem>
      //           ))}
      //         </Select>
      //       </div>
      //     );
      //   },
      // },
      {
        Header: 'Actions',
        Cell: (tableProps: any) => {
          return <ActionList item={tableProps.row.original} />;
        },
      },
    ],
    []
  );
  
  

  const handleSelectedRowId = (rowId:any) => {
    dispatch(setSelectedRowId(rowId));
  };
  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
    <HeadTable title="Drivers" description="View details and actions" />
    <div className="container">
    <Table
          header={<DriverHeader />}
          columns={columns}
          handleRowClick={handleSelectedRowId}
          data={itemsSearch.length > 0 ? itemsSearch : Data ?? []}
          loading={false}
        />
    </div>
  </div>
  );
}

export default Page;
