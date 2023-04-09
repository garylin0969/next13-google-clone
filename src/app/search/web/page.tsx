import { googleServerApi } from '@/app/api/serverApi';
import NoResultsFound from '@/components/NoResultsFound';
import WebSearchResults from '@/components/WebSearchResults';
import { SearchItem, SearchResults } from '@/types';

interface WebSearchPageProps {
    searchParams: {
        searchTerm: string;
    };
}

const WebSearchPage = async ({ searchParams }: WebSearchPageProps) => {
    const data: SearchResults = await googleServerApi.searchResults(searchParams.searchTerm);
    const results: SearchItem[] = data.items;
    if (!results) return <NoResultsFound />;
    return <>{results && <WebSearchResults results={data} />}</>;
};

export default WebSearchPage;
