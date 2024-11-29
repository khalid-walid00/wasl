import React from 'react'
import { Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { IoEyeOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

type Props = {}

const UploadImageAndModle = (props: Props) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const tableData = [
        {
            id: 1,
            name: 'keagan-henman-xPJYL0l5Ii8-unsplash',
            type: 'PNG',
            date: '21/5/2024',
            size: '15 ميجا بايت',
        },
        {
            id: 2,
            name: 'sample-image-2',
            type: 'JPG',
            date: '22/6/2024',
            size: '12 ميجا بايت',
        },
    ];

    return <>
        <div className="mt-[14px]">
            <div className=' md:w-6/12 ' >

                <div className=' flex items-center justify-center  h-[250px] border border-[#D7D7D7] rounded-[8px] ' >

                    <div className=' flex items-center justify-center flex-col gap-y-2 ' onClick={onOpen}  >
                        <Image className='object-cover z-20 !rounded-none ' src='/assets/icons/svg/add-image.svg' width={60} height={54} alt="upload-image-icon" />
                        <h3 className=' text-[16px] font-bold ' >اسحب او قم بتحديد صورة من الجهاز</h3>
                        <span className=' text-[14px] font-normal text-[#ABABAB] ' >“حد اقصى للصور”</span>
                    </div>

                </div>
            </div>

        </div>
        <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 bg-[#E5F2F2] "> تحديد الصورة </ModalHeader>
                        <ModalBody>
                            <div>
                                <div>
                                    <div className='flex flex-wrap items-center  ' >

                                        <div className="relative w-full md:w-6/12 lg:w-6/12 border border-[#D0D0D0] rounded-[8px] my-2">
                                            <div>
                                                <input
                                                    type="text"
                                                    // value={title}
                                                    // onChange={handleSearch}
                                                    className=" w-full pr-10 placeholder:text-[#C0BFC5] h-[40px] rounded-[8px] text-[#C0BFC5] text-[12px] outline-none"
                                                    placeholder=" ابحث عن الملف..."
                                                />
                                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                                    <CiSearch color="#008ffb" size={24} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative w-full md:w-6/12 lg:w-6/12 ">
                                            <div className=' flex justify-end gap-x-3 ' >

                                                <button className=' flex items-center bg-[#F2F9F9] !border-[2px] !border-[#008ffb]  px-[10px] py-[8px] rounded-[4px] gap-x-2 ' >

                                                    <Image className='object-cover !rounded-none ' src='/assets/icons/svg/arrows-up-down_outline.svg' alt="upload-image-icon" />
                                                    <span className='text-[14px] font-bold text-[#008ffb] ' > الترتيب حسب  </span>


                                                </button>
                                                <button className=' flex items-center bg-[#F2F9F9] !border-[2px] !border-[#008ffb] rounded-[4px] gap-x-2 ' >
                                                    <Image className='object-cover !rounded-none ' src='/assets/icons/svg/list-bullet_outline.svg' alt="upload-image-icon" />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className=' py-[32px] !border-dashed border-[#008ffb]' >
                                        <div className=' flex items-center justify-center  h-[136px] bg-[#F2F9F9] !border-dashed border-[#008ffb] rounded-[8px] ' >

                                            <div className=' flex items-center justify-center flex-col gap-y-2 ' onClick={onOpen}  >
                                                <div className='flex items-center gap-x-[10px] ' >
                                                    <Image className='object-cover z-20 !rounded-none ' src='/assets/icons/svg/add-image.svg' width={32} alt="upload-image-icon" />
                                                    <h3 className=' text-[20px] font-bold text-[#008ffb] ' > رفع صورة </h3>

                                                </div>
                                                <h3 className=' text-[14px] font-normal ' > انقر للتحميل او اسحب الملف </h3>
                                                <span className=' text-[14px] font-normal ' > الحد الاقصي لحجم الملف : 15 ميجا بايت </span>
                                            </div>

                                        </div>
                                    </div>

                                    <div>


                                        <div className="relative ">

                                            <table className="w-full border border-[#ABD7D8] !rounded-[8px] ">

                                                <tbody>
                                                    {tableData.map((item) => (
                                                        <tr key={item.id} className="border-b border-[#ABD7D8]">
                                                            <td className="w-4 p-4">
                                                                <div className="flex items-center">
                                                                    <input
                                                                        id={`checkbox-table-search-${item.id}`}
                                                                        type="checkbox"
                                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                    />
                                                                    <label htmlFor={`checkbox-table-search-${item.id}`} className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <th scope="row" className="px-6 py-4 text-[14px] font-bold">
                                                                {item.name}
                                                            </th>
                                                            <td className="px-6 py-4 text-[14px] font-bold">{item.type}</td>
                                                            <td className="px-6 py-4 text-[14px] font-bold">{item.date}</td>
                                                            <td className="px-6 py-4 text-[14px] font-bold">{item.size}</td>
                                                            <td className="px-6 py-4 text-[14px] font-bold flex items-center gap-x-4">
                                                                <Link href="#">
                                                                    <IoEyeOutline size={16} className="text-[#008ffb]" />
                                                                </Link>
                                                                <Link href="#">
                                                                    <FaTrashAlt size={16} className="text-[#F00001]" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                
                                            </table>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </ModalBody>
                        <ModalFooter className=' justify-start ' >
                            <Button className=' h-[40px] rounded-[6px] bg-[#008ffb] ' color="primary" onPress={onClose}>
                                <span className=' text-[16px] font-bold ' > حفظ </span>
                            </Button>
                            <Button className='h-[40px] rounded-[6px] bg-transparent border border-[#008ffb]' color="danger" variant="light" onPress={onClose}>
                                <span className=' text-[16px] font-bold ' > الغاء </span>
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>
}

export default UploadImageAndModle




