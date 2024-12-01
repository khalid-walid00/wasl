import React from 'react';
import { useTable, usePagination } from 'react-table';
import { useDispatch } from 'react-redux';
import './style.css';
import { LoadingScreen } from '../../templates/loadingSecreen';
import EmptyTable from '../../templates/emptyTable';

const Table = ({ columns, data, header, loading, pageCount = 1, limit = 10, setLimit = (val) => { }, prevPage = () => { }, nextPage = () => { } }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canNextPage,
    gotoPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const dispatch = useDispatch();

  const pagination = () => {
    return (
      <>
        <div className="pagination">
          <div className="main_pagination">
            <button className='shadow-lg' onClick={() => dispatch(prevPage())} disabled={loading || pageCount === 1}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <button className='shadow-lg' onClick={() => dispatch(nextPage())} disabled={!canNextPage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div>
              <span>صفحة {pageCount}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <select
            className="btn_sec"
            value={limit}
            onChange={(e) => {
              console.log(Number(e.target.value));
              dispatch(setLimit(Number(e.target.value)));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };

  return (
<div className='flex-col flex gap-5 bg-white border-1  rounded-lg border-gray-300 ' >
<div className="w-full">{header}</div>
<div className="overflow-auto min-h-screen table-scroll"dir="ltr">
      {loading ? (
        <LoadingScreen />
      ) : page.length > 0 ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column, j) => {
                  const { key, ...headerProps } = column.getHeaderProps();
                  return (
                    <th className='text-nowrap text-lg' key={j} {...headerProps}>
                      {column.render('Header')}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr className='text-nowrap' {...row.getRowProps()} key={i}>
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
        <EmptyTable />
      )}
      </div>
    { loading && <div className="w-full">{pagination}</div>}

    </div>
  );
};

export default Table;
