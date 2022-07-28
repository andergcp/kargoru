export interface IQuoteRequest {
  clientId: number;
  portFrom: string;
  portTo: string;
  typeMerchandising: string;
  priceMerchandising: number;
  typeContainer: string;
  insurance: boolean;
  dateCreated: number;
}

export interface IQuoteResponse {
  quoteRequestId: number;
  supplierId: number;
  dateCreated: number;
  basicPrice: number;
  additionalValues: Map<string,number>;
}

export interface IClient {
  name: string;
  email: string;
  pwd: string;
}

export interface ISupplier {
  name: string;
  email: string;
  pwd: string;
}