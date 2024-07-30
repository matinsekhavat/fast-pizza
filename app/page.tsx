"use client";

import { useRouter } from "next/navigation";
import { useData } from "./_context/DataContext";

function HomePage() {
  const { name, setName } = useData();
  const router = useRouter();
  return (
    <div className="my-20 max-w-3xl mx-auto">
      <div className="  px-4 my-10 text-center sm:my-16">
        <h1 className="mb-8 text-xl font-semibold md:text-3xl text-stone-600">
          The best pizza
          <br />
          <p className="text-yellow-500">
            Straight out of the oven, straight to you.
          </p>
        </h1>
        <p>👋 Welcome! Please start by telling us your name:</p>
        <input
          className="my-4 rounded-xl p-2 w-72 outline-none border border-stone-400"
          type="text"
          placeholder="your full name"
          onChange={(e) => setName(e.target.value)}
        />

        {name.length ? (
          <button
            className=" flex  mx-auto my-4 bg-yellow-400 px-6 py-4 rounded-full"
            onClick={() => router.push("/menu")}
          >
            Start Ordering
          </button>
        ) : null}
      </div>
      {/* sign up section */}
    </div>
  );
}

export default HomePage;
