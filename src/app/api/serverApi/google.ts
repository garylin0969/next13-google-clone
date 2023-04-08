import { SearchResults } from '@/types';
import { staticFetching } from './request';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

const searchResults = async (searchTerm: string): Promise<SearchResults> => {
    const params: object = { key: GOOGLE_API_KEY, cx: CONTEXT_KEY, q: searchTerm };
    return await staticFetching('https://www.googleapis.com/customsearch/v1', params);
};

const googleServerApi: {
    searchResults: (searchTerm: string) => Promise<SearchResults>;
} = {
    searchResults,
};

export default googleServerApi;
