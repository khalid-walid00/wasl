"use client";
import { useEffect, useMemo, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import Table2 from "~/common/components/molecules/table/index";
import DeleteManyProducts from "./deleteMany";
import ActionList from "./components/actionList/ActionsMenu";
import ComapnySearch from "./components/header";
import { statusOptions } from "./components/statusOptions";
import HeadTable from "~/common/components/molecules/headTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./companies.slice";

function Page() {
  const data = useSelector((state: any) => state.companiesSlice);
  console.log(data);
  const dispatch = useDispatch();
  const staticData = [
    {
      id: 1,
      Account: "Smart Development Co.",
      identityNumber: "+201234567891",
      commercialRecord: "TR987654321",
      representativeName: "Mohamed Youssef",
      phoneNo: "+201234567892",
      extensionNumber: "+201234567893",
      emailId: "mohamed@smartdev.com",
      status: "Inactive",
      managerName: "Ahmed Said",
      managerPhone: "+201234567894",
      managerMobile: "+201234567895",
      reply: "Not Replied",
      waslkey:"def456uvw" ,
      activity: "two_Car ",
      date: "2023-06-01"
    },
    {
      id: 2,
      Account: "Smart Development Co.",
      identityNumber: "+201234567891",
      commercialRecord: "TR987654321",
      representativeName: "Mohamed Youssef",
      phoneNo: "+201234567892",
      extensionNumber: "+201234567893",
      emailId: "mohamed@smartdev.com",
      status: "Inactive",
      managerName: "Ahmed Said",
      managerPhone: "+201234567894",
      managerMobile: "+201234567895",
      reply: "Not Replied",
      waslkey:"def456uvw" ,
      activity: "teo_Car two",
      date: "2023-06-01"

    }
  ];


  const [statusData, setStatusData] = useState(staticData);

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'Id',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.Id}</p>;
        },
      },
      {
        Header: 'Wasl Id',
        accessor: 'WaslId',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.WaslId}</p>;
        },
      },
      {
        Header: 'Is Deleted From Wasl',
        accessor: 'IsDeletedFromWasl',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.IsDeletedFromWasl ? 'Yes' : 'No'}</p>;
        },
      },
      {
        Header: 'Created Date',
        accessor: 'CreatedDate',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.CreatedDate ? new Date(tableProps.row.original.CreatedDate).toLocaleString() : 'N/A'}</p>;
        },
      },
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
        Header: 'Created By',
        accessor: 'CreatedBy',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.CreatedBy}</p>;
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
        Header: 'Commercial Record Number',
        accessor: 'CommercialRecordNumber',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.CommercialRecordNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Commercial Record Issue Date Hijri',
        accessor: 'CommercialRecordIssueDateHijri',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.CommercialRecordIssueDateHijri || 'N/A'}</p>;
        },
      },
      {
        Header: 'Date of Birth Gregorian',
        accessor: 'DateOfBirthGregorian',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.DateOfBirthGregorian || 'N/A'}</p>;
        },
      },
      {
        Header: 'Extension Number',
        accessor: 'ExtensionNumber',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.ExtensionNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Manager Name',
        accessor: 'ManagerName',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.ManagerName || 'N/A'}</p>;
        },
      },
      {
        Header: 'Manager Phone Number',
        accessor: 'ManagerPhoneNumber',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.ManagerPhoneNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Manager Mobile Number',
        accessor: 'ManagerMobileNumber',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.ManagerMobileNumber || 'N/A'}</p>;
        },
      },
      {
        Header: 'Uplevel Operation Company Id',
        accessor: 'UplevelOperationCompanyId',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.UplevelOperationCompanyId || 'N/A'}</p>;
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
    const endpoint = "operationCompany/all";
    const params = { userId: 1, status: "active" };
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET" }));
  }, [dispatch]);

  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
      <HeadTable title="Companies" description="Company details and actions" />
      <div className="container">
        <Table2
          header={<ComapnySearch />}
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
