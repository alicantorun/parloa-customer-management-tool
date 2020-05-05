import { CUSTOMER_CONSTANTS } from "store/customer/constants";
import { Customer, Customers } from "store/customer/models/customer.model";

interface AddCustomerAction {
  type: typeof CUSTOMER_CONSTANTS.ADD_CUSTOMER;
  payload: Customer;
}

interface RemoveCustomerAction {
  type: typeof CUSTOMER_CONSTANTS.REMOVE_CUSTOMER;
  payload: Customer | any;
}

interface EditCustomerAction {
  type: typeof CUSTOMER_CONSTANTS.EDIT_CUSTOMER;
  payload: Customer | any;
}

interface FetchCustomersRequestAction {
  type: typeof CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_REQUEST;
  payload: {
    isFetching: boolean;
    error: boolean;
  };
}

interface FetchCustomersSuccessAction {
  type: typeof CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_SUCCESS;
  payload: {
    isFetching: boolean;
    customers: Customers;
  };
}

interface FetchCustomersFailureAction {
  type: typeof CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_FAILURE;
  payload: {
    isFetching: boolean;
    error: boolean;
  };
}

export type CustomerActionTypes =
  | AddCustomerAction
  | RemoveCustomerAction
  | FetchCustomersRequestAction
  | FetchCustomersSuccessAction
  | FetchCustomersFailureAction
  | EditCustomerAction;
