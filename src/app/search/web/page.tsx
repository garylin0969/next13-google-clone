import { googleServerApi } from '@/app/api/serverApi';
import { SearchItem, SearchResults } from '@/types';

const WebSearchPage = async ({ searchParams }: any) => {
    const data: SearchResults = await googleServerApi.searchResults(searchParams.searchTerm);
    const results: SearchItem[] = data.items;
    return <>{results && results.map((result: any, index: number) => <h1 key={index}>{result.title}</h1>)}</>;
};

export default WebSearchPage;
