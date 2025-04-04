export interface TUITableProps<T extends object> {
  title: string;
  columns: Array<ColumnDef<Object>>;
  data: Array<T>;
  emptyRecords?: string | React.ReactElement;
  showPagination?: boolean;
  pagination?: PaginationProps | undefined;
  actions?: Array<T>;
}
export interface PaginationProps {
  pageSize?: number;
}
export interface ColumnDef<T extends object> {
  label: string;
  key: string;
  render?: (rowData?: T) => React.ReactElement;
}
