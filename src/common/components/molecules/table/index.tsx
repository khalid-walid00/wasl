"use client";
import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { LoadingScreen } from '../../templates/loadingSecreen';
import { useTable } from 'react-table';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CustomSelector from '../../atoms/customSelector/CustomSelector';

interface TableProps {
  columns: any;
  data: any[];
  header: React.ReactNode;
  loading: boolean;
  limit?: number;
  setLimit?: (val: number) => void;
  handleRowClick?: (id: string) => void; 
}
const Table = ({ columns, data, header, loading, limit = 10,handleRowClick}: TableProps) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(limit);

  const pageData = useMemo(() => {
    const startIndex = pageIndex * pageSize;
    return data?.slice(startIndex, startIndex + pageSize);
  }, [data, pageIndex, pageSize]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,  
    prepareRow,
  } = useTable({
    columns,
    data: pageData, 
  });
  
  const pageCount = Math.ceil(data.length / pageSize);
  
  const handleNextPage = () => {
    if (pageIndex < pageCount - 1) {
      setPageIndex((prev) => prev + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };
  
  const handlePageSizeChange = (e:any) => {
    const newLimit = Number(e) || 10;
    setPageSize(newLimit);
    setPageIndex(0); 
  };
  const optionsLimit = [{
    label: '10',
    value: '10',
  }, {
    label: '20',
    value: '20',
  },
  {
    label: '30',
    value: '30',
  },
  {
    label: '40',
    value: '40',
  },
  {
    label: '50',
    value: '50',
  },
  {
    label: '100',
    value: '100',
  }
];
  const pagination = () => (
    <div className=" w-full flex sm:flex-row sm:items-center flex-col gap-y-3 justify-between">
     <div className=" flex gap-6 items-center ">
      <div className=" flex items-center gap-4">
      <button
        className="shadow-[0px_0px_25px_rgba(0,0,0,0.1)]  cursor-pointer w-[50px] h-[50px] justify-center rounded-lg flex gap-2 items-center"
        onClick={handlePrevPage}
        disabled={loading || pageIndex === 0}
      >
      <IoIosArrowForward size={24}/> 
      
      </button>
      <button
        className="shadow-[0px_0px_25px_rgba(0,0,0,0.1)] cursor-pointer w-[50px] h-[50px] justify-center rounded-lg flex gap-2 items-center"
        onClick={handleNextPage}
        disabled={loading || pageIndex >= pageCount - 1}
      >
      
        <IoIosArrowBack  size={24}/>
      </button>
      </div>
      <span>
        صفحة {pageIndex + 1} من {pageCount}
      </span>
      </div>
      <div className="">

      <CustomSelector
      options={optionsLimit}
    value={pageSize.toString() || '10'}
  onChange={(key: any) => handlePageSizeChange(Number(key))}
>
</CustomSelector>
      </div>
    </div>
  );
  
  return (
    <div className="flex-col flex gap-5 bg-white border-1 rounded-lg border-gray-300">
      <div className="w-full">{header}</div>
      <div className={`overflow-auto min-h-screen table-scroll ${data.length > 0 ? "" : "flex items-center justify-center" } `} dir="ltr">
        {loading ? (
          <LoadingScreen />
        ) : pageData.length > 0 ? (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: any, i: number) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column: any, j: number) => (
                    <th {...column.getHeaderProps()} key={j} className="text-nowrap text-lg">
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row:any, i: number) => {
                prepareRow(row);
                return (
                  <tr 
                    onClick={() => handleRowClick ? handleRowClick(row.original.Id) : undefined}
                    className='cursor-pointer' 
                    {...row.getRowProps()} 
                    key={i}
                  >
                    {row.cells.map((cell:any, j:number) => (
                      <td key={j} {...cell.getCellProps()} style={cell.column.width ? { width: cell.column.width } : {}}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <tr>
            <td colSpan={columns.length} className="text-center py-4 flex items-center justify-center">Empty</td>
          </tr>
        )}
      </div>
      <div className="px-10 py-2 flex justify-between  border-t">{!loading && pagination()}</div>
    </div>
  );
  
}; 

export default Table;  