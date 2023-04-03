'use client';

import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

const HomeSearch = () => {
    const router: AppRouterInstance = useRouter();
    const [search, setSearch] = useState<string>('');
    const [randomSearchLoading, setRandomSearchLoading] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!search.trim()) return;
        router.push(`/search/web?query=${search}`);
    };

    const randomSearch = async () => {
        setRandomSearchLoading(true);
        const randomWord: Response = await axios
            .get('https://random-word-api.herokuapp.com/word')
            .then((res) => res.data[0]);
        if (!randomWord) return;
        router.push(`/search/web?query=${randomWord}`);
        setRandomSearchLoading(false);
    };

    return (
        <>
            <form
                className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
                onSubmit={handleSubmit}
            >
                <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
                <input
                    className="flex-grow focus:outline-none"
                    type="text"
                    value={search}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />
                <BsFillMicFill className="text-lg" />
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
                <button className="btn" onClick={handleSubmit}>
                    Google Search
                </button>
                <button
                    className="btn flex items-center justify-center disabled:opacity-80"
                    disabled={randomSearchLoading}
                    onClick={randomSearch}
                >
                    {randomSearchLoading ? (
                        <Image
                            className="h-6 text-center"
                            src="/random_search_loading.svg"
                            width={100}
                            height={100}
                            alt="randomSearchLoading..."
                        />
                    ) : (
                        "I'm Feeling Lucky"
                    )}
                </button>
            </div>
        </>
    );
};

export default HomeSearch;
