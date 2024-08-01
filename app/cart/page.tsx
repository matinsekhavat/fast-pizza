"use client";
import Link from "next/link";
import { useData } from "../_context/DataContext";
import GoBackButton from "../_ui/GoBackButton";
import AddCardButton from "../_ui/AddCardButton";

function Page() {
  const { basket } = useData();
  return (
    <div className="max-w-3xl mx-auto my-4">
      <GoBackButton> ←&nbsp; Back to menu</GoBackButton>
      <div>
        <p className="mt-4">Your Cart</p>
        {/* order checkout */}
        <div>
          <div>
            {!basket.length ? (
              <p>
                Your Basket is Empty. Go back to{" "}
                <Link href="/menu" className="text-blue-500">
                  Menu
                </Link>{" "}
                and order some pizzas.
              </p>
            ) : (
              <div className="flex flex-col ">
                {basket.map((item) => {
                  return (
                    <>
                      <div className="flex items-center justify-between py-4 border-b-2 border-stone-200">
                        <p>
                          {item.quantity}× {item.name.toUpperCase()}
                        </p>
                        <div className="flex items-center gap-4 text-stone-800">
                          <span className="font-bold text-sm">
                            €{item.unitPrice}
                          </span>
                          {<AddCardButton menu={item} />}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
