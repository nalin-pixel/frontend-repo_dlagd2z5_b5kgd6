import { useEffect } from 'react';

export default function Protected({ children, onUnauthorized }){
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){ onUnauthorized?.(); }
  }, [onUnauthorized]);
  return children;
}
