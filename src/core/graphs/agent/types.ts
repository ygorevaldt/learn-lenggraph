export type Customer = {
  id: string;
  name: string;
};

export type Subservice = {
  name: string;
};

export type Menu = {
  name: string;
  companyId: string;
  menuUUID: string;
  subservices: Subservice[];
};

export type Companie = {
  id: string;
  name: string;
  segmentations: string[];
  menus: Menu[];
};

export type ContextData = {
  customers: Customer[];
  segmentations: string[];
  companies: Companie[];
  menus: Menu[];
};
