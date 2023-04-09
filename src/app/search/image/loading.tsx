const loading = () => {
    return (
        <>
            <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 justify-center lg:justify-start pb-42">
                {Array.from(Array(3).keys()).map((data: number) => (
                    <div className={`animate-pulse ${data !== 1 && 'hidden sm:inline-block'}`} key={data}>
                        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
                        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
                        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default loading;
