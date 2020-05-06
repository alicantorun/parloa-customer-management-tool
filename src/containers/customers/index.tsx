import React, { useEffect } from "react";
import FilteredCustomersSelector from "store/selectors/filteredCustomers";
import { filterName, filterIndustry, sortBy } from "store/filter/actions";
import { Customer } from "store/customer/models/customer.model";
import { AddCustomerForm } from "components/AddCustomerForm";
import { Filter } from "store/filter/models/filter.model";
import { CustomerList } from "components/CustomerList";
import { fetchCustomers } from "store/customer/thunk";
import { Row, Col, Card, PageHeader } from "antd";
import { RootState } from "store/app.store";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { message } from "antd";
import "./styles.less";
import {
  addCustomer,
  removeCustomer,
  editCustomer,
} from "store/customer/actions";

interface CustomersContainerProps {
  fetchCustomers: any;
  customersData: Customer[];
  customers: Customer[];
  isFetching?: boolean;
  error?: boolean;
}

const CustomersContainer: React.FunctionComponent<CustomersContainerProps> = ({
  customers,
  customersData,
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

  const handleCustomerSort = (filter: Filter): void => {
    dispatch(sortBy(filter));
    message.info("Customer state updated!");
  };

  const handleCustomerNameFilter = (filter: Filter): void => {
    dispatch(filterName(filter));
    message.info("Customer state updated!");
  };

  const handleCustomerIndustryFilter = (filter: Filter): void => {
    dispatch(filterIndustry(filter));
    message.info("Customer state updated!");
  };

  const getCustomerIndustryOptions = () => {
    if (customersData.length > 1)
      return Array.from(new Set(customersData.map((c) => c.industry)));
    else return [];
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
          title="Parloa Customer Management Tool"
          subTitle="To add a new customer, just fill the form below and click in add customer."
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
            customerIndustryOptions={getCustomerIndustryOptions()}
            onCustomerRemoval={handleRemoveCustomer}
            onCustomerEdit={handleCustomerEdit}
            onCustomerSort={handleCustomerSort}
            onCustomerNameFilter={handleCustomerNameFilter}
            onCustomerIndustryFilter={handleCustomerIndustryFilter}
          />
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state: RootState) => ({
  customers: FilteredCustomersSelector(state),
  customersData: state.customer.customers,
  isFetching: state.customer.isFetching,
  error: state.customer.error,
});

export default connect(mapStateToProps, {
  fetchCustomers,
})(CustomersContainer);
