"use client";
import { useEffect, useMemo, useState } from "react";
import HeadTable from "~/common/components/molecules/headTable";
import Table from "~/common/components/molecules/table";
import VehicleHeader from "./components/header";
import ActionList from "./components/actionList/ActionsMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, setSearch,search, setSelectedRowId } from "./vehicle.slice";
import TableModel from "./components/tableModel";
import InquiryModel from "./components/inquiryModel";

function Page() {
  const dispatch = useDispatch();
  const {items:{Data},itemsSearch} = useSelector((state: any) => state.vehiclesSlice);
  useEffect(() => {
    const endpoint = "vehicles/all";
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET" }));
    dispatch(setSearch({ type: "Activity", value: "Active" }));
    dispatch(search());
  }, [dispatch]);


  
  const columns = useMemo(
    () => [
      {
        Header: 'Account',
        accessor: 'Account',
        Cell: (tableProps: any) => <p>{tableProps.row.original?.Account}</p>,
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
        data={itemsSearch.length > 0 ? itemsSearch : Data ?? []}
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
