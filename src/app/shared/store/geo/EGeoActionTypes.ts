export enum EGeoActionTypes {
  INIT = '[GEOLOCATION] Geo Init',
  GET_GEOLOCATION = '[GEOLOCATION] GET geolocation',
  GET_GEOLOCATION_SUCCESS = '[GEOLOCATION] GET geolocation success',
  GET_GEOLOCATION_FAIL = '[GEOLOCATION] GET geolocation fail',
  GET_CITY_BY_GEOLOCATION = '[GEOLOCATION] GET city by geolocation',
  GET_CITY_BY_GEOLOCATION_SUCCESS = '[GEOLOCATION] GET city by geolocation success',
  GET_CITY_BY_GEOLOCATION_FAIL = '[GEOLOCATION] GET city by geolocation fail',
  SET_CURRENT_POSITION = '[GEOLOCATION] Set current geo position',
  CLEAR_RANGE_POSITION_FILTER = '[GEOLOCATION] Clear range position filter',
}
