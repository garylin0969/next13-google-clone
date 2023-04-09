import Link from 'next/link';

const NoResultsFound = () => {
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
};

export default NoResultsFound;
