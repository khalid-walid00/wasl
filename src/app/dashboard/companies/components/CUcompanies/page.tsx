"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadTable from "~/common/components/molecules/headTable";
import NameInput from "./components/companyName";
import IdentityNumber from "./components/identityNumber";
import CommercialRecordNumber from "./components/commercialRecordNumber";
import CommercialRecordIssueDateHijri from "../../../../../common/components/molecules/DateHijri";
import ExtensionNumber from "./components/ExtensionNumber";
import CompanyActivity from "./components/companyActivity";
import DateOfBirthHijri from "./components/DateOfBirthHijri";
import DateOfBirthGregorian from "./components/DateOfBirthGregorian";
import PhoneNumber from "./components/phoneNumber";
import EmailAddress from "./components/EmailAddress";
import ManagerName from "./components/ManagerName";
import ManagerPhoneNumber from "./components/ManagerPhoneNumber";
import ManagerMobileNumber from "./components/ManagerMobileNumber";
import UplevelOperationCompanyId from "./components/uplevelOperationCompanyId";
import Button from "~/common/components/atoms/button";
import { fetchOneData, clearOneData, sendData, setCUData, changeRegisterType, faildSetData } from "../../companies.slice";
import { AiOutlineReload } from "react-icons/ai";
import DynamicDateInputHijr from "../../../../../common/components/molecules/DateHijri";
import { validateCompanyData, validateOwnerInfoData } from "./validation";

const CUCompaniesComponent = ({ _id }: any) => {
  const dispatch = useDispatch();
  const { company, companyType } = useSelector((state: any) => state.companiesSlice);
  useEffect(() => {
    if (_id) {
      dispatch(fetchOneData(_id));
    } else {
      dispatch(clearOneData());
    }
  }, [_id, dispatch]);
console.log("company",company);
  const handleSendData = async () => {
    const validateRsult: any = companyType === "Corporate" ? await validateCompanyData(company) : await validateOwnerInfoData(company);
console.log("validateRsult", validateRsult);
    if (!validateRsult.valid) {
      dispatch(faildSetData(validateRsult.errors));
      return;
    }

    dispatch(sendData());
  };
  const handleClearData = () => {
    dispatch(clearOneData());
  };
  const handelChangeType = (type: string) => {
    dispatch(clearOneData());
    dispatch(changeRegisterType(type));
  }
  // const result : any = validateOwnerInfoData
  // if (!result.valid) {
  //   result?.errors?.map((msg: any) => {

  //   });

  //   return;
  // }
  const renderFields = () => {
    switch (companyType) {
      case "Corporate":
        return (
          <>
            <NameInput />
            <IdentityNumber />
            <CommercialRecordNumber />
            <DynamicDateInputHijr
              label="Commercial Record Issue Date (Hijri)"
              slice="companiesSlice"
              field="CommercialRecordIssueDateHijri"
              defaultValue={company.CommercialRecordIssueDateHijri}
            />
            <ManagerName />
            <EmailAddress />
            <CompanyActivity />
            <ManagerPhoneNumber />
            <ManagerMobileNumber />
            {/* <DateOfBirthGregorian /> */}
            <PhoneNumber />
            <UplevelOperationCompanyId />

          </>
        );
      case "Individual":
        return (
          <>
            <NameInput />
            <IdentityNumber />
            {/* <ExtensionNumber /> */}
            <CompanyActivity />
            <DynamicDateInputHijr
              label="Date Of Birth (Hijri)"
              slice="companiesSlice"
              field="DateOfBirthHijri"
              defaultValue={company.DateOfBirthHijri}
            />
            <PhoneNumber />
            <EmailAddress />
          </>
        );
      default:
        return <div className=" min-h-[50vh] text-lg flex-col  font-bold flex items-center justify-center ">
          Please Selet Company Type
          <AiOutlineReload size={32} className=" transition-all animate-spin  text-mainColor" />
        </div>;
    }
  };

  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
      <HeadTable title="Create New Company" description="Create a new company" />
      <div className="flex flex-col justify-between gap-8 container">
        <div className="flex items-center flex-col w-full gap-6 bg-white rounded-lg border border-grayWhite p-4">
          <div className="text-2xl font-bold">Company Information</div>
          <div className="w-full">
            <div className="flex flex-col gap-6 w-full items-center justify-between">
              <div className="flex gap-8">

                <Button primary={companyType == "Corporate"} onClick={() => handelChangeType("Corporate")}>
                  Corporate
                </Button>
                <Button primary={companyType == "Individual"} onClick={() => handelChangeType("Individual")}>
                  Individual
                </Button>
              </div>
              <div className={`grid ${companyType == "" ? " grid-cols-1" : "grid-cols-2"}  gap-4 w-full`}>{renderFields()}</div>
              {companyType !== "" &&
                <div className="flex flex-col w-5/12 gap-6">
                  <Button onClick={handleSendData} primary className="px-8 w-full">
                    Register
                  </Button>
                  <Button onClick={handleClearData} className="px-8 w-full">
                    Clear
                  </Button>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CUCompaniesComponent;
