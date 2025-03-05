import { useCallback, useState } from "react";
import UISearch from "../tui-search/TUISearch";
import { ColumnDef, TUITableProps } from "./types";
import { filterTableData } from "./utils";
import "./TUITable.css";
import TUIPagination from "../tui-pagination/TUIPagination";
import useTablePagination from "../../hooks/useTablePagination";

const TUITable: React.FC<TUITableProps<Object>> = (props) => {
  const {
    columns,
    title,
    data,
    emptyRecords = "No Records Found",
    showPagination = false,
    pagination = {},
  } = props || {};

  const { pageSize = 10 } = pagination;

  const [searchText, setSearchText] = useState("");
  const filteredRecords = filterTableData(data, searchText);

  const { pageNo, paginatedData, setPageNo, totalPage } = useTablePagination(
    filteredRecords,
    pageSize
  );

  const onSearch = useCallback((text: string) => {
    setSearchText(text);
  }, []);
  const tableRecords = showPagination ? paginatedData : filteredRecords;
  return (
    <div className="TUITable_container">
      <section className="TUITable_header">
        <h2>{title}</h2>
        <UISearch onSearch={onSearch} />
      </section>
      <table className="TUITable_root">
        <thead>
          <tr>
            {columns.map((column: ColumnDef<Object>) => {
              return <th key={column.key}>{column.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {!tableRecords.length ? (
            <tr className="no-record">
              <td colSpan={columns.length}>{emptyRecords}</td>
            </tr>
          ) : (
            tableRecords.map((dataValue: any, index: number) => {
              return (
                <tr key={dataValue?.id || index}>
                  {columns.map(({ key, render }: any) => {
                    if (render) return <td key={key}>{render(dataValue)}</td>;
                    if (!dataValue[key]) return <td key={key}></td>;
                    return <td key={key}>{dataValue[key]}</td>;
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {showPagination && (
        <TUIPagination
          pageNo={pageNo}
          totalPage={totalPage}
          onPageChange={(pageNo) => setPageNo(pageNo)}
        />
      )}
    </div>
  );
};
export default TUITable;
