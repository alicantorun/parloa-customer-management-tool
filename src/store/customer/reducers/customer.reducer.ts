import { CUSTOMER_CONSTANTS } from "store/customer/constants";
import { Customer } from "store/customer/models/customer.model";
import { CustomerActionTypes } from "store/customer/actions/customer.actions.types";
import { v1 as uuidV1 } from "uuid";

interface CustomerReducerInterface {
  customers: [];
  isFetching: boolean;
  error: boolean;
}

const initialState: CustomerReducerInterface = {
  customers: [],
  isFetching: false,
  error: false,
};

export const customerReducer = (
  state = initialState,
  action: CustomerActionTypes
) => {
  switch (action.type) {
    case CUSTOMER_CONSTANTS.ADD_CUSTOMER:
      return Object.assign({}, state, {
        customers: [
          {
            ...action.payload,
            ...{
              _id: uuidV1(),
            },
          },
          ...state.customers,
        ],
      });

    case CUSTOMER_CONSTANTS.REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer: Customer) => {
          return customer._id !== action.payload._id;
        }),
      };

    case CUSTOMER_CONSTANTS.EDIT_CUSTOMER:
      return {
        ...state,
        customers: state.customers.map((customer: Customer) =>
          customer._id === action.payload._id
            ? Object.assign({}, customer, action.payload)
            : customer
        ),
      };

    case CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };

    case CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        customers: action.payload.customers,
      };

    case CUSTOMER_CONSTANTS.FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
