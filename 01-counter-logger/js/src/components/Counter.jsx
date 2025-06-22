import useCounter from "../hooks/useCounter.jsx";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="min-h-5 bg-blue-300 p-5 text-center flex flex-col justify-center gap-2 w-60">
        <h1>Counter</h1>
        <h6>{count}</h6>
        <div className="flex gap-3">
          <button
            onClick={increment}
            className="bg-blue-600 text-white p-2 rounded-2xl"
          >
            increment
          </button>
          <button
            onClick={decrement}
            className="bg-blue-600 text-white p-2 rounded-2xl"
          >
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
