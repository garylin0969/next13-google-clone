import { SearchResults } from '@/types';
import Parser from 'html-react-parser';
import Link from 'next/link';
import Pagination from './Pagination';

interface WebSearchResultsProps {
    results: SearchResults;
}

const WebSearchResults = ({ results }: WebSearchResultsProps) => {
    return (
        <>
            <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
                <p className="text-gray-600 text-sm mb-5 mt-3">
                    About {results.searchInformation?.formattedTotalResults} results (
                    {results.searchInformation?.formattedSearchTime} seconds)
                </p>
                {results.items?.map((result) => (
                    <div className="mb-8 max-w-xl" key={result.link}>
                        <div className="group flex flex-col">
                            <Link className="text-sm truncate" href={result.link}>
                                {result.formattedUrl}
                            </Link>
                            <Link
                                className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
                                href={result.link}
                            >
                                {result.title}
                            </Link>
                        </div>
                        <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
                    </div>
                ))}
                <Pagination />
            </div>
        </>
    );
};

export default WebSearchResults;
