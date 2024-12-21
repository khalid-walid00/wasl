import React, { useEffect } from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { fetchInquiry, setInquiryModel } from '../../companies.slice';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '~/common/components/templates/loadingSecreen';

function InquiryModel() {
    const dispatch = useDispatch();
    const { inquiryModel, company, inquiry } = useSelector((state: any) => state.companiesSlice);
    let endpoint
    if (company?.IdentityNumber?.startsWith("70")) {
        endpoint = `/operationCompany/inquiry-company?operationCompanyId=${company?.Id}`
    } else {
        endpoint = `/operationCompany/inquiry-individual?operationCompanyId=${company?.Id}`

    }
    useEffect(() => {
        if (company?.Id&&inquiryModel) { 
            dispatch(fetchInquiry({ method: "GET", endpoint }));
        }
    }, [company?.Id]);
     
    return (
        <CustomModal isOpen={inquiryModel} onOpenChange={() => dispatch(setInquiryModel(""))} title="Inquiry">
          {Object.keys(inquiry).length === 0 ? 
            <LoadingScreen/>    :
            <div className="flex flex-col gap-3">
                <div className="flex flex-col  gap-2">
                    <CustomLabel>Is Valid</CustomLabel>
                    {inquiry?.IsValid ? 
                        <div className=' w-max  bg-green-600 rounded-md px-4 py-1 text-white '>Valid</div> :
                        <div className=' w-max  bg-red-600 rounded-md px-4 py-1 text-white '>Invalid</div> 
                    }
                </div>

                <div className="flex flex-col   gap-2">
                    <CustomLabel>Reference Number</CustomLabel>
                    <div>{inquiry?.ReferenceNumber}</div>
                </div>

                <div className="flex flex-col   gap-2">
                    <CustomLabel>Company Name</CustomLabel>
                    <div>{inquiry?.Name}</div>
                </div>

                <div className="flex flex-col   gap-2">
                    <CustomLabel>Registration Date</CustomLabel>
                    <div>{inquiry?.RegistrationDate}</div>
                </div>
            </div>
          }

        </CustomModal>
    );
}

export default InquiryModel;