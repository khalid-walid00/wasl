import React, { useEffect } from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInquiry, setInquiryModel } from '../../vehicle.slice';
import { LoadingScreen } from '~/common/components/templates/loadingSecreen';

function InquiryModel() {
    const dispatch = useDispatch();
    const { inquiryModel, inquiry } = useSelector((state: any) => state.vehiclesSlice);
    const endpoint = `/vehicles/vehicle-inquiry?VehicleId=${inquiry?.Id}`;

    useEffect(() => {
        if (inquiry?.Id && inquiryModel) {
            dispatch(fetchInquiry({ method: "GET", endpoint }));
        }
    }, [inquiry?.Id]);
 console.log(Object.keys(inquiry).length);
    return (
        <CustomModal isOpen={inquiryModel} onOpenChange={() => dispatch(setInquiryModel(null))} title="Vehicle Inquiry">
            {Object.keys(inquiry).length === 0 ? (
                <LoadingScreen />
            ) : (
                <div className="flex flex-col gap-5">
                    {/* Reference Key */}
                    <div className="flex flex-col gap-2">
                        <CustomLabel>Reference Key</CustomLabel>
                        <div className="border rounded-md px-4 py-2 bg-gray-100">{inquiry.ReferenceKey}</div>
                    </div>

                    {/* Plate Information */}
                    <div className="flex flex-col gap-2">
                        <CustomLabel>Plate</CustomLabel>
                        <div className="flex items-center gap-2">
                            <div className="border rounded-md px-4 py-1">{inquiry?.Plate?.Number}</div>
                            <div className="border rounded-md px-3 py-1">{inquiry?.Plate?.LeftLetter}</div>
                            <div className="border rounded-md px-3 py-1">{inquiry?.Plate?.MiddleLetter}</div>
                            <div className="border rounded-md px-3 py-1">{inquiry?.Plate?.RightLetter}</div>
                        </div>
                    </div>

                    {/* Vehicle Location Information */}
                    <div className="flex flex-col gap-2">
                        <CustomLabel>Vehicle Location</CustomLabel>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <CustomLabel>Latitude</CustomLabel>
                                <div className="border rounded-md px-4 py-2 bg-gray-100">
                                    {inquiry?.VehicleLocationInformation?.Latitude}
                                </div>
                            </div>
                            <div>
                                <CustomLabel>Longitude</CustomLabel>
                                <div className="border rounded-md px-4 py-2 bg-gray-100">
                                    {inquiry?.VehicleLocationInformation?.Longitude}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <CustomLabel>Status</CustomLabel>
                            <div className="w-max bg-blue-600 rounded-md px-4 py-1 text-white">
                                {inquiry?.VehicleLocationInformation?.VehicleStatus || 'N/A'}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <CustomLabel>Actual Time</CustomLabel>
                                <div className="border rounded-md px-4 py-2 bg-gray-100">
                                    {inquiry?.VehicleLocationInformation?.ActualTime}
                                </div>
                            </div>
                            <div>
                                <CustomLabel>Received Time</CustomLabel>
                                <div className="border rounded-md px-4 py-2 bg-gray-100">
                                    {inquiry?.VehicleLocationInformation?.ReceivedTime}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registration Time */}
                    <div className="flex flex-col gap-2">
                        <CustomLabel>Registration Time</CustomLabel>
                        <div className="border rounded-md px-4 py-2 bg-gray-100">
                                {inquiry?.RegistrationTime?.replace('T', ' : ')}
                        </div>
                    </div>

                    {/* Operating Companies */}
                    <div className="flex flex-col gap-2">
                        <CustomLabel>Operating Companies</CustomLabel>
                        {inquiry?.OperatingCompanies?.map((company: any, index: number) => (
                            <div key={index} className="border rounded-md p-3 bg-gray-100">
                                <div className="font-bold">{company.Name}</div>
                                <div className={`mt-1 ${company.IsVehicleValid ? 'text-green-500' : 'text-red-500'}`}>
                                    {company.IsVehicleValid ? 'Valid' : 'Invalid'}
                                </div>
                                {company.VehicleRejectionReason && (
                                    <div className="text-red-600 mt-1">
                                        Reason: {company.VehicleRejectionReason}
                                    </div>
                                )}
                                 
                                    <div className="  font-bold">
                                    Reference Key:  
                                    <span className=' font-normal'>
                                         {company.ReferenceKey}
                                        </span>
                                    </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </CustomModal>
    );
}

export default InquiryModel;
