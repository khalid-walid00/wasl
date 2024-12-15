"use client";
import { useEffect, useMemo } from "react";
import HeadTable from "~/common/components/molecules/headTable";
import Table from "~/common/components/molecules/table";
import VehicleHeader from "./components/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, setSearch, search, setSelectedRowId } from "./requestsLog.slice";
import TableModel from "./components/tableModel";
import InquiryModel from "./components/inquiryModel";

function Page() {
  const dispatch = useDispatch();
  const { items: { Data }, itemsSearch } = useSelector((state: any) => state.requestsLogSlice);

  useEffect(() => {
    const endpoint = "/requestLog/all";
    dispatch(fetchDataRequest({ endpoint, params: null, method: "GET" }));

  }, [dispatch]);

  const columns = useMemo(
    () => [
    
      {
        Header: "Method",
        accessor: "Method",
        Cell: (tableProps: any) => <p
          className={`${tableProps.row.original?.Method === "POST"
              ? "text-yellow-500  font-bold text-xl"
              : tableProps.row.original?.Method === "GET"
                ? "text-green-600 font-bold text-xl "
                : tableProps.row.original?.Method === "PUT"
                  ? "text-blue-600 font-bold text-xl "
                  : tableProps.row.original?.Method === "DELETE"
                    ? "text-red-600 font-bold text-xl"
                    : "text-gray-600 font-bold text-xl "
            }`}
        >
          {tableProps.row.original?.Method}
        </p>,
      },
      {
        Header: "Status Code",
        accessor: "StatusCode",
        Cell: (tableProps: any) =>
          <div className=" flex items-center justify-center">
         <p
          className={`py-1 w-max rounded-lg px-4 ${tableProps.row.original?.StatusCode === 500
              ? "bg-red-600 text-white"
              : tableProps.row.original?.StatusCode === 400
                ? "bg-yellow-400 text-black"
                : tableProps.row.original?.StatusCode === 200
                  ? "bg-green-600 text-white"
                  : "bg-gray-600 text-white"
            }`}
        >
          {tableProps.row.original?.StatusCode}
        </p></div>,
      },
      {
        Header: "Request Time",
        accessor: "RequestTime",
        Cell: (tableProps: any) => <p>{tableProps.row.original?.RequestTime.slice(0, 10)}</p>,
      },
      {
        Header: "Response Time",
        accessor: "ResponseTime",
        Cell: (tableProps: any) => <p>{tableProps.row.original?.ResponseTime.slice(0, 10)}</p>,
      },
      {
        Header: "Request Duration In Seconds",
        accessor: "RequestDurationInSeconds",
        Cell: (tableProps: any) => <p>{tableProps.row.original?.RequestDurationInSeconds} Seconds</p>,
      },
    ],
    []
  );

  const handleSelectedRowId = (rowId: any) => {
    dispatch(setSelectedRowId(rowId));
  };

  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
      <HeadTable title="Requests Log" description="View request details and actions" />
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
      <TableModel />
      <InquiryModel />
    </div>
  );
}

export default Page;
