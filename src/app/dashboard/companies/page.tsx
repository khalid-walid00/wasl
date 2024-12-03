"use client";
import { useEffect, useMemo, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import Table2 from "~/common/components/molecules/table/index";
import DeleteManyProducts from "./deleteMany";
import ActionList from "./components/actionList/ActionsMenu";
import ComapnySearch from "./components/header";
import { statusOptions } from "./components/statusOptions";
import HeadTable from "~/common/components/molecules/headTable";
import { useDispatch } from "react-redux";
import { fetchDataRequest } from "./companies.slice";

function Page() {

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
        Header: 'Account',
        accessor: 'Account',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.Account}</p>;
        },
      },
      {
        Header: 'Representative Name',
        accessor: 'representativeName',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.representativeName}</p>;
        },
      },
      {
        Header: 'Identity Number',
        accessor: 'identityNumber',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.identityNumber}</p>;
        },
      },
      {
        Header: 'Commercial Record',
        accessor: 'commercialRecord',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.commercialRecord}</p>;
        },
      },
      {
        Header: 'Phone Number',
        accessor: 'phoneNo',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.phoneNo}</p>;
        },
      },
      {
        Header: 'Extension Number',
        accessor: 'extensionNumber',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.extensionNumber}</p>;
        },
      },
      {
        Header: 'Email ID',
        accessor: 'emailId',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.emailId}</p>;
        },
      },
      {
        Header: 'Manager Name',
        accessor: 'managerName',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.managerName}</p>;
        },
      },
      {
        Header: 'Manager Phone',
        accessor: 'managerPhone',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.managerPhone}</p>;
        },
      },
      {
        Header: 'Manager Mobile',
        accessor: 'managerMobile',
        Cell: (tableProps: any) => {
          return <p>{tableProps.row.original?.managerMobile}</p>;
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (tableProps:any) => {
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
                    product.id === tableProps.row.original.id
                      ? { ...product, status: status.target.value }
                      : product
                  );
                  setStatusData(updatedData);
                }}
              >
                {statusOptions?.map((role) => (
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
        Header: 'Activity',
        accessor: 'activity.title',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.activity}</p>;
        },
      },
      {
        Header: 'Reply Status',
        accessor: 'reply',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.reply}</p>;
        },
      },
      {
        Header: 'Wasl Key',
        accessor: 'waslkey.quantity',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.waslkey}</p>;
        },
      },
      {
        Header: 'activity',
        accessor: 'activity',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.activity}</p>;
        },
      },
      {
        Header: 'date',
        accessor: 'date',
        Cell: (tableProps:any) => {
          return <p>{tableProps.row.original?.date}</p>;
        },
      },
      {
        Header: 'Actions',
        Cell: (tableProps:any) => {
          return <ActionList item={tableProps.row.original} />;
        },
      },
    ],
    [statusData]
  );
  useEffect(() => {
    const endpoint = "/users";
    const params = { userId: 1, status: "active" };
    dispatch(fetchDataRequest({ endpoint, params, method: "GET" }));
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
