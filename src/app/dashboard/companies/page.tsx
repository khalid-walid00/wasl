"use client";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react"; 
import Table from "~/common/components/organisms/Table/index";
import DeleteManyProducts from "./deleteMany";
import ActionList from "./components/actionList/ActionsMenu";
import ComapnySearch from "./components/search";
import { statusOptions } from "./components/statusOptions";

function Page() {
  
  const staticData = [
    {
      id: 1,
      companyName: "شركة ABC",
      companyPhone: "+201234567890",
      commercialRecord: "123456789",
      managerName: "أحمد علي",
      managerPhone: "+201234567891",
      managerPhone2: "+201234567892",
      status: "Active",
      activity: "نشط",
      registrationDate: "2024-01-01",
      images: [{ imageUrl: "/assets/product1.jpg" }],
      price: "1000",
      stock: { quantity: 50 },
      category: { title: "الفئة 1" },
      subCategory: { title: "الفئة الفرعية 1" },
    },
    {
      id: 2,
      companyName: "شركة XYZ",
      companyPhone: "+201234567893",
      commercialRecord: "987654321",
      managerName: "فاطمة زيد",
      managerPhone: "+201234567894",
      managerPhone2: "+201234567895",
      status: "Inactive",
      activity: "معلق",
      registrationDate: "2023-12-01",
      images: [{ imageUrl: "/assets/product2.jpg" }],
      price: "2000",
      stock: { quantity: 30 },
      category: { title: "الفئة 2" },
      subCategory: { title: "الفئة الفرعية 2" },
    },
  ];
  
  const [statusData, setStatusData] = useState(staticData); 


  const columns = [
    { name: "اسم الشركة", uid: "companyName" },
    { name: "رقم الشركة", uid: "companyPhone" },
    { name: "السجل التجاري", uid: "commercialRecord" },
    { name: "اسم المدير", uid: "managerName" },
    { name: "رقم المدير", uid: "managerPhone" },
    { name: "رقم اخر للمدير", uid: "managerPhone2" },
    { name: "الحالة", uid: "status" },
    { name: "النشاط", uid: "activity" },
    { name: "تاريخ التسجيل", uid: "registrationDate" },
    { name: "الاعدادات", uid: "actions" },
  ];
  const renderCell = (item: any, columnKey: React.Key) => {
    const selectorStatus = statusOptions.find(option => option.value === item?.status);
  
    switch (columnKey) {
      case "companyName":
        return <p>{item?.companyName}</p>;
  
      case "companyPhone":
        return <p>{item?.companyPhone}</p>;
  
      case "commercialRecord":
        return <p>{item?.commercialRecord}</p>;
  
      case "managerName":
        return <p>{item?.managerName}</p>;
  
      case "managerPhone":
        return <p>{item?.managerPhone}</p>;
  
      case "managerPhone2":
        return <p>{item?.managerPhone2}</p>;
  
      case "status":
        return (
          <div className="flex justify-start" onMouseDown={(e) => e.stopPropagation()}>
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
                base: "text-mainColor placeholder:text-mainColor p-0 m-0 bg-transparent",
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
                    backgroundColor: "#E4F2F2",
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
  
      case "activity":
        return <p>{item?.activity}</p>;
  
      case "registrationDate":
        return <p>{item?.registrationDate}</p>;
  
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
      data={statusData}
      loading={false}
      searchComponent={<ComapnySearch />}
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
      handleAction={`companies/create`}
      actionText={"اضافة شركة"}
      title={"عرض الشركات"}
      searchPlaceholder="ابحث عن شركة .."
      ActionsManyOprations={<DeleteManyProducts />}
    />
  );
}

export default Page;
