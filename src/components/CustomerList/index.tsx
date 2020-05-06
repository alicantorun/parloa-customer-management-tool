import React from "react";
import { List } from "antd";
import { Row, Col } from "antd";
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
      <Row gutter={20}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FilterName onCustomerNameFilter={onCustomerNameFilter} />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SelectIndustry
            onCustomerIndustryFilter={onCustomerIndustryFilter}
            options={customerIndustryOptions}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SortBy onCustomerSort={onCustomerSort} />
        </Col>
      </Row>
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
