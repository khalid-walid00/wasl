"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingScreen } from "~/common/components/templates/loadingSecreen";
import HeadTable from "~/common/components/molecules/headTable";
import NameInput from "./components/companyName";
import IdentityNumber from "./components/identityNumber";
import CommercialRecordNumber from "./components/commercialRecordNumber";
import CommercialRecordIssueDateHijri from "./components/commercialRecordIssueDateHijri";
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
import { fetchOneData, clearOneData, sendData } from "../../companies.slice";

const CUCompaniesComponent = ({ _id }: any) => {
  const dispatch = useDispatch();
  const { company } = useSelector((state: any) => state.companiesSlice);

  useEffect(() => {
    if (_id) {
      dispatch(fetchOneData(_id));
    } else {
      dispatch(fetchOneData(null));
      dispatch(clearOneData());
    }
  }, [_id, dispatch]);
  const handeleSendData = (e: any) => {
    dispatch(sendData());
  }
  const handeleClearData = (e: any) => {
    dispatch(clearOneData());
  }
  return (
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
      <HeadTable title="Create New Company" description="Create a new company" />
      <div className="flex flex-col  justify-between gap-8 container">
        <div className="flex items-center flex-col w-full gap-6 bg-white rounded-lg border border-grayWhite p-4">
          <div className="text-2xl font-bold">Company Information</div>
          <div className=" w-full grid grid-cols-2 gap-4">
            <NameInput />
            <IdentityNumber />
            <ExtensionNumber />
            <CompanyActivity />
            <PhoneNumber />
            <EmailAddress />
            <UplevelOperationCompanyId />
            {
              company?.IdentityNumber?.startsWith("70") ? <>
                <CommercialRecordNumber />
                <CommercialRecordIssueDateHijri />
                <ManagerName />
                <ManagerPhoneNumber />
                <ManagerMobileNumber />
                <DateOfBirthGregorian />
              </>
                :
            <DateOfBirthHijri />
            }
          </div>
          <div className="flex flex-col w-5/12 gap-6">
            <Button onClick={handeleSendData} primary className='px-8 w-full'>
              Register
            </Button>
            <Button onClick={handeleClearData} className='px-8 w-full'>
              Clear
            </Button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CUCompaniesComponent;
