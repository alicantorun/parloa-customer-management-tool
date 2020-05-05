interface Project {
  name?: string;
  enddate?: string;
}

export interface Customer {
  id?: string;
  isActive?: boolean;
  company?: string;
  industry?: string;
  about?: string;
  projects?: Project[];
}
