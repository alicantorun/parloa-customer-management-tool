import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface Props {
  onCustomerSort: any;
}

export const SortBy: React.FC<Props> = ({ onCustomerSort }) => {
  const onChange = (value: any) => {
    onCustomerSort({ order: value });
  };

  return (
    <Select
      style={{ width: "100%", height: "40px" }}
      placeholder="Sort By"
      optionFilterProp="children"
      onChange={onChange}
    >
      <Option value="">Sort By</Option>
      <Option value="ascending">Name: A-Z</Option>
      <Option value="descending">Name: Z-A</Option>
    </Select>
  );
};

export default SortBy;
