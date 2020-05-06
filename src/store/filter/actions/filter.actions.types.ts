import { FILTER_CONSTANTS } from "store/filter/constants";
import { Filter } from "store/filter/models/filter.model";

interface FilterNameAction {
  type: typeof FILTER_CONSTANTS.FILTER_NAME;
  payload: Filter;
}

interface FilterIndustryAction {
  type: typeof FILTER_CONSTANTS.FILTER_INDUSTRY;
  payload: Filter;
}

interface SortByAction {
  type: typeof FILTER_CONSTANTS.SORT_BY;
  payload: Filter;
}

export type FilterActionTypes =
  | FilterNameAction
  | FilterIndustryAction
  | SortByAction;
