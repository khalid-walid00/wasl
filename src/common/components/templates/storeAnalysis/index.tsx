import Image from "next/image";
import StoreAnalysisOrganisms from "../../organisms/storeAnalysis";

function StoreAnalysisTemplates() {
    return (
        <div className="head-store py-[29px] px-10 flex flex-col gap-7">
        <div className=" flex gap-6">
            <Image width={128} height={78} src="/assets/icons2/store.png" alt="icon" />
            <div className=" flex flex-col justify-center">
                <h1 className='text-[20px] font-bold'>عالم التطبيقات بين يديك</h1>
                <p className='text-subColor text-sm'>اكتشف تطبيقات مصممة خصيصًا لتحسين تجربتك اليومية</p>
            </div>
        </div>
        {/* <StoreAnalysisOrganisms/> */}
    </div>
    );
}

export default StoreAnalysisTemplates;