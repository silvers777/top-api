export interface HhResponse {
  items: Vacancy[];
  found: number;
  pages: number;
  per_page: number;
  page: number;
  clusters: ClusterElement[];
  arguments?: any;
  alternate: string;
}

export interface Cluster {
  name: string;
  id: string;
  items: ClusterElement[];
}

export interface ClusterElement {
  name: string;
  url: string;
  count: number;
}

export interface Vacancy {
  id: string;
  premium: boolean;
  name: string;
  department?: any;
  has_test: boolean;
  response_letter_required: boolean;
  area: Area;
  salary?: Salary;
  type: Type;
  address?: Address;
  response_url?: any;
}

export interface Contact {}

export interface Phone2 {}

export interface Phone {}

export interface Snippet {}

export interface Employer {}

export interface Address {}

export interface Metro {}

export interface Type {}

export interface Salary {}

export interface Area {}
