"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingCircle from '@/components/ui/loadingCircle/loadingCircle';
import axiosInstance from '@/lib/axios'; 
import AnimateWrapper from '@/components/AnimateWrapper';

const Page: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/api/auth/new-user');
                console.log('Response from /api/auth/new-user:', response.data);

                // Add a delay of 0.2 seconds before navigating to the home page
                setTimeout(() => {
                    router.push('/');
                }, 200); // 200 milliseconds = 0.2 seconds
            } catch (error) {
                console.error('Error fetching data from /api/new-user:', error);
            }
        };

        fetchData();
    }, [isMounted, router]);

    return (
        <AnimateWrapper>
            <div className="m-auto flex justify-center items-center flex-col gap-4">
                <h1 className="text-4xl text-black dark:text-white">Login Success! Redirecting you to home...</h1>
                <LoadingCircle />
            </div>
        </AnimateWrapper>
    );
};

export default Page;
