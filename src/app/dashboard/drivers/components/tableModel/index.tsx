import React from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRowId } from '../../drivers.slice';

function TableModel() {
    const dispatch = useDispatch();
    const { modalRow, companyId, items: { Data } } = useSelector((state: any) => state.driversSlice);

    return (
        <CustomModal isOpen={modalRow} onOpenChange={() => dispatch(setSelectedRowId(null))} title="Company Details">
            <div>
                {
                    Data?.filter((item: any) => item.Id === companyId)?.map((item: any, index: number) => (
                        <div key={index} className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>Wasl Id</CustomLabel>
                                {item.WaslId || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>Driver Id</CustomLabel>
                                {item.driverId || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>Driver Name</CustomLabel>
                                {item.driverName || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>Driver Name (Arabic)</CustomLabel>
                                {item.driverNameArabic || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>Assigned Asset</CustomLabel>
                                {item.driverAssignedAsset || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>License Number</CustomLabel>
                                {item.licenseNumber || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>License Number (Arabic)</CustomLabel>
                                {item.licenseNumberArabic || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>Mobile Number</CustomLabel>
                                {item.mobileNumber || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>Tag ID</CustomLabel>
                                {item.tagid || 'N/A'}
                            </div>

                            <div className="flex flex-col gap-1 items-end text-end">
                                <CustomLabel bold>License Expiry</CustomLabel>
                                {item.licenseExpiry || 'N/A'}
                            </div>
                        </div>
                    ))
                }
            </div>
        </CustomModal>
    );
}

export default TableModel;
