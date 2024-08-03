"use client";

import { useData } from "@/app/_context/DataContext";
import EmptyBasket from "@/app/_ui/EmptyBasket";
import { useState } from "react";
type InfoTypes = {
  phoneNumber: string;
  email: string;
};
function Page() {
  const [info, setInfo] = useState<InfoTypes>({
    email: "",
    phoneNumber: "",
  });
  const [hasPriority, setHasPriority] = useState<boolean>(false);
  const { basket } = useData();
  const totalPriceInBasket: number = basket.reduce(
    (acc, curr) => acc + curr.unitPrice * (curr.quantity ?? 0),
    0
  );
  const totalPrice: number = totalPriceInBasket + (hasPriority ? 10 : 0);
  if (!basket.length) return <EmptyBasket />;
  return (
    <div className="max-w-3xl mx-auto my-4 px-4">
      <h3 className="text-xl font-bold text-stone-700 tracking-widest ">
        Ready to order? Let&apos;s go!
      </h3>
      <form action="" className="my-8">
        <div className="flex flex-col gap-4">
          <label htmlFor="emailAddress">email</label>
          <input
            id="emailAddress"
            required
            type="text"
            value={info["email"]}
            placeholder="enter your email"
            className="px-4 py-2 rounded-full border-none outline-none focus:ring-4 ring-offset-2 focus:ring-yellow-500"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="number"
            required
            placeholder="enter your Phone number"
            value={info["phoneNumber"]}
            className="px-4 py-2 rounded-full border-none outline-none focus:ring-4 ring-offset-2 focus:ring-yellow-300"
            onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}
          />
          <div className="flex items-center gap-4">
            <label htmlFor="priority">
              Want to yo give your order priority?
            </label>
            <input
              type="checkbox"
              name="priority"
              id="priority"
              checked={hasPriority}
              onChange={() => setHasPriority((prev) => !prev)}
              className="size-6 accent-yellow-400 focus:outline focus:outline-4 focus:outline-offset-2 outline-yellow-400"
            />
          </div>
        </div>
        <button className="border-stone-500 px-6 py-4 rounded-full bg-yellow-400 my-8 font-bold text-stone-800">
          Order Now For €{totalPrice}
        </button>
      </form>
    </div>
  );
}

export default Page;
