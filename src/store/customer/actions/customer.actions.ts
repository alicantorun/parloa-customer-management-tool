import { Customer, Customers } from "store/customer/models/customer.model";
import { CustomerActionTypes } from "store/customer/actions/customer.actions.types";
import { CUSTOMER_CONSTANTS } from "store/customer/constants";

export function addCustomer(customer: Customer): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.ADD_CUSTOMER,
    payload: customer,
  };
}

export function removeCustomer(customer: Customer): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.REMOVE_CUSTOMER,
    payload: customer,
  };
}

export function editCustomer(customer: Customer): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.EDIT_CUSTOMER,
    payload: customer,
  };
}

export function fetchCustomersRequest(): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_REQUEST,
    payload: {
      isFetching: true,
      error: false,
    },
  };
}

export function fetchCustomersSuccess(
  customers: Customers
): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_SUCCESS,
    payload: {
      isFetching: false,
      customers: customers,
    },
  };
}

export function fetchCustomersFailure(): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_FAILURE,
    payload: {
      isFetching: false,
      error: true,
    },
  };
}
