"use client";
import { useEffect, useMemo, useState } from "react";
import HeadTable from "~/common/components/molecules/headTable";
import Table from "~/common/components/molecules/table";
import VehicleHeader from "./components/header";
import ActionList from "./components/actionList/ActionsMenu";
import CreateVehicle from "./create/page";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, nextPage, prevPage, setLimit } from "./vehicle.slice";

function Page() {
  const dispatch = useDispatch();
  const {items:{Data}} = useSelector((state: any) => state.vehiclesSlice);
  
  useEffect(() => {
    const endpoint = "vehicles/all";
    const params = { userId: 1, status: "active" };
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET" }));
  }, [dispatch]);


  
  const columns = useMemo(
    () => [
      {
        Header: 'Account',
        accessor: 'Account',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.Account}</p>,
      },
      {
        Header: 'Vehicle No.',
        accessor: 'VehicleNo',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.VehicleNo}</p>,
      },
      {
        Header: 'Sequence Number',
        accessor: 'SequenceNumber',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.SequenceNumber}</p>,
      },
      {
        Header: 'Plate Number',
        accessor: 'PlateNumber',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.PlateNumber}</p>,
      },
      {
        Header: 'Plate Type',
        accessor: 'PlateType',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.PlateType}</p>,
      },
      {
        Header: 'IMEI Number',
        accessor: 'IMEINumber',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.IMEINumber}</p>,
      },
      {
        Header: 'WASL Key',
        accessor: 'WASLVehicleKey',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.WASLVehicleKey}</p>,
      },
      {
        Header: 'Response',
        accessor: 'Response',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.Response}</p>,
      },
      {
        Header: 'Registration Date',
        accessor: 'RegistrationDate',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.RegistrationDate}</p>,
      },
      {
        Header: 'Activity',
        accessor: 'Activity',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.Activity}</p>,
      },
      {
        Header: 'Reply',
        accessor: 'Reply',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.Reply}</p>,
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
  
  


  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
    <HeadTable title="Drivers" description="View details and actions" />
    <div className="container">
      <Table
        header={<VehicleHeader />}
        columns={columns}
        data={Data ?? []}
        loading={false}
        limit={10}
      />
    </div>
    <CreateVehicle/>
  </div>
  );
}

export default Page;
