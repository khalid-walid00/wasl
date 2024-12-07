"use client";

import CUCompaniesComponent from "../../components/CUcompanies/page";


function UpdateComapany({ params:{company} }: any) {
   console.log("params",company);
    return (
       
        <CUCompaniesComponent _id={company} />
    );
}

export default UpdateComapany;