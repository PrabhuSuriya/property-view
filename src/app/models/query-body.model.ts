export interface QueryBody {
  operationName: string;
  variables: Variables;
  extensions: Extensions;
  query: string;
}

export interface Extensions {
  isPageLoadSearch: boolean;
}

export interface Variables {
  filterCounts: boolean;
  request: Request;
  vrbo_web_global_messaging_alert: boolean;
  vrbo_web_global_messaging_banner: boolean;
  Vrbo_reco_large_search_destino: boolean;
}

export interface Request {
  paging: Paging;
  filterVersion: string;
  filters: any[];
  coreFilters: CoreFilters;
  boundingBox: BoundingBox;
  q: string;
}

export interface BoundingBox {
  maxLat?: number;
  maxLng?: number;
  minLat?: number;
  minLng?: number;
}

export interface CoreFilters {
  maxBathrooms?: null;
  maxBedrooms?: null;
  maxNightlyPrice?: null;
  maxTotalPrice?: null;
  minBathrooms?: number;
  minBedrooms?: number;
  minNightlyPrice?: number;
  minTotalPrice?: null;
  pets?: number;
}

export interface Paging {
  page: number;
  pageSize: number;
}


export interface QueryFilterModel {
  coreFilters: CoreFilters;
  q: string;
}
