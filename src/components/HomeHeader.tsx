import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';
import SignInButton from './SignInButton';

const HomeHeader = () => {
    return (
        <>
            <header className="flex justify-end p-5 text-sm">
                <div className="flex space-x-4 items-center">
                    <Link className="hover:underline" href="https://mail.google.com/">
                        Gmail
                    </Link>
                    <Link className="hover:underline" href="https://image.google.com/">
                        Images
                    </Link>
                    <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
                    <SignInButton />
                </div>
            </header>
        </>
    );
};

export default HomeHeader;
