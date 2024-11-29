"use client";
import { useState } from "react"; 
import { Select, SelectItem } from "@nextui-org/react"; 
import Table from "~/common/components/organisms/Table/index";
import DeleteManyProducts from "./deleteMany";
import ActionList from "./components/actionList/ActionsMenu";
import UserSearch from "./components/search";
import { statusOptions } from "./components/statusOptions";

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


  const columns = [
    { name: "الاسم", uid: "userName" },
    { name: "رقم الهاتف", uid: "phone" },
    { name: "البريد", uid: "email" },
    { name: "الحالة", uid: "status" },
    { name: "الاعدادات", uid: "actions" },
  ];

  const renderCell = (item: any, columnKey: React.Key) => {
    const selectorStatus = statusOptions.find(option => option.value === item?.status);

    switch (columnKey) {
      case "userName":
        return (
          <div className="py-4 text-[14px] items-center text-[--secColor] font-bold">
            <p>{item?.userName}</p>
          </div>
        );

      case "email":
        return <p>{item?.email}</p>;

      case "phone":
        return <p>{item?.phone}</p>;

      case "status":
        return (
          <div
            className="flex justify-start "
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
              placeholder={selectorStatus?.label || 'غير محدد'}
              className="w-40"
              classNames={{
                base: "text-mianColor placeholder:text-mainColor p-0 m-0 bg-transparent",
                popoverContent: "py-3 px-2 m-0 w-40 rounded-[4px]",
                selectorIcon: `text-mainColor`,
                value: "text-mainColor group-data-[has-value=true]:text-mainColor",
              }}
              onChange={(status: any) => {
                const updatedData = statusData.map((product: any) =>
                  product.id === item.id ? { ...product, status: status.target.value } : product
                );
                setStatusData(updatedData); // تحديث الحالة عبر useState
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

      case "actions":
        return <ActionList item={item} />;

      default:
        return item;
    }
  };

  const statusTranslations = {
    "الكل": "All",
    "المهملات": "REJECTED",
  };

  const statuses = ['الكل', 'الكل', 'المهملات'];

  return (
    <Table
      renderCell={renderCell}
      columns={columns}
      searchValue={""}
      data={statusData} // استخدام البيانات المعدلة
      loading={false}
      searchComponent={<UserSearch />}
      limit={10}
      pagination={{ totalCount: statusData.length, totalPages: 1 }}
      page={2}
      statusTranslations={statusTranslations}
      searchSlice={{ search: "", setSearch: () => {} }}
      statuses={statuses}
      setPage={() => {}}
      nextPage={() => {}}
      prevPage={() => {}}
      setLimit={() => {}}
      selectedKeys={new Set()}
      setSelectedKeys={() => {}}
      handleAction={`/users/create`}
      actionText={"اضافة مستخدم"}
      title={"عرض المستخدمين"}
      searchPlaceholder="ابحث عن المنتج"
      ActionsManyOprations={<DeleteManyProducts />}
    />
  );
}

export default Page;
