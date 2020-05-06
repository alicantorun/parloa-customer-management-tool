import { FILTER_CONSTANTS } from "store/filter/constants";
import { Filter } from "store/filter/models/filter.model";
import { FilterActionTypes } from "store/filter/actions/filter.actions.types";

const initialState: Filter = {
  name: "",
  industry: "",
  order: "",
};

export const filterReducer = (
  state = initialState,
  action: FilterActionTypes
) => {
  switch (action.type) {
    case FILTER_CONSTANTS.FILTER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };

    case FILTER_CONSTANTS.FILTER_INDUSTRY:
      return {
        ...state,
        industry: action.payload.industry,
      };

    case FILTER_CONSTANTS.SORT_BY:
      return {
        ...state,
        order: action.payload.order,
      };

    default:
      return state;
  }
};
