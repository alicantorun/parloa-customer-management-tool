import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Customer } from "store/customer/models/customer.model";
import { useDispatch, useSelector } from "react-redux";
// import { addCustomer, removeCustomer } from "store/customer/actions";
import { fetchCustomers } from "store/customer/thunk";
import { RootState } from "store/customer/reducers";
import { addCustomer, removeCustomer } from "store/customer/actions";

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

  // console.log("STATE: ", STATE);
  // console.log("STATE.customer: ", STATE.customer);
  return (
    <div>
      {customers.map((c) => {
        return (
          <h5
            onClick={() => {
              dispatch(removeCustomer(c));
            }}
            key={c._id}
          >
            {c.company}
          </h5>
        );
      })}
    </div>
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
