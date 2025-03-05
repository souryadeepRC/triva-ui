interface PageLevelProps {
  prev?: string;
  next?: string;
}
export interface TUIPaginationProps {
  pageNo: number;
  totalPage: number;
  hasPrevNextLevel?: boolean;
  pageLevel?: PageLevelProps;
  onPageChange: (pageNo: number) => void;
}
