import { CoreFilters } from "./query-body.model";

export interface PropertiesResponse {
  data: Data;
}

export interface Data {
  results: Results;
  requestmarker: string;
  __typename: string;
}

export interface Results {
  id: string;
  typeaheadSuggestion: TypeaheadSuggestion;
  geography: null;
  propertyRedirectUrl: null;
  __typename: string;
  destination: Destination;
  destinationMessage: DestinationMessage;
  resultCount: number;
  filterGroups: FilterGroup[];
  page: number;
  pageSize: number;
  queryUUID: string;
  listings: Listing[];
  pinnedListing: null;
  parsedParams: ParsedParams;
  pageCount: number;
  fromRecord: number;
  toRecord: number;
  mapViewport: MapViewport;
  expandedGroups: any[];
  discoveryXploreFeeds: DiscoveryXploreFeeds;
  internalTools: null;
  globalMessages: GlobalMessages;
  percentBooked: null;
}

export interface Destination {
  breadcrumbs: any[];
  __typename: string;
}

export interface DestinationMessage {
  iconTitleText: IconTitleText;
  iconText: null;
  __typename: string;
}

export interface IconTitleText {
  title: string;
  message: string;
  icon: string;
  messageValueType: string;
  link: null;
  __typename: string;
}

export interface DiscoveryXploreFeeds {
  results: any[];
  __typename: string;
}

export interface FilterGroup {
  groupInfo: GroupInfo;
  filters: FilterElement[];
  __typename: FilterGroupTypename;
}

export enum FilterGroupTypename {
  SearchFilterGroup = "SearchFilterGroup",
}

export interface FilterElement {
  count: number;
  checked: boolean;
  filter: FilterFilter;
  __typename: PurpleTypename;
}

export enum PurpleTypename {
  SearchFilter = "SearchFilter",
}

export interface FilterFilter {
  id: string;
  name: string;
  refineByQueryArgument: string;
  description: null | string;
  __typename: FluffyTypename;
  groupId: string;
}

export enum FluffyTypename {
  Filter = "Filter",
}

export interface GroupInfo {
  name: string;
  id: string;
  __typename: GroupInfoTypename;
  helpText?: null | string;
}

export enum GroupInfoTypename {
  Badge = "Badge",
  FilterGroupInfo = "FilterGroupInfo",
}

export interface GlobalMessages {
  alert: null;
  __typename: string;
  banner: null;
}

export interface Listing {
  virtualTourBadge: null;
  amenitiesBadges: GroupInfo[];
  multiUnitProperty: boolean;
  images: Image[];
  listingId: string;
  detailPageUrl: string;
  instantBookable: boolean;
  minStayRange: MinStayRange;
  rankedBadges: GroupInfo[];
  propertyId: string;
  propertyMetadata: PropertyMetadata;
  superlativesBadges: GroupInfo[];
  unitMetadata: UnitMetadata;
  webRatingBadges: GroupInfo[];
  bathrooms: Bathrooms;
  bedrooms: number;
  propertyType: string;
  sleeps: number;
  petsAllowed: boolean;
  spaces: Spaces;
  __typename: ListingTypename;
  geoDistance: null;
  priceSummary: PriceSummary;
  priceSummarySecondary: null;
  priceLabel: null;
  averageRating: number;
  reviewCount: number;
  unitMessage: UnitMessage;
  listingNamespace: ListingNamespace;
  listingNumber: number;
  geoCode: GeoCode;
  roomInfo?: string; // formatted info filled by component
  roomInfoFull?: string; // formatted info filled by component
}

export enum ListingTypename {
  Listing = "Listing",
}

export interface Bathrooms {
  full: number;
  half: number;
  toiletOnly: number;
  __typename: BathroomsTypename;
}

export enum BathroomsTypename {
  Bathrooms = "Bathrooms",
}

export interface GeoCode {
  latitude: number;
  longitude: number;
  __typename: GeoCodeTypename;
}

export enum GeoCodeTypename {
  ListingGeoCode = "ListingGeoCode",
}

export interface Image {
  altText: null;
  c6_uri: string;
  c9_uri: string;
  mab: Mab | null;
  __typename: ImageTypename;
}

export enum ImageTypename {
  Image = "Image",
}

export interface Mab {
  banditId: string;
  payloadId: null;
  campaignId: string;
  cached: null;
  arm: null;
  __typename: string;
}

export enum ListingNamespace {
  Trips = "trips",
  Vrbo = "vrbo",
}

export interface MinStayRange {
  minStayHigh: number;
  minStayLow: number;
  __typename: MinStayRangeTypename;
}

export enum MinStayRangeTypename {
  MinStayRange = "MinStayRange",
}

export interface PriceSummary {
  priceAccurate: null;
  priceTypeId: PriceTypeID;
  edapEventJson: string;
  formattedAmount: string;
  roundedFormattedAmount: string;
  pricePeriodDescription: PricePeriodDescription;
  __typename: PriceSummaryTypename;
}

export enum PriceSummaryTypename {
  TravelerPriceSummary = "TravelerPriceSummary",
}

export enum PricePeriodDescription {
  AvgNight = "avg/night",
}

export enum PriceTypeID {
  Unknown = "UNKNOWN",
}

export interface PropertyMetadata {
  headline: string;
  __typename: PropertyMetadataTypename;
  propertyName: null | string;
}

export enum PropertyMetadataTypename {
  PropertyMetadata = "PropertyMetadata",
}

export interface Spaces {
  spacesSummary: SpacesSummary;
  __typename: SpacesTypename;
}

export enum SpacesTypename {
  Spaces = "Spaces",
}

export interface SpacesSummary {
  area: Area;
  __typename: SpacesSummaryTypename;
}

export enum SpacesSummaryTypename {
  SpacesSummary = "SpacesSummary",
}

export interface Area {
  areaValue: number | null;
  __typename: AreaTypename;
}

export enum AreaTypename {
  AreaMeasurement = "AreaMeasurement",
}

export interface UnitMessage {
  iconText: null;
  __typename: UnitMessageTypename;
}

export enum UnitMessageTypename {
  UnitMessage = "UnitMessage",
}

export interface UnitMetadata {
  unitName: string;
  __typename: UnitMetadataTypename;
}

export enum UnitMetadataTypename {
  UnitMetadata = "UnitMetadata",
}

export interface MapViewport {
  neLat: number;
  neLong: number;
  swLat: number;
  swLong: number;
  __typename: string;
}

export interface ParsedParams {
  q: string;
  coreFilters: CoreFilters;
  dates: null;
  sort: null;
  __typename: string;
}

// export interface CoreFilters {
//   adults?: null;
//   children?: null;
//   pets?: number;
//   minBedrooms?: number;
//   maxBedrooms?: null;
//   minBathrooms?: number;
//   maxBathrooms?: null;
//   minNightlyPrice?: number;
//   maxNightlyPrice?: null;
//   minSleeps?: null;
//   __typename?: string;
// }

export interface TypeaheadSuggestion {
  uuid: string;
  term: string;
  name: string;
  __typename: string;
}
