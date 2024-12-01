import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Selection,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { TTableProps } from "~/types";
import { ClipLoader } from "react-spinners";

function capitalize(str: any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function TableTest({
  columns = [],
  data = [],
  renderCell,
  limit,
  page,
  nextPage = () => { },
  prevPage = () => { },
  setLimit = () => { },
  pagination,
  setPage,
  loading,
  searchValue,
  actionText,
  handleAction,
  selectedKeys,
  setSelectedKeys,
  title,
  searchComponent,
  searchSlice,
  statusTranslations = {},
  statuses = [],
  searchPlaceholder = 'بحث .. ',
  searchField = "title",
  selectionMode = "multiple",
}: TTableProps) {
  const dispatch = useDispatch();
  const [statusFilter, setStatusFilter] = React.useState<any>([statuses[0]]);

  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(columns.map((column: any) => column.uid))
  );
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const pages = pagination?.totalPages;
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    url.searchParams.set("limit", limit.toString());
    window.history.pushState({}, "", url.toString());
  }, [page, limit, dispatch]);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const items = React.useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [page, data, limit]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: any, b: any) => {
      const first = a[sortDescriptor.column as keyof any] as number;
      const second = b[sortDescriptor.column as keyof any] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const prevStatusRef = useRef<string | null>(null);
  useEffect(() => {
    const url = new URL(window.location.href);
    const status = url.searchParams.get("status");
    setStatusFilter(status);
    const englishStatus = statusTranslations[status as string] || null;

    if (englishStatus && prevStatusRef.current !== englishStatus) {
      prevStatusRef.current = englishStatus;
      dispatch(searchSlice.setSearch({ status: englishStatus }));
      dispatch(searchSlice.search());
    }
  }, [dispatch, searchSlice, statusTranslations]);

  const handleStatus = useCallback(
    (arabicStatus: any) => {
      const englishStatus =
        arabicStatus === "الكل" ? null : statusTranslations[arabicStatus];
      const url = new URL(window.location.href);
      if (englishStatus) {
        url.searchParams.set("status", arabicStatus);
      } else {
        url.searchParams.delete("status");
      }
      window.history.pushState({}, "", url.toString());

      dispatch(searchSlice.setSearch({ status: englishStatus }));
      dispatch(searchSlice.search());
    },
    [dispatch, statusTranslations, searchSlice?.setSearch, searchSlice?.search]
  );

  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const changeHandler = useCallback(
    (value: string) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      dispatch(searchSlice.setSearch({ [searchField]: value }));
      const newTimeoutId: any = setTimeout(() => {
        dispatch(searchSlice.search());
      }, 500);
      setTimeoutId(newTimeoutId);
    },
    [dispatch, searchSlice]
  );

  const topContent = React.useMemo(() => {
    return (

      <div className="flex flex-col  ">
        <div className="container ">
          <div className=" flex flex-col gap-4 bg-white p-4 rounded-lg">
              {searchComponent}
            <div className=" flex justify-between">
              <div className="flex gap-[16px] text-[--primaryColor]">
                {statuses.length && (
                  <Dropdown>
                    <DropdownTrigger className="hidden sm:flex bg-[--linerMainColor]  text-mainColor font-bold">
                      <Button
                        endContent={<IoIosArrowDown className=" all" />}
                        className=" h-[40px]"
                        size="md"
                        variant="flat"
                      >
                        {statusFilter}الكل
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Status"
                      closeOnSelect={true}
                      selectedKeys={new Set([statusFilter])}
                      selectionMode="single"
                      onSelectionChange={(keys) => {
                        const selectedKey = Array.from(
                          keys
                        )[0] as keyof typeof statuses;
                        const selected = statuses[selectedKey];

                        handleStatus(selected);
                        setStatusFilter(selected);
                      }}
                    >
                      {statuses?.map((status, index) => (
                        <DropdownItem key={index} className="capitalize">
                          {status}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                )}

                <Dropdown>
                  <DropdownTrigger className="flex bg-[--linerMainColor] text-mainColor font-bold">
                    <Button
                      className=" h-[40px] "
                      endContent={<IoIosArrowDown className=" all" />}
                      size="md"
                      variant="flat"
                    >
                      الاعمدة
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label="Table Columns"
                    closeOnSelect={false}
                    selectedKeys={visibleColumns}
                    selectionMode="multiple"
                    onSelectionChange={setVisibleColumns}
                  >
                    {columns.map((column) => (
                      <DropdownItem key={column.uid} className="capitalize">
                        {capitalize(column.name)}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>

              </div>
              {actionText ? (
                typeof handleAction === "function" ? (
                  <Button
                    className="bg-mainColor  text-background z-20"
                    endContent={<FaPlus />}
                    size="md"

                    onClick={handleAction}
                  >
                    {actionText}
                  </Button>
                ) : (
                  <Link
                    className=" text-background bg-mainColor  h-[40px]   flex justify-center items-center px-[12px] rounded-lg shadow-lg gap-x-2 "
                    href={handleAction || "#"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 19 20" fill="none">
                      <path d="M12.6875 9.99948H9.5M9.5 9.99948H6.3125M9.5 9.99948V13.187M9.5 9.99948L9.5 6.81198M18 10C18 14.6944 14.1944 18.5 9.5 18.5C4.80558 18.5 1 14.6944 1 10C1 5.30558 4.80558 1.5 9.5 1.5C14.1944 1.5 18 5.30558 18 10Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    {actionText}
                  </Link>
                )
              ) : null}
            </div>
          </div>
        </div>

      </div>
    );
  }, [visibleColumns, setLimit, data.length, statusFilter, searchSlice]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className=" px-[20px] pb-[30px] pt-[32px] flex bg-white border-[#E3E3E3] rounded-b-[12px] justify-between items-center">
        <Button
          className={`${page != 1 ? "cursor-pointer" : "cursor-not-allowed"} w-[150px] h-[50px] custom-box text-mainColor`}
          disabled={page === 1}
          onClick={() => dispatch(prevPage())}
        >
          <span className=" text-[18px] font-bold " > السابق </span>
        </Button>
        <Pagination
          classNames={{
            item: "text-mainColor",
            cursor: "custom-box text-mainColor",
          }}
          page={page}
          total={pages}
          variant="light"
          onChange={(num) => dispatch(setPage(num))}
        />
        <Button
          className={`${pagination?.totalPages !== page ? "cursor-pointer" : "cursor-not-allowed"} bg-mainColor  w-[150px] h-[50px] text-[--primaryColor]`}
          disabled={pagination?.totalPages <= page}
          onClick={() => dispatch(nextPage())}
        >

          <span className=" text-[18px] font-bold " > التالي </span>
        </Button>
      </div>
    );
  }, [selectedKeys, items.length, page, prevPage, nextPage]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-w-3xl", "h-screen"],
      th: ["!rounded-none", "bg-[#E5E5E5]", "text-white", "borer-none"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
        " border-y border-dashed border-[#E3E3E3]  mb-1",
        "group-data:first:border-r ",
        "group-data:border-l ",
      ],
    }),
    []
  );

  return (
    <div className="h-max py-[36px] ">
      <div className=" min-h-screen   bg-transparent w-full overflow-auto   ">
        {topContent}
        <Table
          isCompact
          className="min-w-[600px] container gap-0 border-none "
          removeWrapper
          aria-label="Example table with custom cells, pagination and sorting"
          bottomContentPlacement="outside"
          checkboxesProps={{
            classNames: {
              wrapper: "after:bg-mainColor",
            },
          }}
          classNames={classNames}
          selectedKeys={selectedKeys}
          selectionMode={selectionMode}
          sortDescriptor={sortDescriptor}
          bottomContent={bottomContent}
          onRowAction={() => console.log()}
          topContentPlacement="outside"
          onSelectionChange={(data) => dispatch(setSelectedKeys(data))}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={headerColumns}  >
            {(column) => (
              <TableColumn
                className="text-mainColor font-bold text-[14px] py-[20px]"
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                allowsSorting={column.sortable}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            className=" container overflow-x-auto "
            isLoading={loading}
            loadingContent={
              <div className="flex justify-center items-end  h-full">
                <div className=" h-4/6">
                  <ClipLoader color="#36d7b7" size={30} />
                </div>
              </div>
            }
            emptyContent={"لا يوجد بيانات"}
            items={sortedItems}
          >
            {(item) => (
              <TableRow
                key={item._id}
                className="text-black hover:bg-transparent border-none  bg-opacity-50 even:bg-opacity-100 odd:bg-white  border-[#E3E3E3] border even:bg-[#F8F8F8]"
              >
                {(columnKey) => (
                  <TableCell className="bg-transparent p-5 whitespace-nowrap overflow-hidden text-ellipsis">
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );


}
