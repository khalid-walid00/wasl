import React from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRowId } from '../../vehicle.slice';

function TableModel() {
    const dispatch = useDispatch();
    const { modalRow, vehicleId, items: { Data } } = useSelector((state: any) => state.vehiclesSlice);
    return (
        <CustomModal isOpen={modalRow} onOpenChange={() => dispatch(setSelectedRowId(null))} title="Company Details">
            <div>
                {
                    Data?.filter((item: any) => item.Id === vehicleId)?.map((item: any, index: number) => (
                        <div key={index} className=" grid grid-cols-2 gap-3">
                             <div className="flex flex-col gap-1 items-end">
                                <CustomLabel bold>WASL Vehicle Key</CustomLabel>
                                {item.WASLVehicleKey || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <CustomLabel bold>IMEI Number</CustomLabel>
                                {item.IMEINumber || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <CustomLabel bold>Vehicle Number</CustomLabel>
                                {item.VehicleNo || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <CustomLabel bold>Plate ype</CustomLabel>
                                {item.PlateType || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <CustomLabel bold>Response</CustomLabel>
                                {item.Response || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <CustomLabel bold>Registration Date</CustomLabel>
                                {item.RegistrationDate || 'N/A'}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <CustomLabel bold>Reply</CustomLabel>
                                {item.Reply || 'N/A'}
                            </div>
                        </div>
                    ))
                }

            </div>
        </CustomModal>
    );
}

export default TableModel;