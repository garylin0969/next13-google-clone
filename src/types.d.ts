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
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;
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

export interface Image {
    contextLink: string;
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
}

export interface SearchItem {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    mime: string;
    fileFormat: string;
    image?: Image;
    cacheId?: string;
    formattedUrl?: string;
    htmlFormattedUrl?: string;
    pagemap?: any;
}

export interface SearchResults {
    kind: string;
    url: SearchUrl;
    queries: Query;
    context: { title: string };
    searchInformation: SearchInformation;
    items: SearchItem[];
}

export interface QueryConditions {
    q: string;
    searchType?: string;
    start: string;
}
