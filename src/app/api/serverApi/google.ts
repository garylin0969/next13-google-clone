import { QueryConditions, SearchResults } from '@/types';
import { staticFetching } from './request';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

interface SearchParams {
    key?: string;
    cx?: string;
}

const searchResults = async (query: QueryConditions): Promise<SearchResults> => {
    let params: SearchParams = { key: GOOGLE_API_KEY, cx: CONTEXT_KEY };
    if (query) params = { ...params, ...query };
    return await staticFetching('https://www.googleapis.com/customsearch/v1', params);
};

const googleServerApi: {
    searchResults: (query: QueryConditions) => Promise<SearchResults>;
} = {
    searchResults,
};

export default googleServerApi;
