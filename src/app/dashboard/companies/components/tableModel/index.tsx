import React from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { setSelectedRowId } from '../../companies.slice';
import { useDispatch, useSelector } from 'react-redux';

function TableModel() {
    const dispatch = useDispatch();
    const { modalRow, companyId, items: { Data } } = useSelector((state: any) => state.companiesSlice);
    return (
        <CustomModal size='4xl' isOpen={modalRow} onOpenChange={() => dispatch(setSelectedRowId(null))} title="Company Details">
            <div>
                {
                    Data?.filter((item: any) => item?.Id === companyId)?.map((item: any, index: number) => (
                        <div key={index} className=" grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Name</CustomLabel>
                                {item?.Name || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>EmailAddress</CustomLabel>
                                {item?.EmailAddress || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Wasl Id</CustomLabel>
                                {item?.WaslId || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Phone Number</CustomLabel>
                                {item?.PhoneNumber || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Identity Number</CustomLabel>
                                {item?.IdentityNumber || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Created Date</CustomLabel>
                                {item?.CreatedDate || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Created By</CustomLabel>
                                {item?.CreatedBy || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>CR Number</CustomLabel>
                                {item?.CommercialRecordNumber || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>CRI Date Hijri</CustomLabel>
                                {item?.CommercialRecordIssueDateHijri || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Date of Birth Gregorian</CustomLabel>
                                {item?.DateOfBirthGregorian || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Extension Number</CustomLabel>
                                {item?.ExtensionNumber || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Manager Name</CustomLabel>
                                {item?.ManagerName || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Manager Phone Number</CustomLabel>
                                {item?.ManagerPhoneNumber || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1  ">
                                <CustomLabel bold>Manager Mobile Number</CustomLabel>
                                {item?.ManagerMobileNumber || 'N/A'}
                            </div>
                            <div className="flex  flex-col gap-2">
                                <CustomLabel bold>Uplevel Operation Company Id</CustomLabel>
                                {item?.UplevelOperationCompanyId || 'N/A'}
                            </div>
                        </div>
                    ))
                }

            </div>
        </CustomModal>
    );
}

export default TableModel;