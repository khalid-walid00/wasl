import CUCompaniesComponent from "../../components/CUcompanies/page";
function UpdateComapany({ params:{company} }: any) {
    return (
       
        <CUCompaniesComponent _id={company} />
    );
}

export default UpdateComapany;