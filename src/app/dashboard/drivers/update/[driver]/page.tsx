import CUDriversComponent from  "../../components/CUDriver/index"
function UpdateComapany({ params:{driver} }: any) {
    return (
        <CUDriversComponent _id={driver} />
    );
}

export default UpdateComapany;