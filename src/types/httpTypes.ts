//Place 관련
export interface Place {
  placeSeq: number;
  placeId: string;
  displayName: string;
  countryCode: string;
  city: string;
  formattedAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
  primaryType: string;
  googleMapsUri: string;
}

// City 관련
export interface City {
  // filter(arg0: (list: City) => boolean): unknown;
  id: number;
  countryCode: string;
  cityName: string;
  cityNameTranslated: string;
}

//Plan 관련
export interface Plan {
  planSeq: number;
  planName: string;
  countryCode: string;
  planStart: string;
  planNDays: number;
}
