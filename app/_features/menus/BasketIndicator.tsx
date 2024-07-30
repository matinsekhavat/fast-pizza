"use client";

import { useData } from "@/app/_context/DataContext";
import Link from "next/link";

function BasketIndicator() {
  const { basket } = useData();

  return (
    !!basket.length && (
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-stone-800  text-stone-300 ">
        <div className="max-w-4xl mx-auto flex items-center justify-between h-full">
          <div className="flex items-center gap-10">
            <p className=""> {basket.length} - pizzas🍕</p>
            <p>{basket.reduce((acc, curr) => acc + curr.unitPrice, 0)} €</p>
          </div>
          <Link href="/cart">open Cart &rarr;</Link>
        </div>
      </div>
    )
  );
}

export default BasketIndicator;
