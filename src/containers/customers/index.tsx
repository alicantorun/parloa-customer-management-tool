import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, PageHeader } from "antd";

import { Customer } from "store/customer/models/customer.model";
import { useDispatch, useSelector } from "react-redux";
// import { addCustomer, removeCustomer } from "store/customer/actions";
import { fetchCustomers } from "store/customer/thunk";
import { RootState } from "store/customer/reducers";
import {
  addCustomer,
  removeCustomer,
  editCustomer,
} from "store/customer/actions";

import { AddCustomerForm } from "components/AddCustomerForm";
import { CustomerList } from "components/CustomerList";
import { message } from "antd";

import "./styles.less";

interface CustomersContainerProps {
  fetchCustomers: any;
  customers: Customer[];
  isFetching?: boolean;
  error?: boolean;
}

const CustomersContainer: React.FunctionComponent<CustomersContainerProps> = ({
  customers,
  isFetching,
  error,
  fetchCustomers,
}) => {
  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);
  const dispatch = useDispatch();

  const handleFormSubmit = (customer: Customer): void => {
    dispatch(addCustomer(customer));
    message.success("Customer added!");
  };

  const handleRemoveCustomer = (customer: Customer): void => {
    dispatch(removeCustomer(customer));
    message.warn("Customer removed!");
  };

  const handleCustomerEdit = (customer: Customer): void => {
    dispatch(editCustomer(customer));
    message.info("Customer state updated!");
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="customers-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add Customer"
          subTitle="To add a customer, just fill the form below and click in add customer."
        />
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new customer">
          <AddCustomerForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Customer List">
          <CustomerList
            customers={customers}
            onCustomerRemoval={handleRemoveCustomer}
            onCustomerEdit={handleCustomerEdit}
          />
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state: RootState) => ({
  isFetching: state.customer.isFetching,
  customers: state.customer.customers,
  error: state.customer.error,
  STATE: state,
});

export default connect(mapStateToProps, {
  fetchCustomers,
})(CustomersContainer);
