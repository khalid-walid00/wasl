import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { LoadingScreen } from '../../templates/loadingSecreen';
import { useTable } from 'react-table';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Table = ({ columns, data, header, loading, limit = 10, setLimit = (val) => {}}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(limit);

  const dispatch = useDispatch();

  // بيانات الصفحة الحالية
  const pageData = useMemo(() => {
    const startIndex = pageIndex * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, pageIndex, pageSize]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,  // استخدم rows بدلاً من data في التحضير
    prepareRow,
  } = useTable({
    columns,
    data: pageData, // استخدام البيانات الخاصة بالصفحة الحالية فقط
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
  
  const handlePageSizeChange = (e) => {
    const newLimit = Number(e.target.value);
    setPageSize(newLimit);
    setPageIndex(0); // إعادة تعيين الصفحة إلى الأولى
    dispatch(setLimit(newLimit));
  };
  
  const pagination = () => (
    <div className=" w-full flex sm:flex-row flex-col gap-y-3 justify-between">
     <div className=" flex gap-6 items-center ">
      <div className=" flex items-center gap-4">
      <button
        className="shadow-[0px_0px_25px_rgba(0,0,0,0.1)]  w-[50px] h-[50px] justify-center rounded-lg flex gap-2 items-center"
        onClick={handlePrevPage}
        disabled={loading || pageIndex === 0}
      >
      <IoIosArrowForward size={24}/> 
      
      </button>
      <button
        className="shadow-[0px_0px_25px_rgba(0,0,0,0.1)]  w-[50px] h-[50px] justify-center rounded-lg flex gap-2 items-center"
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

      <select
        className="btn_sec"
        value={pageSize}
        onChange={handlePageSizeChange}
      >
        {[10, 20, 30, 40, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
  
  return (
    <div className="flex-col flex gap-5 bg-white border-1 rounded-lg border-gray-300">
      <div className="w-full">{header}</div>
      <div className="overflow-auto min-h-screen table-scroll" dir="ltr">
        {loading ? (
          <LoadingScreen />
        ) : pageData.length > 0 ? (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, j) => (
                    <th {...column.getHeaderProps()} key={j} className="text-nowrap text-lg">
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={i}>
                    {row.cells.map((cell, j) => (
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
            <td colSpan={columns.length} className="text-center py-4">Empty</td>
          </tr>
        )}
      </div>
      <div className="p-10 flex justify-between">{!loading && pagination()}</div>
    </div>
  );
  
}; 

export default Table;  