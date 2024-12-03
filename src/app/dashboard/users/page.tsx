"use client";
import { useMemo, useState } from "react"; 
import { Select, SelectItem } from "@nextui-org/react"; 
import DeleteManyProducts from "./deleteMany";
import ActionList from "./components/actionList/ActionsMenu";
import UserSearch from "./components/header";
import { statusOptions } from "./components/statusOptions";
import HeadTable from "~/common/components/molecules/headTable";
import Table from "~/common/components/molecules/table";
import UserHeader from "./components/header";

function Page() {
  
  const staticData = [
    {
      id: 1,
      collection: "Product 1",
      userName: "Ahmed Ali",
      phone: "+201234567890",
      email: "ahmed@example.com",
      status: "Active",
      images: [{ imageUrl: "/assets/product1.jpg" }],
      price: "1000",
      stock: { quantity: 50 },
      category: { title: "Category 1" },
      subCategory: { title: "Subcategory 1" },
    },
    {
      id: 2,
      collection: "Product 2",
      userName: "Fatima Zaid",
      phone: "+201234567891",
      email: "fatima@example.com",
      status: "Inactive",
      images: [{ imageUrl: "/assets/product2.jpg" }],
      price: "2000",
      stock: { quantity: 30 },
      category: { title: "Category 2" },
      subCategory: { title: "Subcategory 2" },
    },
  ];
  const [statusData, setStatusData] = useState(staticData);


  // const columns = [
  //   { name: "Name", uid: "userName" },
  //   { name: "Phone", uid: "phone" },
  //   { name: "Email", uid: "email" },
  //   { name: "Statud", uid: "status" },
  //   { name: "Setting", uid: "actions" },
  // ];

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "userName",
        Cell: ({ row }: any) => (
          <div className="py-4 text-[14px] items-center text-[--secColor] font-bold">
            <p>{row.original?.userName}</p>
          </div>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ row }: any) => <p>{row.original?.email}</p>,
      },
      {
        Header: "Phone",
        accessor: "phone",
        Cell: ({ row }: any) => <p>{row.original?.phone}</p>,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }: any) => {
          const item = row.original;
          const selectorStatus = statusOptions.find((option) => option.value === item?.status);
  
          return (
            <div
              className="flex justify-start"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <Select
                style={{
                  border: `1px solid #008ffb`,
                  backgroundColor: "transparent",
                  borderRadius: "4px",
                  color: "#008ffb",
                  minHeight: "30px",
                  width: "120px",
                  height: "30px",
                }}
                size="lg"
                placeholder={selectorStatus?.label || "غير محدد"}
                className="w-40"
                classNames={{
                  base: "text-mianColor placeholder:text-mainColor p-0 m-0 bg-transparent",
                  popoverContent: "py-3 px-2 m-0 w-40 rounded-[4px]",
                  selectorIcon: `text-mainColor`,
                  value: "text-mainColor group-data-[has-value=true]:text-mainColor",
                }}
                onChange={(status: any) => {
                  const updatedData = statusData.map((product: any) =>
                    product.id === item.id
                      ? { ...product, status: status.target.value }
                      : product
                  );
                  setStatusData(updatedData); // Update the state with the new data
                }}
              >
                {statusOptions?.map((role: any) => (
                  <SelectItem
                    key={role.value}
                    value={role.value}
                    style={{
                      backgroundColor: "#008ffb",
                      borderRadius: "4px",
                      color: "#008ffb",
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
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }: any) => <ActionList item={row.original} />,
      },
    ],
    [statusData, statusOptions, setStatusData]
  );

  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
    <HeadTable title="Users" description="View details and actions" />
    <div className="container">
      <Table
        header={<UserHeader />}
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
