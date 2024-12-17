import React, { useEffect } from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInquiry, setInquiryModel } from '../../vehicle.slice';
import { LoadingScreen } from '~/common/components/templates/loadingSecreen';

function InquiryModel() {
    const dispatch = useDispatch();
    const { inquiryModel, vehicle,inquiry} = useSelector((state: any) => state.vehiclesSlice);
     const endpoint =`/vehicles/vehicle-inquiry?VehicleId=${vehicle?.Id}`

     useEffect(() => {
        if (vehicle?.Id) { 
            dispatch(fetchInquiry({ method: "GET", endpoint }));
        }
    }, [vehicle?.Id]);

    return (
        <CustomModal isOpen={inquiryModel} onOpenChange={() => dispatch(setInquiryModel(null))} title="Inquiry">
              {Object.keys(inquiry).length === 0 ? 
            <LoadingScreen/>    :
            <div className="flex flex-col gap-3">
                <div className="flex flex-col items-end gap-2">
                    <CustomLabel>Is Valid</CustomLabel>
                    {inquiry?.IsValid ? 
                        <div className='  bg-green-600 rounded-md px-4 py-1 text-white '>Valid</div> :
                        <div className='  bg-red-600 rounded-md px-4 py-1 text-white '>Invalid</div> 
                    }
                </div>

                <div className="flex flex-col items-end  gap-2">
                    <CustomLabel>Reference Number</CustomLabel>
                    <div>{inquiry?.ReferenceNumber}</div>
                </div>

                <div className="flex flex-col items-end  gap-2">
                    <CustomLabel>vehicle Name</CustomLabel>
                    <div>{inquiry?.Name}</div>
                </div>

                <div className="flex flex-col  items-end gap-2">
                    <CustomLabel>Registration Date</CustomLabel>
                    <div>{inquiry?.RegistrationDate}</div>
                </div>
            </div>
          }
        </CustomModal>
    );
}

export default InquiryModel;