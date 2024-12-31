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

  // Id: '675628d8ef1ff3396ecdb7bf',
  // WaslId: '123456789',
  // IsDeletedFromWasl: false,
  // CreatedDate: '2024-12-08T23:16:40.718Z',
  // Name: 'Lamar',
  // EmailAddress: 'sayed@egyeagles.com',
  // PhoneNumber: null,
  // Activity: null,
  // CreatedBy: 'System',
  // IdentityNumber: null,
  // CommercialRecordNumber: null,
  // CommercialRecordIssueDateHijri: null,
  // DateOfBirthGregorian: null,
  // ExtensionNumber: null,
  // ManagerName: null,
  // ManagerPhoneNumber: null,
  // ManagerMobileNumber: null,
  // UplevelOperationCompanyId: null
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'Name',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.Name || 'N/A'}</p>;
        },
      },
      {
        Header: 'Identity Number',
        accessor: 'IdentityNumber',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.IdentityNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Commercial Record Number',
        accessor: 'CommercialRecordNumber',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.CommercialRecordNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Commercial Record DateHijri',
        accessor: 'CommercialRecordIssueDateHijri',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.CommercialRecordIssueDateHijri || 'N/A'}</p>;
        },
      },
      {
        Header: 'Phone Number',
        accessor: 'PhoneNumber',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.PhoneNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'ExtensionNumber',
        accessor: 'ExtensionNumber',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.ExtensionNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Email Address',
        accessor: 'EmailAddress',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[200px]">{tableProps.row.original?.EmailAddress || 'N/A'}</p>;
        },
      },
      {
        Header: 'Manager Name',
        accessor: 'ManagerName',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.ManagerName || 'N/A'}</p>;
        },
      },
       
      {
        Header: 'Manager Phone Number',
        accessor: 'ManagerPhoneNumber',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.ManagerPhoneNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Manager Mobile Number',
        accessor: 'ManagerMobileNumber',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.ManagerMobileNumber || 'N/A'}</p>;
        },
      },

      {
        Header: 'Wasl Key',
        accessor: 'WaslId',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.WaslId || 'N/A'}</p>;
        },
      },
      {
        Header: 'Activity',
        accessor: 'Activity',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.Activity || 'N/A'}</p>;
        },
      },
      {
        Header: 'Is Deleted From Wasl',
        accessor: 'IsDeletedFromWasl',
        Cell: (tableProps: any) => {
          return <p className="text-sm w-[120px]">{tableProps.row.original?.IsDeletedFromWasl ? 'Yes' : 'No'}</p>;
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
      <div className="container  ">
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
