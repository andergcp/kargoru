export interface QuoteRequest {
  id: number;
  clientId: number;
  portFrom: string;
  portTo: string;
  typeMerchandising: string;
  priceMerchandising: number;
  typeContainer: string;
  insurance: boolean;
  dateCreated: number;
}

export interface QuoteResponse {
  id: number;
  requestId: number;
  supplierId: number;
  dateCreated: number;
  basicPrice: number;
  additionalValues: {string:number}[];
}

export interface Client {
  id: number;
  name: string;
  email: string;
  pwd: string;
}

export interface Supplier {
  id: number;
  name: string;
  email: string;
  pwd: string;
}