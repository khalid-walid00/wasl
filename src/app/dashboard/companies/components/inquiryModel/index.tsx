import React, { useEffect } from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { fetchInquiry, setInquiryModel, setSelectedRowId } from '../../companies.slice';
import { useDispatch, useSelector } from 'react-redux';

function InquiryModel() {
    const dispatch = useDispatch();
    const { inquiryModel, company} = useSelector((state: any) => state.companiesSlice);
    let endpoint
    if (company?.IdentityNumber?.startsWith("70")){
        endpoint=`/operationCompany/inquiry-individual?operationCompanyId=${company?.Id}`
    }else{
        endpoint=`/operationCompany/inquiry-company?operationCompanyId=${company?.Id}`

    }
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