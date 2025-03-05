export const filterTableData = (data: Array<Object>, searchText: string) => {
  if (!searchText) return data;
  return data.filter((dataValue: any) => {
    const dataKeys = Object.keys(dataValue);
    const isExist = dataKeys.some((key) =>
      `${dataValue[key]}`.toLowerCase().includes(searchText.toLowerCase())
    );

    return isExist;
  });
};
