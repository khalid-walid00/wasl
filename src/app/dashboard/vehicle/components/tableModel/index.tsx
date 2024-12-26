import React from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRowId } from '../../vehicle.slice';

function TableModel() {
    const dispatch = useDispatch();
    const { modalRow, vehicleId, items: { Data } } = useSelector((state: any) => state.vehiclesSlice);
    const { items: { Data: dataCompanie } } = useSelector((state: any) => state.companiesSlice);

    const selectedVehicle = Data?.find((item: any) => item.Id === vehicleId);
    const Companie = selectedVehicle 
        ? dataCompanie?.find((item: any) => item.Id === selectedVehicle?.OperationCompanyId) 
        : null;

    if (!selectedVehicle) {
        return null;
    }

    return (
        <CustomModal isOpen={modalRow} onOpenChange={() => dispatch(setSelectedRowId(null))} title="Company Details">
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>Id</CustomLabel>
                        {selectedVehicle.Id || 'N/A'}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>Deleted From Wasl
                        </CustomLabel>
                        {selectedVehicle.IsDeletedFromWasl ? <div className=' text-red-600'>Yes</div>  : <div className=' text-green-600'>No</div> || 'N/A'}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>WASL Vehicle Key</CustomLabel>
                        {selectedVehicle.WaslId || 'N/A'}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>IMEI Number</CustomLabel>
                        {selectedVehicle.ImeiNumber || 'N/A'}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>VehiclePlate</CustomLabel>
                       { ( selectedVehicle.VehiclePlate?.LeftLetter + " "+  selectedVehicle?.VehiclePlate?.MiddleLetter   + " "+ selectedVehicle.VehiclePlate?.RightLetter + ` | `+ selectedVehicle.VehiclePlate?.Number) || 'N/A'} 
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>Plate Type</CustomLabel>
                        {selectedVehicle.PlateType || 'N/A'}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>Sequence Number</CustomLabel>
                        {selectedVehicle.SequenceNumber || 'N/A'}
                    </div>
                {Companie && (
                    <div className="flex flex-col gap-1 ">
                        <CustomLabel bold>Company Name </CustomLabel>
                        {Companie.Name || 'N/A'}
                    </div>
                )}
                </div>

        </CustomModal>
    );
}

export default TableModel;
