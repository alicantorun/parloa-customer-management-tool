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
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
};

export default FilterName;
