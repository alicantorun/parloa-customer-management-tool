import { createSelector } from "reselect";

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
