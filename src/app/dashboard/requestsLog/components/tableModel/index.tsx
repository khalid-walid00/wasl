import React from 'react';
import CustomLabel from '~/common/components/atoms/label';
import CustomModal from '~/common/components/molecules/modal';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRowId } from '../../requestsLog.slice';

function TableModel() {
    const dispatch = useDispatch();
    const { modalRow, requestId, items: { Data } } = useSelector((state: any) => state.requestsLogSlice);

    return (
        <CustomModal size='2xl' isOpen={modalRow} onOpenChange={() => dispatch(setSelectedRowId(null))} title="Company Details">
            <div>
                {
                    Data?.filter((item: any) => item.Id === requestId)?.map((item: any, index: number) => (
                        <div key={index} className=" flex overflow-y-auto h-96 md:h-auto flex-col gap-4">

                            <div className="grid grid-cols-2 gap-3">

                                <div className="flex flex-col gap-1 items-end">
                                    <CustomLabel bold>Error</CustomLabel>
                                    {item.Error || 'N/A'}
                                </div>

                                <div className="flex flex-col gap-1 items-end">
                                    <CustomLabel bold>Endpoint</CustomLabel>
                                    <div className=" text-end"> {item.Endpoint}</div>
                                </div>

                                <div className="flex flex-col gap-1 items-end">
                                    <CustomLabel bold>Method</CustomLabel>
                                    <p
                                        className={`${item.Method === "POST"
                                                ? "text-yellow-500 font-bold text-xl"
                                                : item.Method === "GET"
                                                    ? "text-green-600 font-bold text-xl"
                                                    : item.Method === "PUT"
                                                        ? "text-blue-600 font-bold text-xl"
                                                        : item.Method === "DELETE"
                                                            ? "text-red-600 font-bold text-xl"
                                                            : "text-gray-600 font-bold text-xl"
                                            }`}
                                    >
                                        {item.Method}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1 items-end">
                                    <CustomLabel bold>Status Code</CustomLabel>
                                    <div className="flex items-center justify-center">
                                        <p
                                            className={`py-1 w-max rounded-lg px-4 ${item.StatusCode === 500
                                                    ? "bg-red-600 text-white"
                                                    : item.StatusCode === 400
                                                        ? "bg-yellow-400 text-black"
                                                        : item.StatusCode === 200
                                                            ? "bg-green-600 text-white"
                                                            : "bg-gray-600 text-white"
                                                }`}
                                        >
                                            {item.StatusCode}
                                        </p>
                                    </div>
                                </div>


                                <div className="flex flex-col gap-1 items-end">
                                    <CustomLabel bold>Request Time</CustomLabel>
                                    {item.RequestTime.slice(0, 10)}
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <CustomLabel bold>Response Time</CustomLabel>
                                    {item.ResponseTime.slice(0, 10)}
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <CustomLabel bold>ID</CustomLabel>
                                    {item.Id}
                                </div>

                            </div>
                            <div className=" grid grid-cols-1 md:grid-cols-2">
                                <div className="flex  flex-col gap-1 items-end">
                                    <CustomLabel bold>Request Body</CustomLabel>
                                    <pre className='h-28 overflow-y-auto w-full' dir='ltr'>{JSON.stringify(item.RequestBody, null, 2) || 'N/A'}</pre>
                                </div>
                                <div className="flex  flex-col gap-1 items-end">
                                    <CustomLabel bold>Request Body</CustomLabel>
                                    <pre className='h-28 overflow-y-auto w-full' dir='ltr'>{JSON.stringify(item.RequestBody, null, 2) || 'N/A'}</pre>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </CustomModal>
    );
}

export default TableModel;
