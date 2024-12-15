import React, { useEffect } from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { fetchInquiry, setInquiryModel, setSelectedRowId } from '../../companies.slice';
import { useDispatch, useSelector } from 'react-redux';

function InquiryModel() {
    const dispatch = useDispatch();
    const { inquiryModel, company, inquiry } = useSelector((state: any) => state.companiesSlice);
    let endpoint
    if (company?.IdentityNumber?.startsWith("70")) {
        endpoint = `/operationCompany/inquiry-individual?operationCompanyId=${company?.Id}`
    } else {
        endpoint = `/operationCompany/inquiry-company?operationCompanyId=${company?.Id}`

    }
    useEffect(() => {
        dispatch(fetchInquiry({ method: "GET", endpoint }));
    }, [dispatch]);

    return (
        <CustomModal isOpen={inquiryModel} onOpenChange={() => dispatch(setInquiryModel(null))} title="Inquiry">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col items-end gap-2">
                    <CustomLabel>Is Valid</CustomLabel>
                    <div className="">{inquiry?.IsValid ? "Valid" : "Invalid"}</div>
                </div>

                <div className="flex flex-col items-end  gap-2">
                    <CustomLabel>Reference Number</CustomLabel>
                    <div>{inquiry?.ReferenceNumber}</div>
                </div>

                <div className="flex flex-col items-end  gap-2">
                    <CustomLabel>Company Name</CustomLabel>
                    <div>{inquiry?.Name}</div>
                </div>

                <div className="flex flex-col  items-end gap-2">
                    <CustomLabel>Registration Date</CustomLabel>
                    <div>{inquiry?.RegistrationDate}</div>
                </div>
            </div>
        </CustomModal>
    );
}

export default InquiryModel;