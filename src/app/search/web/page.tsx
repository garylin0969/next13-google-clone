import { googleServerApi } from '@/app/api/serverApi';
import WebSearchResults from '@/components/WebSearchResults';
import { SearchItem, SearchResults } from '@/types';
import Link from 'next/link';

interface WebSearchPageProps {
    searchParams: {
        searchTerm: string;
    };
}

const WebSearchPage = async ({ searchParams }: WebSearchPageProps) => {
    const data: SearchResults = await googleServerApi.searchResults(searchParams.searchTerm);
    const results: SearchItem[] = data.items;
    if (!results) {
        return (
            <>
                <div className="flex flex-col justify-center items-center pt-10">
                    <h1 className="text-3xl mb-4">No results found</h1>
                    <p className="text-lg">Try searching for something else or go back to the homepage</p>
                    <Link className="text-blue-500" href="/">
                        Home
                    </Link>
                </div>
            </>
        );
    }
    return <>{results && <WebSearchResults results={data} />}</>;
};

export default WebSearchPage;
