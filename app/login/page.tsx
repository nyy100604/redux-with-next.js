"use client";
import { useRef } from "react";
import {
  useAppSelector,
  useAppDispatch,
  useAppStore,
} from "../GlobalRedux/hooks";
import {
  initializeCount,
  decrement,
  increment,
  incrementByAmount,
} from "../GlobalRedux/Features/counter/counterSlice";

import Link from "next/link";

const page = () => {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(initializeCount(0));
    initialized.current = true;
  }

  const count = useAppSelector((state) => state.conterReducer.value);
  const dispatch = useAppDispatch();

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
};

export default page;
