"use client";
import CustomInput from '~/common/components/atoms/input';
import CustomLabel from '~/common/components/atoms/label';
import HeadTable from '~/common/components/molecules/headTable';
import "react-datepicker/dist/react-datepicker.css";
import CustomSelector from '~/common/components/atoms/customSelector/CustomSelector';
import Button from '~/common/components/atoms/button';

function CreateDriver() {

    const optionsData = {
        carModel: [
            { label: "BMW", value: "bmw" },
            { label: "Mercedes", value: "mercedes" },
            { label: "Audi", value: "audi" },
            { label: "Tesla", value: "tesla" },
        ],
        vehicleType: [
            { label: "سيارة", value: "car" },
            { label: "دراجة نارية", value: "motorcycle" },
            { label: "شاحنة", value: "truck"},
            { label: "حافلة", value: "bus" },
            { label: "سيارة كهربائية", value: "electric_car" },
            { label: "سيارة رياضية", value: "sports_car" }
           ],
        status: [
            { label: "نشط", value: "active" },
            { label: "معلق", value: "pending" },
            { label: "ملغي", value: "canceled" },
            { label: "مهمل", value: "rejected" },
          ],
    };
    return (
        <div className=" bg-transparent py-[18px] flex flex-col gap-10 ">
            <HeadTable title="تسجيل سائق" description="تسجيل سائق جديد" />
            <div className=" flex justify-center gap-8 container ">

                <div className="flex flex-col gap-11 w-full">
                    <div className=" h-max w-full flex flex-col gap-6 bg-white  rounded-lg border border-grayWhite p-4">
                        <div className="text-2xl font-bold"> بيانات  السائق</div>

                        <div className=" flex flex-col gap-4 ">
                            <div className=" flex flex-col gap-2">
                                <CustomLabel bold>اسم السائق</CustomLabel>
                                <CustomInput placeholder='اسم السائق' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <CustomLabel bold>رقم السائق</CustomLabel>
                                <CustomInput placeholder='رقم السائق' />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <CustomLabel bold>رقم الرخصة</CustomLabel>
                                <CustomInput placeholder='رقم الرخصة' />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <CustomLabel bold>نوع المركبة</CustomLabel>
                                <CustomSelector
                                    options={optionsData.vehicleType}
                                    onChange={() => { }}
                                    value={null}
                                    placeholder="حدد نوع"
                                />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <CustomLabel bold>نوع الموديل</CustomLabel>
                                <CustomSelector
                                    options={optionsData.carModel}
                                    onChange={() => { }}
                                    value={null}
                                    placeholder="حدد الموديل"
                                />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <CustomLabel bold>الحالة</CustomLabel>
                                <CustomSelector
                                    options={optionsData.status}
                                    onChange={() => { }}
                                    value={null}
                                    placeholder="حدد الحالة"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex  justify-center">
                        <Button primary className=' px-8 w-4/12'>
                            تسجيل
                        </Button>
             
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateDriver;