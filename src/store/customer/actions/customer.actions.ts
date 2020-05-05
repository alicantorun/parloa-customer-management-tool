import { Customer } from "store/customer/models/customer.model";
import { CustomerActionTypes } from "store/customer/actions/customer.actions.types";
import { CUSTOMER_CONSTANTS } from "store/customer/constants";

export function addCustomer(customer: Customer): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.ADD_CUSTOMER_SUCCESS,
    payload: customer,
  };
}

export function removeCustomer(customer: Customer): CustomerActionTypes {
  return {
    type: CUSTOMER_CONSTANTS.REMOVE_CUSTOMER_SUCCESS,
    payload: customer,
  };
}
