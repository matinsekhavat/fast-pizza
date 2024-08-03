import Link from "next/link";
import React from "react";

function EmptyBasket() {
  return (
    <p className="my-2 border-2 border-dashed border-stone-300 p-4">
      Your Basket is Empty. Go back to{" "}
      <Link href="/menu" className="text-blue-500">
        Menu
      </Link>{" "}
      and order some pizzas.
    </p>
  );
}

export default EmptyBasket;
