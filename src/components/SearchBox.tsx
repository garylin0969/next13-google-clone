'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

const SearchBox = () => {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const router: AppRouterInstance = useRouter();
    const searchTerm: string | null = searchParams.get('searchTerm');
    const [term, setTerm] = useState<string>(searchTerm || '');

    const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<SVGElement>): void => {
        e.preventDefault();
        if (!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`);
    };

    return (
        <>
            <form
                className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
                onSubmit={handleSubmit}
            >
                <input
                    className="w-full focus:outline-none"
                    type="text"
                    value={term}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}
                />
                <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={() => setTerm('')} />
                <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
                <AiOutlineSearch
                    className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
                    onClick={handleSubmit}
                />
            </form>
        </>
    );
};

export default SearchBox;
