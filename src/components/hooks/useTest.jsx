import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useTest = () => {
    const axiosSecuire = useAxiosSecure();
    const { data: tests = [], isPending: loading, refetch } = useQuery({
        queryKey: ['tests'],
        queryFn: async () => {
            const res = await axiosSecuire.get('/tests');
            return res.data
        }
    })

    return [tests, loading, refetch]

};

export default useTest;