"use client";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react"; 
import Table from "~/common/components/organisms/Table/index";
import DeleteManyProducts from "./deleteMany";
import ActionList from "./components/actionList/ActionsMenu";
import ComapnySearch from "./components/search";
import { statusOptions } from "./components/statusOptions";
import { useDispatch } from "react-redux";
import { toggleModel } from "./create/createVehicle.slice";
import CreateVehicle from "./create/page";

function Page() {
  const dispatch = useDispatch();
  
  const staticData = [
    {
      id: 1,
      vehicleName: "تويوتا كورولا",
      vehicleType: "سيدان",
      vehicleModel: "2022",
      fuelType: "بنزين",
      gearBoxType: "أوتوماتيك",
      status: "نشطة",
      registrationDate: "2024-01-15",
    },
    {
      id: 2,
      vehicleName: "هيونداي توسان",
      vehicleType: "SUV",
      vehicleModel: "2021",
      fuelType: "ديزل",
      gearBoxType: "يدوي",
      status: "معلقة",
      registrationDate: "2023-11-10",
    },
    {
      id: 3,
      vehicleName: "مرسيدس بنز C-Class",
      vehicleType: "سيدان",
      vehicleModel: "2023",
      fuelType: "بنزين",
      gearBoxType: "أوتوماتيك",
      status: "نشطة",
      registrationDate: "2024-02-20",
    },
    {
      id: 4,
      vehicleName: "نيسان باترول",
      vehicleType: "SUV",
      vehicleModel: "2020",
      fuelType: "ديزل",
      gearBoxType: "أوتوماتيك",
      status: "مهملة",
      registrationDate: "2022-07-30",
    },
    {
      id: 5,
      vehicleName: "شيفروليه تاهو",
      vehicleType: "SUV",
      vehicleModel: "2021",
      fuelType: "بنزين",
      gearBoxType: "أوتوماتيك",
      status: "نشطة",
      registrationDate: "2023-05-12",
    },
  ];
  
  
  const [statusData, setStatusData] = useState(staticData); 


  const columns = [
    { name: "اسم المركبة", uid: "vehicleName" },
    { name: "نوع المركبة", uid: "vehicleType" },
    { name: "الموديل", uid: "vehicleModel" },
    { name: "البنزين", uid: "fuelType" },
    { name: "صندوق التروس", uid: "gearBoxType" },
    { name: "الحالة", uid: "status" },
    { name: "تاريخ التسجيل", uid: "registrationDate" },
    { name: "الاعدادات", uid: "actions" },
  ];
  const renderCell = (item: any, columnKey: React.Key) => {
    const selectorStatus = statusOptions.find(option => option.value === item?.status);
  
    switch (columnKey) {
      case "vehicleName":
        return <p>{item?.vehicleName}</p>;
  
      case "vehicleType":
        return <p>{item?.vehicleType}</p>;
  
      case "vehicleModel":
        return <p>{item?.vehicleModel}</p>;
        case "fuelType":
          return <p>{item?.fuelType}</p>;
    
      case "gearBoxType":
        return <p>{item?.gearBoxType}</p>;
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
    <>
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
      handleAction={() =>dispatch(toggleModel())}
      actionText={"اضافة مركبة"}
      title={"عرض المركبات"}
      searchPlaceholder="ابحث عن مركبة .."
      ActionsManyOprations={<DeleteManyProducts />}
    />
    <CreateVehicle/>
    </>
  );
}

export default Page;
