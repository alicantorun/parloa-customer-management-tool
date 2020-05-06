import { Filter } from "store/filter/models/filter.model";
import { FilterActionTypes } from "store/filter/actions/filter.actions.types";
import { FILTER_CONSTANTS } from "store/filter/constants";

export function filterName(name: Filter): FilterActionTypes {
  return {
    type: FILTER_CONSTANTS.FILTER_NAME,
    payload: name,
  };
}

export function filterIndustry(industry: Filter): FilterActionTypes {
  return {
    type: FILTER_CONSTANTS.FILTER_INDUSTRY,
    payload: industry,
  };
}

export function sortBy(order: Filter): FilterActionTypes {
  return {
    type: FILTER_CONSTANTS.SORT_BY,
    payload: order,
  };
}
