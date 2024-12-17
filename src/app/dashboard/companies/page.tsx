"use client";
import { useEffect, useMemo } from "react";
import Table2 from "~/common/components/molecules/table/index";
import ActionList from "./components/actionList/ActionsMenu";
import ComapnySearch from "./components/header";
import HeadTable from "~/common/components/molecules/headTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest,search, setFilter, setSearch, setSelectedRowId } from "./companies.slice";
import TableModel from "./components/tableModel";
import InquiryModel from "./components/inquiryModel";

function Page() {
  const {itemsSearch,loading} = useSelector((state: any) => state.companiesSlice);
  const dispatch = useDispatch();
 const columns = useMemo(
  () => [
    {
      Header: 'Name',
      accessor: 'Name',
      Cell: (tableProps: any) => {
        return <p>{tableProps.row.original?.Name}</p>;
      },
    },
    {
      Header: 'Email Address',
      accessor: 'EmailAddress',
      Cell: (tableProps: any) => {
        return <p>{tableProps.row.original?.EmailAddress}</p>;
      },
    },
    {
      Header: 'Phone Number',
      accessor: 'PhoneNumber',
      Cell: (tableProps: any) => {
        return <p>{tableProps.row.original?.PhoneNumber || 'N/A'}</p>;
      },
    },
    {
      Header: 'Activity',
      accessor: 'Activity',
      Cell: (tableProps: any) => {
        return <p>{tableProps.row.original?.Activity || 'N/A'}</p>;
      },
    },
    {
      Header: 'Wasl Id',
      accessor: 'Wasl Id',
      Cell: (tableProps: any) => {
        return <p>{tableProps.row.original?.WaslId}</p>;
      },
    },

    {
      Header: 'Identity Number',
      accessor: 'IdentityNumber',
      Cell: (tableProps: any) => {
        return <p>{tableProps.row.original?.IdentityNumber || 'N/A'}</p>;
      },
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
  useEffect(() => {
    const endpoint = "/operationCompany/all";
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET",body: null }))
    dispatch(setFilter("Active"));
  }, []);
  const handleSelectedRowId = (rowId:any) => {
    dispatch(setSelectedRowId(rowId));
  };
  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
      <HeadTable title="Companies" description="Company details and actions" />
      <div className="container ">
        <Table2
          header={<ComapnySearch />}
          columns={columns}
          handleRowClick={handleSelectedRowId}
          data={itemsSearch ?? []}
          loading={loading}
        />
      <TableModel/>
      <InquiryModel/>
      </div>
    </div>
  );
}

export default Page;
