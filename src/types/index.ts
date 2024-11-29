import { Selection, SelectionMode } from "@nextui-org/react";
import { Key } from "react";


export interface User {
  fullname: string;
}


export interface User {
  email: string;
  fullname: string;
  phone: string;
  role: string;
  status: string | null;
  verfied: boolean;
  blocked: boolean;
  _id: string;
}


export interface PaginationType {
  totalCount: number,
  totalPages: number,
}
export interface dataTypes {
  data: dataTypes[],
  pagination: PaginationType;
}


export type RenderCell = (item: any, columnKey: Key) => React.ReactNode;

export type TTableProps = {
  columns: any[];
  data: any[];
  renderCell: (item: any, columnKey: React.Key) => React.ReactNode;
  limit: number;
  page: number;
  nextPage: () => any;
  prevPage: () => any;
  setLimit?: any;
  pagination?: any;
  setPage?: any;
  loading?: boolean;
  handleSearch?: any;
  searchValue?: string;
  handleAction?: any;
  actionText?: string;
  searchComponent?: any;
  title?: any;
  selectedKeys?: Selection;
  setSelectedKeys?: any;
  ButtonDeleteMany?: any;
  statusTranslations?: { [key: string]: string };
  searchSlice: { search: any; setSearch: any };
  statuses?: string[];
  searchField?: string;
  ActionsManyOprations?: any;
  selectionMode?: SelectionMode;
  searchPlaceholder?:string
};
