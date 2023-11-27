import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTest = () => {
    const axiosPublic = useAxiosPublic();
    const { data: tests = [], isPending: loading, refetch } = useQuery({
        queryKey: ['tests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tests');
            return res.data
        }
    })

    return [tests, loading, refetch]

};

export default useTest;