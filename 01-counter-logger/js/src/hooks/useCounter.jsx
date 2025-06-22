import { useState, useEffect } from 'react';

const useCounter = () => {
    const [ count, setCount ] = useState(() => Number(localStorage.getItem("count") || 0));
    useEffect(() => localStorage.setItem("count", count.toString(), [count]));
    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    return { count, increment, decrement };
}

export default useCounter;