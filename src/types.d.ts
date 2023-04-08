export interface GeoLocation {
    as: string;
    city: string;
    country: string;
    countryCode: string;
    isp: string;
    lat: number;
    lon: number;
    org: string;
    query: string;
    region: string;
    regionName: string;
    status: string;
    timezone: string;
    zip: string;
}

export interface SearchUrl {
    type: string;
    template: string;
}

export interface Request {
    kind: string;
    url: SearchUrl;
}

export interface Query {
    request: Request[];
    nextPage: Request[];
}

export interface SearchInformation {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
}

export interface SearchItem {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    cacheId: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: any;
}

export interface SearchResults {
    kind: string;
    url: SearchUrl;
    queries: Query;
    context: { title: string };
    searchInformation: SearchInformation;
    items: SearchItem[];
}
