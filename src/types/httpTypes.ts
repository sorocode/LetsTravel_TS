//Place Type
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
