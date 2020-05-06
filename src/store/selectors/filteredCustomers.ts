import { createSelector } from "reselect";
import _ from "lodash";

const customersSelector = (state: any) => {
  return state.customer.customers;
};

const filteredCustomersSelector = (state: any) => {
  return state.filter;
};

const getCustomers = (customers: any, filter: any) => {
  const selectedCustomers = customers
    .filter((customer: any) =>
      customer.company
        .toLowerCase()
        .includes(filter.name && filter.name.toLowerCase())
    )
    .filter((customer: any) =>
      customer.industry
        .toLowerCase()
        .includes(filter.industry && filter.industry.toLowerCase())
    )
    .sort((customer1: any, customer2: any) => {
      if (filter.order === "ascending") {
        return customer1.company.localeCompare(customer2.company);
      } else if (filter.order === "descending") {
        return customer2.company.localeCompare(customer1.company);
      } else {
        return null;
      }
    });

  return selectedCustomers;
};

export default createSelector(
  customersSelector,
  filteredCustomersSelector,
  getCustomers
);

/*

// const getCustomers = (state): any => state.customers
// // const getCartItemIds = (state) => state.currentUser.shoppingCart.itemIds;

// export const selectFilteredCustomers = createSelector(
//   getProducts,
//   getCartItemIds,
//   (products, itemIds) => itemIds.map((id) => products[id])
// );

const getVisibilityFilter = (state: any) => state.visibilityFilter;
const getCustomers = (state: any) => state.customers;

const getKeyword = (state: any) => state.keyword;

export const getVisibleCustomers = createSelector(
  [getVisibilityFilter, getCustomers],
  (visibilityFilter, customers) => {
    switch (visibilityFilter) {
      case "SHOW_ALL":
        return customers;
      case "SHOW_COMPLETED":
        return customers.filter((t: any) => t.completed);
      case "SHOW_ACTIVE":
        return customers.filter((t: any) => !t.completed);
    }
  }
);

const getVisibleCustomersFilteredByKeyword = createSelector(
  [getVisibleCustomers, getKeyword],
  (visibleCustomers, keyword) =>
    visibleCustomers.filter((customer: any) => customer.text.includes(keyword))
);


*/
