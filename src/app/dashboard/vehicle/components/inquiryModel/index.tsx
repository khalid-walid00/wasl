import React, { useEffect } from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInquiry, setInquiryModel } from '../../vehicle.slice';

function InquiryModel() {
    const dispatch = useDispatch();
    const { inquiryModel, company} = useSelector((state: any) => state.vehiclesSlice);
     const endpoint =`/vehicles/vehicle-inquiry?VehicleId=${company?.Id}`

    useEffect(() => {
        dispatch(fetchInquiry({method: "GET",endpoint}));     
    }, [dispatch]);

    return (
        <CustomModal isOpen={inquiryModel} onOpenChange={() => dispatch(setInquiryModel(null))} title="Inquiry">
            <div>
               مستني اعرف شكل الداتا من السيرفر 
            </div>
        </CustomModal>
    );
}

export default InquiryModel;