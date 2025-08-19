import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "/src/features/counter/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-teal-500 h-[100vh]">
        <div className="max-w-[1170px] m-auto">
          <div>
            <div className="flex pt-10 justify-center">
              <button
                className="p-5 bg-amber-600 rounded-2xl shadow shadow-amber-700 cursor-pointer"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
              <span className="text-3xl w-[50px] text-center text-emerald-800">
                {count}
              </span>
              <button
                className="p-5 bg-amber-600 rounded-2xl shadow shadow-amber-700 cursor-pointer"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
