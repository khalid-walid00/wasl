"use client";
import { useEffect, useMemo } from "react";
import HeadTable from "~/common/components/molecules/headTable";
import Table from "~/common/components/molecules/table";
import VehicleHeader from "./components/header";
import ActionList from "./components/actionList/ActionsMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, setSelectedRowId } from "./vehicle.slice";
import TableModel from "./components/tableModel";
import InquiryModel from "./components/inquiryModel";

function Page() {
  const dispatch = useDispatch();
  const {itemsSearch} = useSelector((state: any) => state.vehiclesSlice);
  useEffect(() => {
    const endpoint = "/vehicles/all";
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET" }));
  }, [dispatch]);

console.log("itemsSearch", itemsSearch);

  const columns = useMemo(
    () => [

      {
        Header: 'Sequence Number',
        accessor: 'SequenceNumber',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.SequenceNumber}</p>,
      },
      {
        Header: 'Plate Number',
        accessor: 'PlateNumber',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.VehiclePlate?.Number}</p>,
      },
      {
        Header: 'Plate Right Letter',
        accessor: 'PlateNumber.RightLetter',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.VehiclePlate?.RightLetter}</p>,
      },
      {
        Header: 'Plate Middle Letter',
        accessor: 'PlateNumber.MiddleLetter',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.VehiclePlate?.MiddleLetter}</p>,
      },
      {
        Header: 'Plate Left Letter',
        accessor: 'PlateNumber.LeftLetter',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.VehiclePlate?.LeftLetter}</p>,
      },
      {
        Header: 'ImeiNumber',
        accessor: 'ImeiNumber',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.ImeiNumber}</p>,
      },
      {
        Header: 'Wasl Vehicle Id',
        accessor: 'WaslId',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.ImeiNumber}</p>,
      },
      {
        Header: 'Registration Date',
        accessor: 'CreatedDate',
        Cell: (tableProps: any) => <p className=" text-nowrap">{tableProps.row.original?.CreatedDate?.replace('T', ' : ').slice(0, 21)}</p>,
      },
      {
        Header: 'Activity',
        accessor: 'Activity',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.Activity}</p>,
      },
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
        header={<VehicleHeader />}
        columns={columns}
        handleRowClick={handleSelectedRowId}
        data={itemsSearch}
        loading={false}
        limit={10}
      />
    </div>
    <TableModel/>
    <InquiryModel/>
  </div>
  );
}

export default Page;
