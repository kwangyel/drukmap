interface searchPoint{
    lat: number;
    lng: number;
    name: string;
}
export class SearchStore{
    public originPoint: searchPoint;
    public destinationPoint: searchPoint;
}