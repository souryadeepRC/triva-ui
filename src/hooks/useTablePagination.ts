import { useEffect, useMemo, useState } from "react";

interface useTablePaginationType {
  pageNo: number;
  paginatedData: any;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}
const useTablePagination = (
  data: Array<object>,
  pageSize: number
): useTablePaginationType => {
  const [pageNo, setPageNo] = useState<number>(1);

  const totalPage: number = useMemo(() => {
    if (!data.length) return 0;
    return Math.ceil(data.length / pageSize);
  }, [data]);

  const paginatedData = useMemo(() => {
    if (!data.length) return [];
    const latestIndex: number = Math.max((pageNo - 1) * pageSize, 0);
    return data.slice(latestIndex, latestIndex + pageSize);
  }, [data, pageNo]);

  useEffect(() => {
    if (pageNo > totalPage) {
      setPageNo(totalPage);
    }
    if (pageNo === 0 && !!paginatedData.length) {
      setPageNo(1);
    }
  }, [totalPage, pageNo]);

  return { pageNo, paginatedData, setPageNo, totalPage };
};
export default useTablePagination;
