"use client";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react"; 
import Table from "~/common/components/organisms/Table/index";
import DeleteMany from "./deleteMany";
import ActionList from "./components/actionList/ActionsMenu";
import ComapnySearch from "./components/search";
import { statusOptions } from "./components/statusOptions";

function Page() {

  const staticData = [
    {
      id: 1,
      driverName: "أحمد علي",
      driverPhone: "+201234567890",
      licenseNumber: "ABC123456",
      status: "Active",
      activity: "نشط",
      registrationDate: "2024-01-01",
      vehicleType: "BMW",
      vehicleModel: "X5",
    },
    {
      id: 2,
      driverName: "فاطمة زيد",
      driverPhone: "+201234567893",
      licenseNumber: "XYZ987654",
      status: "Inactive",
      activity: "معلق",
      registrationDate: "2023-12-01",
      vehicleType: "Tesla",
      vehicleModel: "Model S",
    },
  ];

  const [statusData, setStatusData] = useState(staticData); 

  const columns = [
    { name: "اسم السائق", uid: "driverName" },
    { name: "رقم السائق", uid: "driverPhone" },
    { name: "رقم الرخصة", uid: "licenseNumber" },
    { name: "نوع المركبة", uid: "vehicleType" },
    { name: "موديل المركبة", uid: "vehicleModel" },
    { name: "الحالة", uid: "status" },
    { name: "النشاط", uid: "activity" },
    { name: "تاريخ التسجيل", uid: "registrationDate" },
    { name: "الاعدادات", uid: "actions" },
  ];

  const renderCell = (item: any, columnKey: React.Key) => {
    const selectorStatus = statusOptions.find(option => option.value === item?.status);

    switch (columnKey) {
      case "driverName":
        return <p>{item?.driverName}</p>;

      case "driverPhone":
        return <p>{item?.driverPhone}</p>;

      case "licenseNumber":
        return <p>{item?.licenseNumber}</p>;

      case "vehicleType":
        return <p>{item?.vehicleType}</p>;

      case "vehicleModel":
        return <p>{item?.vehicleModel}</p>;

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
                const updatedData = statusData.map((driver: any) =>
                  driver.id === item.id ? { ...driver, status: status.target.value } : driver
                );
                setStatusData(updatedData); 
              }}
            >
              {statusOptions?.map((role: any) => (
                <SelectItem
                  key={role.value}
                  value={role.value}
                  style={{
                    backgroundColor: "#81b4daa3",
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
      handleAction={`drivers/create`} 
      actionText={"اضافة سائق"}
      title={"عرض السائقين"} 
      searchPlaceholder="ابحث عن سائق .."
      ActionsManyOprations={<DeleteMany />}
    />
  );
}

export default Page;
