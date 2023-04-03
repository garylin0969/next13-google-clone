import Image from 'next/image';
import Link from 'next/link';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';
import SignInButton from './SignInButton';

const SearchHeader = () => {
    return (
        <>
            <header className="sticky top-0 bg-white">
                <div className="flex w-full p-6 items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/google_logo.png"
                            width={120}
                            height={40}
                            alt="google logo"
                            priority
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                        />
                    </Link>
                    <div className="flex-1">
                        <SearchBox />
                    </div>
                    <div className="hidden md:inline-flex md:mr-2 space-x-2">
                        <RiSettings3Line className="header-icon" />
                        <TbGridDots className="header-icon" />
                    </div>
                    <SignInButton />
                </div>
                <SearchHeaderOptions />
            </header>
        </>
    );
};

export default SearchHeader;
