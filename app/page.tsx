"use client";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./GlobalRedux/Features/counter/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.conterReducer.value);
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col gap-11 justify-center items-center mt-[6rem]">
      <div className="text-2xl font-bold">count:{count}</div>
      <button
        className="bg-black rounded-full text-white font-semibold px-4 py-2 w-[20%]"
        onClick={() => dispatch(increment())}
      >
        Increase
      </button>
      <button
        className="bg-black rounded-full text-white font-semibold px-4 py-2 w-[20%]"
        onClick={() => dispatch(decrement())}
      >
        decrease
      </button>
      <button
        className="bg-black rounded-full text-white font-semibold px-4 py-2 w-[20%]"
        onClick={() => dispatch(incrementByAmount(7))}
      >
        IncrementByAmount
      </button>
      <Link href="/login">login</Link>
    </main>
  );
}
