import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

const Home = () => {
    return (
        <>
            <HomeHeader />
            <div className="flex flex-col items-center mt-24">
                <Image
                    src="/google_logo.png"
                    width={300}
                    height={100}
                    alt="google logo"
                    priority
                    style={{
                        width: 'auto',
                        height: 'auto',
                    }}
                />
                <HomeSearch />
            </div>
        </>
    );
};

export default Home;
