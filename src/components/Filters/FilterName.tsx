import React from "react";
import { Input } from "antd";
const { Search } = Input;

interface Props {
  onCustomerNameFilter: any;
}

export const FilterName: React.FC<Props> = ({ onCustomerNameFilter }) => {
  const onSearch = (value: any) => {
    onCustomerNameFilter({ name: value });
  };

  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ marginBottom: "10px" }}
    />
  );
};

export default FilterName;
