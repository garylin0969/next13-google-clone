import { SearchResults } from '@/types';
import { staticFetching } from './request';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

interface SearchParams {
    key?: string;
    cx?: string;
    q: string;
    searchType?: string;
}

const searchResults = async (searchTerm: string, searchType?: string): Promise<SearchResults> => {
    let params: SearchParams = { key: GOOGLE_API_KEY, cx: CONTEXT_KEY, q: searchTerm };
    if (searchType) params.searchType = searchType;
    return await staticFetching('https://www.googleapis.com/customsearch/v1', params);
};

const googleServerApi: {
    searchResults: (searchTerm: string, searchType?: string) => Promise<SearchResults>;
} = {
    searchResults,
};

export default googleServerApi;
