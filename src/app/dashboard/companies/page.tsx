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
import { fetchDataRequest, nextPage, prevPage, setLimit } from "./companies.slice";

function Page() {
  const {items:{Data},limit} = useSelector((state: any) => state.companiesSlice);
  console.log("data", Data);
  const dispatch = useDispatch();
  const staticData = [
    {
     "Id": "67528e77583d6616d87ab4a1",
     "WaslId": "111222333",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T05:41:11.618Z",
     "Name": "Ali",
     "EmailAddress": "ali@example.com",
     "PhoneNumber": "+1234567890",
     "Activity": "Active",
     "CreatedBy": "Admin",
     "IdentityNumber": "123456789",
     "CommercialRecordNumber": "987654321",
     "CommercialRecordIssueDateHijri": "1446-12-10",
     "DateOfBirthGregorian": "1990-05-15",
     "ExtensionNumber": "1001",
     "ManagerName": "Ahmed",
     "ManagerPhoneNumber": "+1234567890",
     "ManagerMobileNumber": "+9876543210",
     "UplevelOperationCompanyId": "company1"
    },
    {
     "Id": "67528e77583d6616d87ab4a2",
     "WaslId": "987654321",
     "IsDeletedFromWasl": "true",
     "CreatedDate": "2024-12-06T06:00:00.000Z",
     "Name": "Sara",
     "EmailAddress": "sara@example.com",
     "PhoneNumber": "+987654321",
     "Activity": "Inactive",
     "CreatedBy": "System",
     "IdentityNumber": "987654321",
     "CommercialRecordNumber": "123987654",
     "CommercialRecordIssueDateHijri": "1447-01-01",
     "DateOfBirthGregorian": "1985-08-20",
     "ExtensionNumber": "1002",
     "ManagerName": "Khaled",
     "ManagerPhoneNumber": "+9876543210",
     "ManagerMobileNumber": "+1239876540",
     "UplevelOperationCompanyId": "company2"
    },
    {
     "Id": "67528e77583d6616d87ab4a3",
     "WaslId": "234567890",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T07:15:30.000Z",
     "Name": "John",
     "EmailAddress": "john@example.com",
     "PhoneNumber": "+234567890",
     "Activity": "Active",
     "CreatedBy": "Admin",
     "IdentityNumber": "345678901",
     "CommercialRecordNumber": "678901234",
     "CommercialRecordIssueDateHijri": "1446-12-05",
     "DateOfBirthGregorian": "1992-11-10",
     "ExtensionNumber": "1003",
     "ManagerName": "Mona",
     "ManagerPhoneNumber": "+345678901",
     "ManagerMobileNumber": "+234567890",
     "UplevelOperationCompanyId": "company3"
    },
    {
     "Id": "67528e77583d6616d87ab4a4",
     "WaslId": "345678901",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T08:30:45.000Z",
     "Name": "Emma",
     "EmailAddress": "emma@example.com",
     "PhoneNumber": "+345678901",
     "Activity": "Active",
     "CreatedBy": "Admin",
     "IdentityNumber": "456789012",
     "CommercialRecordNumber": "789012345",
     "CommercialRecordIssueDateHijri": "1446-11-30",
     "DateOfBirthGregorian": "1995-07-25",
     "ExtensionNumber": "1004",
     "ManagerName": "Omar",
     "ManagerPhoneNumber": "+456789012",
     "ManagerMobileNumber": "+345678901",
     "UplevelOperationCompanyId": "company4"
    },
    {
     "Id": "67528e77583d6616d87ab4a5",
     "WaslId": "456789012",
     "IsDeletedFromWasl": "true",
     "CreatedDate": "2024-12-06T09:45:00.000Z",
     "Name": "Liam",
     "EmailAddress": "liam@example.com",
     "PhoneNumber": "+456789012",
     "Activity": "Inactive",
     "CreatedBy": "System",
     "IdentityNumber": "567890123",
     "CommercialRecordNumber": "890123456",
     "CommercialRecordIssueDateHijri": "1447-01-01",
     "DateOfBirthGregorian": "1994-03-30",
     "ExtensionNumber": "1005",
     "ManagerName": "Zaid",
     "ManagerPhoneNumber": "+567890123",
     "ManagerMobileNumber": "+456789012",
     "UplevelOperationCompanyId": "company5"
    },
    {
     "Id": "67528e77583d6616d87ab4a6",
     "WaslId": "567890123",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T10:00:30.000Z",
     "Name": "Olivia",
     "EmailAddress": "olivia@example.com",
     "PhoneNumber": "+567890123",
     "Activity": "Active",
     "CreatedBy": "Admin",
     "IdentityNumber": "678901234",
     "CommercialRecordNumber": "901234567",
     "CommercialRecordIssueDateHijri": "1446-12-15",
     "DateOfBirthGregorian": "1996-09-12",
     "ExtensionNumber": "1006",
     "ManagerName": "Tariq",
     "ManagerPhoneNumber": "+678901234",
     "ManagerMobileNumber": "+567890123",
     "UplevelOperationCompanyId": "company6"
    },
    {
     "Id": "67528e77583d6616d87ab4a7",
     "WaslId": "678901234",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T11:30:45.000Z",
     "Name": "Sophia",
     "EmailAddress": "sophia@example.com",
     "PhoneNumber": "+678901234",
     "Activity": "Active",
     "CreatedBy": "Admin",
     "IdentityNumber": "789012345",
     "CommercialRecordNumber": "123456789",
     "CommercialRecordIssueDateHijri": "1446-11-20",
     "DateOfBirthGregorian": "1998-02-10",
     "ExtensionNumber": "1007",
     "ManagerName": "Hassan",
     "ManagerPhoneNumber": "+789012345",
     "ManagerMobileNumber": "+678901234",
     "UplevelOperationCompanyId": "company7"
    },
    {
     "Id": "67528e77583d6616d87ab4a8",
     "WaslId": "789012345",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T12:00:00.000Z",
     "Name": "Jack",
     "EmailAddress": "jack@example.com",
     "PhoneNumber": "+789012345",
     "Activity": "Inactive",
     "CreatedBy": "System",
     "IdentityNumber": "890123456",
     "CommercialRecordNumber": "234567890",
     "CommercialRecordIssueDateHijri": "1447-01-05",
     "DateOfBirthGregorian": "1988-06-22",
     "ExtensionNumber": "1008",
     "ManagerName": "Maha",
     "ManagerPhoneNumber": "+890123456",
     "ManagerMobileNumber": "+789012345",
     "UplevelOperationCompanyId": "company8"
    },
    {
     "Id": "67528e77583d6616d87ab4a9",
     "WaslId": "890123456",
     "IsDeletedFromWasl": "true",
     "CreatedDate": "2024-12-06T13:15:30.000Z",
     "Name": "Ava",
     "EmailAddress": "ava@example.com",
     "PhoneNumber": "+890123456",
     "Activity": "Inactive",
     "CreatedBy": "System",
     "IdentityNumber": "901234567",
     "CommercialRecordNumber": "345678901",
     "CommercialRecordIssueDateHijri": "1447-02-10",
     "DateOfBirthGregorian": "1992-09-05",
     "ExtensionNumber": "1009",
     "ManagerName": "Nabil",
     "ManagerPhoneNumber": "+901234567",
     "ManagerMobileNumber": "+890123456",
     "UplevelOperationCompanyId": "company9"
    },
    {
     "Id": "67528e77583d6616d87ab4b0",
     "WaslId": "901234567",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T14:00:45.000Z",
     "Name": "James",
     "EmailAddress": "james@example.com",
     "PhoneNumber": "+901234567",
     "Activity": "Active",
     "CreatedBy": "Admin",
     "IdentityNumber": "012345678",
     "CommercialRecordNumber": "456789012",
     "CommercialRecordIssueDateHijri": "1447-02-01",
     "DateOfBirthGregorian": "1990-01-15",
     "ExtensionNumber": "1010",
     "ManagerName": "Fayez",
     "ManagerPhoneNumber": "+012345678",
     "ManagerMobileNumber": "+901234567",
     "UplevelOperationCompanyId": "company10"
    },
    {
     "Id": "67528e77583d6616d87ab4b1",
     "WaslId": "012345678",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T15:30:00.000Z",
     "Name": "Mia",
     "EmailAddress": "mia@example.com",
     "PhoneNumber": "+012345678",
     "Activity": "Active",
     "CreatedBy": "Admin",
     "IdentityNumber": "123456789",
     "CommercialRecordNumber": "567890123",
     "CommercialRecordIssueDateHijri": "1447-03-01",
     "DateOfBirthGregorian": "1993-03-10",
     "ExtensionNumber": "1011",
     "ManagerName": "Sarah",
     "ManagerPhoneNumber": "+123456789",
     "ManagerMobileNumber": "+012345678",
     "UplevelOperationCompanyId": "company11"
    },
    {
     "Id": "67528e77583d6616d87ab4b2",
     "WaslId": "234567890",
     "IsDeletedFromWasl": "false",
     "CreatedDate": "2024-12-06T16:00:00.000Z",
     "Name": "Lucas",
     "EmailAddress": "lucas@example.com",
     "PhoneNumber": "+234567890",
     "Activity": "Inactive",
     "CreatedBy": "System",
     "IdentityNumber": "234567890",
     "CommercialRecordNumber": "678901234",
     "CommercialRecordIssueDateHijri": "1447-03-01",
     "DateOfBirthGregorian": "1989-11-15",
     "ExtensionNumber": "1012",
     "ManagerName": "Rania",
     "ManagerPhoneNumber": "+234567890",
     "ManagerMobileNumber": "+234567890",
     "UplevelOperationCompanyId": "company12"
    },
    {
     "Id": "67528e77583d6616d87ab4b3",
     "WaslId": "345678901",
     "IsDeletedFromWasl": "true",
     "CreatedDate": "2024-12-06T17:15:00.000Z",
     "Name": "Isla",
     "EmailAddress": "isla@example.com",
     "PhoneNumber": "+345678901",
     "Activity": "Inactive",
     "CreatedBy": "System",
     "IdentityNumber": "345678901",
     "CommercialRecordNumber": "789012345",
     "CommercialRecordIssueDateHijri": "1447-04-01",
     "DateOfBirthGregorian": "1991-02-20",
     "ExtensionNumber": "1013",
     "ManagerName": "Karim",
     "ManagerPhoneNumber": "+345678901",
     "ManagerMobileNumber": "+345678901",
     "UplevelOperationCompanyId": "company13",
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
    dispatch(fetchDataRequest({ endpoint, params:null, method: "GET",body: null }));
  }, [dispatch]);

  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
      <HeadTable title="Companies" description="Company details and actions" />
      <div className="container">
        <Table2
          header={<ComapnySearch />}
          columns={columns}
          data={Data}
          loading={false}
          limit={limit}
          nextPage={nextPage}
          prevPage={prevPage}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
}

export default Page;
