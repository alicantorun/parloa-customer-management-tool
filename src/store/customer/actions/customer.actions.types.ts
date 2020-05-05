import { CUSTOMER_CONSTANTS } from "store/customer/constants";
import { Customer } from "store/customer/models/customer.model";

interface AddCustomerAction {
  type: typeof CUSTOMER_CONSTANTS.ADD_CUSTOMER_SUCCESS;
  payload: Customer;
}

interface RemoveCustomerAction {
  type: typeof CUSTOMER_CONSTANTS.REMOVE_CUSTOMER_SUCCESS;
  payload: Customer;
}

export type CustomerActionTypes = AddCustomerAction | RemoveCustomerAction;
