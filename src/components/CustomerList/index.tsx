import React from "react";

import { List } from "antd";

import { Customer } from "store/customer/models/customer.model";
import { Filter } from "store/filter/models/filter.model";
import { CustomerItem } from "components/CustomerItem";
import SelectIndustry from "components/Filters/SelectIndustry";
import FilterName from "components/Filters/FilterName";
import SortBy from "components/Filters/SortBy";
interface CustomerListProps {
  customers: Customer[];
  customerIndustryOptions: (string | undefined)[];
  onCustomerRemoval: (customer: Customer) => void;
  onCustomerEdit: (customer: Customer) => void;
  onCustomerSort: (handleCustomerSort: Filter) => void;
  onCustomerNameFilter: (handleCustomerNameFilter: Filter) => void;
  onCustomerIndustryFilter: (handleCustomerIndustryFilter: Filter) => void;
}

export const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  customerIndustryOptions,
  onCustomerRemoval,
  onCustomerEdit,
  onCustomerSort,
  onCustomerNameFilter,
  onCustomerIndustryFilter,
}) => {
  return (
    <>
      <h1
        onClick={() => {
          onCustomerSort({ order: "descending" });
        }}
      >
        test
      </h1>
      <SelectIndustry
        onCustomerIndustryFilter={onCustomerIndustryFilter}
        options={customerIndustryOptions}
      />
      <FilterName onCustomerNameFilter={onCustomerNameFilter} />
      <SortBy onCustomerSort={onCustomerSort} />
      <List
        locale={{
          emptyText: "No customer is found...",
        }}
        dataSource={customers}
        renderItem={(customer) => (
          <CustomerItem
            customer={customer}
            onCustomerEdit={onCustomerEdit}
            onCustomerRemoval={onCustomerRemoval}
          />
        )}
        pagination={{
          position: "bottom",
          pageSize: 10,
        }}
      />
    </>
  );
};
