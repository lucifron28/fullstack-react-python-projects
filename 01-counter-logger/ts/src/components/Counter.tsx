import useCounter from "../hooks/useCounter";

const Counter = () => {
    const {count, increment, decrement } = useCounter();
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center text-center bg-blue-300 w-60 p-3">
                <h1>Counter</h1>
                <h6>{count}</h6>
                <div className="flex gap-1">
                    <button onClick={increment} className="bg-blue-700 text-white p-1.5 rounded-2xl">increment</button>
                    <button onClick={decrement} className="bg-blue-700 text-white p-1.5 rounded-2xl">decrement</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;