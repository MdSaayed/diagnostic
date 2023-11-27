import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';

const UseSingleUser = () => {
    const { user } = useAuth();
    const axiosSecuire = useAxiosSecure();

    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecuire.get(`/usersInfo/${user?.email}`);
            return [res.data];
        }
    });
    return [userInfo, refetch];
};

export default UseSingleUser;