import React from "react";

import { List } from "antd";

import { Customer } from "store/customer/models/customer.model";
import { CustomerItem } from "components/CustomerItem";

interface CustomerListProps {
  customers: Customer[];
  onCustomerRemoval: (customer: Customer) => void;
  onCustomerEdit: (customer: Customer) => void;
}

export const CustomerList: React.StatelessComponent<CustomerListProps> = ({
  customers,
  onCustomerRemoval,
  onCustomerEdit,
}) => (
  <List
    locale={{
      emptyText: "There's nothing to do :(",
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
);
