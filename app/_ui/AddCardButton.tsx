"use client";

import { useData } from "../_context/DataContext";
import { MenuItemProps } from "../_features/menus/MenuList";

function AddCardButton({ menu }: { menu: MenuItemProps }) {
  const {
    addToCartHandler,
    basket,
    increaseBasketHandler,
    decreaseBasketHandler,
  } = useData();
  const isInBasket = basket.find((item) => item.id === menu.id);

  return isInBasket ? (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center justify-center p-2 size-8 bg-yellow-500 rounded-full"
        onClick={() => decreaseBasketHandler(menu.id)}
      >
        <span>-</span>
      </button>
      <p>{isInBasket.quantity}</p>
      <button
        className="flex items-center justify-center p-2 size-8 bg-yellow-500 rounded-full"
        onClick={() => increaseBasketHandler(menu.id)}
      >
        <span>+</span>
      </button>
    </div>
  ) : (
    <button
      className="px-4 text-sm py-2 rounded-full bg-yellow-500 "
      onClick={() => addToCartHandler(menu)}
    >
      add to Cart
    </button>
  );
}

export default AddCardButton;
