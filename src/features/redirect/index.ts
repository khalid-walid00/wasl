"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetRedirect } from '~/app/appSlice';

const GlobalRedirect = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { redirectTo } = useSelector((state: any) => state.config);

  useEffect(() => {
    if (redirectTo) {
      router.push(redirectTo);
      dispatch(resetRedirect()); 
    }
  }, [redirectTo, dispatch, router]);

  return null; 
};

export default GlobalRedirect;
