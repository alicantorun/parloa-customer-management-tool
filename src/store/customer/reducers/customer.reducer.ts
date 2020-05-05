import { CUSTOMER_CONSTANTS } from "store/customer/constants";
import { Customer } from "store/customer/models/customer.model";
import { CustomerActionTypes } from "store/customer/actions/customer.actions.types";
import { v1 as uuidV1 } from "uuid";

interface CustomerReducerInterface {
  customers: Customer[];
}

const initialState: CustomerReducerInterface = {
  customers: [],
};

export const customerReducer = (
  state = initialState,
  action: CustomerActionTypes
) => {
  switch (action.type) {
    case CUSTOMER_CONSTANTS.ADD_CUSTOMER_SUCCESS:
      return Object.assign({}, state, {
        customers: state.customers.concat({
          ...action.payload,
          ...{
            id: uuidV1(),
          },
        }),
      });

    case CUSTOMER_CONSTANTS.REMOVE_CUSTOMER_SUCCESS:
      return {
        customers: state.customers.filter(
          (customer: Customer) => customer.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
