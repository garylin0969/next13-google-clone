'use client';

import { GeoLocation } from '@/types';
import axios from 'axios';
import useSWR from 'swr';

const CountryLookup = () => {
    const fetcher = (url: string): Promise<GeoLocation> => axios.get(url).then((res) => res.data);
    const { data, error } = useSWR('http://ip-api.com/json', fetcher);

    return <>{data ? <div>{data.country}</div> : <div>loading...</div>}</>;
};

export default CountryLookup;
