import { googleServerApi } from '@/app/api/serverApi';
import { SearchItem, SearchResults } from '@/types';

interface WebSearchPage {
    searchParams: {
        searchTerm: string;
    };
}

const WebSearchPage = async ({ searchParams }: WebSearchPage) => {
    const data: SearchResults = await googleServerApi.searchResults(searchParams.searchTerm);
    const results: SearchItem[] = data.items;
    return <>{results && results.map((result: SearchItem, index: number) => <h1 key={index}>{result.title}</h1>)}</>;
};

export default WebSearchPage;
