import { googleServerApi } from '@/app/api/serverApi';
import ImageSearchResults from '@/components/ImageSearchResults';
import NoResultsFound from '@/components/NoResultsFound';
import { QueryConditions, SearchItem, SearchResults } from '@/types';

interface ImageSearchPageProps {
    searchParams: {
        searchTerm: string;
        start?: string;
    };
}

const ImageSearchPage = async ({ searchParams }: ImageSearchPageProps) => {
    const startIndex: string = searchParams.start || '1';
    const query: QueryConditions = { q: searchParams.searchTerm, searchType: 'image', start: startIndex };
    const data: SearchResults = await googleServerApi.searchResults(query);
    const results: SearchItem[] = data.items;
    if (!results) return <NoResultsFound />;
    return <>{results && <ImageSearchResults results={data} />}</>;
};

export default ImageSearchPage;
