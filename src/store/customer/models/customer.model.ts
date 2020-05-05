interface Project {
  name?: string;
  enddate?: string;
}

export interface Customer {
  _id?: string;
  isActive?: boolean;
  company?: string;
  industry?: string;
  about?: string;
  projects?: Project[];
}

export interface Customers {
  customers: Customer[];
}
