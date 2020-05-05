import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  fetchCustomersRequest,
  fetchCustomersSuccess,
  fetchCustomersFailure,
} from "../actions";
import { RootState } from "../reducers";

export const fetchCustomers = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(fetchCustomersRequest());
    const responseRaw = await fetch(
      "https://s3-eu-west-1.amazonaws.com/fov-coding-test-cors/customers.json"
    );
    const response = await responseRaw.json();
    dispatch(fetchCustomersSuccess(response));
  } catch (error) {
    dispatch(fetchCustomersFailure());
  }
};
