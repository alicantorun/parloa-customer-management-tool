import React, { useEffect } from "react";
import FilteredCustomersSelector from "store/selectors/filteredCustomers";
import { filterName, filterIndustry, sortBy } from "store/filter/actions";
import { Customer } from "store/customer/models/customer.model";
import { AddCustomerForm } from "components/AddCustomerForm";
import { Filter } from "store/filter/models/filter.model";
import { CustomerList } from "components/CustomerList";
import { fetchCustomers } from "store/customer/thunk";
import useWindowSize from "store/hooks/useWindowSize";
import { Row, Col, Card } from "antd";
import { RootState } from "store/app.store";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { message } from "antd";
import {
  addCustomer,
  removeCustomer,
  editCustomer,
} from "store/customer/actions";
import "./styles.less";
import Logo from "assets/logo.png";

interface CustomersContainerProps {
  customersData: Customer[];
  customers: Customer[];
  isFetching?: boolean;
  fetchCustomers: any;
  error?: boolean;
}

const CustomersContainer: React.FunctionComponent<CustomersContainerProps> = ({
  fetchCustomers,
  customersData,
  isFetching,
  customers,
  error,
}) => {
  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);
  const dispatch = useDispatch();
  const size = useWindowSize();

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
  };

  const handleCustomerNameFilter = (filter: Filter): void => {
    dispatch(filterName(filter));
  };

  const handleCustomerIndustryFilter = (filter: Filter): void => {
    dispatch(filterIndustry(filter));
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
      <Col xs={{ span: 23 }} md={{ span: 21 }} xl={{ span: 18 }}>
        {size && size.width > 650 && (
          <img
            alt="logo"
            src={Logo}
            style={{ height: "40px", marginTop: "20px", position: "absolute" }}
          />
        )}
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Customer Management Tool
        </h1>
      </Col>
      <Col xs={{ span: 23 }} md={{ span: 21 }} xl={{ span: 18 }}>
        <Card title="Create a new customer">
          <AddCustomerForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>
      <Col xs={{ span: 23 }} md={{ span: 21 }} xl={{ span: 18 }}>
        <Card title="Customer List">
          <CustomerList
            onCustomerIndustryFilter={handleCustomerIndustryFilter}
            customerIndustryOptions={getCustomerIndustryOptions()}
            onCustomerNameFilter={handleCustomerNameFilter}
            onCustomerRemoval={handleRemoveCustomer}
            onCustomerEdit={handleCustomerEdit}
            onCustomerSort={handleCustomerSort}
            customers={customers}
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
