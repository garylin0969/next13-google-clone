import { googleServerApi } from '@/app/api/serverApi';
import NoResultsFound from '@/components/NoResultsFound';
import WebSearchResults from '@/components/WebSearchResults';
import { QueryConditions, SearchItem, SearchResults } from '@/types';

interface WebSearchPageProps {
    searchParams: {
        searchTerm: string;
        start?: string;
    };
}

const WebSearchPage = async ({ searchParams }: WebSearchPageProps) => {
    const startIndex: string = searchParams.start || '1';
    const query: QueryConditions = { q: searchParams.searchTerm, start: startIndex };
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const data: SearchResults = await googleServerApi.searchResults(query);
    const results: SearchItem[] = data.items;
    if (!results) return <NoResultsFound />;
    return <>{results && <WebSearchResults results={data} />}</>;
};

export default WebSearchPage;
