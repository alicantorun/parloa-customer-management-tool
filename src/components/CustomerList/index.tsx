import React from "react";
import { Customer } from "store/customer/models/customer.model";
import SelectIndustry from "components/Filters/SelectIndustry";
import { Filter } from "store/filter/models/filter.model";
import { CustomerItem } from "components/CustomerItem";
import FilterName from "components/Filters/FilterName";
import SortBy from "components/Filters/SortBy";
import { Row, Col } from "antd";
import { List } from "antd";

interface CustomerListProps {
  onCustomerIndustryFilter: (handleCustomerIndustryFilter: Filter) => void;
  onCustomerNameFilter: (handleCustomerNameFilter: Filter) => void;
  onCustomerSort: (handleCustomerSort: Filter) => void;
  onCustomerRemoval: (customer: Customer) => void;
  customerIndustryOptions: (string | undefined)[];
  onCustomerEdit: (customer: Customer) => void;
  customers: Customer[];
}

export const CustomerList: React.FC<CustomerListProps> = ({
  onCustomerIndustryFilter,
  customerIndustryOptions,
  onCustomerNameFilter,
  onCustomerRemoval,
  onCustomerEdit,
  onCustomerSort,
  customers,
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
