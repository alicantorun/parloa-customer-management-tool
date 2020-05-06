import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface Props {
  options: (string | undefined)[];
  onCustomerIndustryFilter: any;
}

export const SelectIndustry: React.FC<Props> = ({
  options,
  onCustomerIndustryFilter,
}) => {
  const onChange = (value: any) => {
    onCustomerIndustryFilter({ industry: value });
  };

  const getOptions = () => {
    let displayOptions;
    if (options.length > 1) {
      displayOptions = options.map((o, i) => (
        <Option key={i} value={typeof o === "string" ? o : ""}>
          {o}
        </Option>
      ));
      displayOptions.unshift(
        <Option key="defaultKey" value={""}>
          Filter By Industry
        </Option>
      );
    }
    return displayOptions;
  };

  return (
    <Select
      showSearch
      style={{ width: "100%", height: "40px" }}
      placeholder="Filter By Industry"
      optionFilterProp="children"
      onChange={onChange}
    >
      {getOptions()}
    </Select>
  );
};

export default SelectIndustry;
