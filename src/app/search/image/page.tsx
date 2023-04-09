import { googleServerApi } from '@/app/api/serverApi';
import ImageSearchResults from '@/components/ImageSearchResults';
import NoResultsFound from '@/components/NoResultsFound';
import { SearchItem, SearchResults } from '@/types';

interface ImageSearchPageProps {
    searchParams: {
        searchTerm: string;
    };
}

const ImageSearchPage = async ({ searchParams }: ImageSearchPageProps) => {
    const data: SearchResults = await googleServerApi.searchResults(searchParams.searchTerm, 'image');
    const results: SearchItem[] = data.items;
    if (!results) return <NoResultsFound />;
    return <>{results && <ImageSearchResults results={data} />}</>;
};

export default ImageSearchPage;
