import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { LoadingScreen } from '../../templates/loadingSecreen';
import { useTable, usePagination } from 'react-table';

const Table = ({ columns, data, header, loading, limit = 10, setLimit = (val) => {}, prevPage = () => {}, nextPage = () => {} }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(limit);

  const pageData = useMemo(() => {
    const startIndex = pageIndex * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, pageIndex, pageSize]);

  const dispatch = useDispatch();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    canNextPage,
    canPreviousPage,
    gotoPage,
    state: { pageIndex: tablePageIndex, pageSize: tablePageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: limit },
    },
    usePagination
  );

  const pageCount = Math.ceil(data.length / tablePageSize);

  const handleNextPage = () => {
    if (canNextPage) {
      gotoPage(pageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (canPreviousPage) {
      gotoPage(pageIndex - 1);
    }
  };

  const handlePageSizeChange = (e) => {
    const newLimit = Number(e.target.value);
    setPageSize(newLimit);
    setPageIndex(0); // Reset to first page
    dispatch(setLimit(newLimit));
  };

  const pagination = () => {
    return (
      <>
        <div className="pagination">
          <div className="main_pagination">
            <button
              className="shadow-lg"
              onClick={handlePrevPage}
              disabled={loading || !canPreviousPage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <button
              className="shadow-lg"
              onClick={handleNextPage}
              disabled={loading || !canNextPage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div>
              <span>صفحة {pageIndex + 1} من {pageCount}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <select className="btn_sec" value={pageSize} onChange={handlePageSizeChange}>
            {[10, 20, 30, 40, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };

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
                    {row.cells.map((cell, j) => {
                      const { key, ...cellProps } = cell.getCellProps();
                      return (
                        <td key={j} {...cellProps} style={cell.column.width ? { width: cell.column.width } : {}}>
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
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
      <div className="p-10 flex justify-between">
        {!loading && pagination()}
      </div>
    </div>
  );
};

export default Table;
