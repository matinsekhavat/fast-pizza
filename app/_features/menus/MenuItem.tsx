import Image from "next/image";
import React from "react";
import { MenuItemProps } from "@/app/_features/menus/MenuList";
import AddCardButton from "@/app/_ui/AddCardButton";
function MenuItem({ menu }: { menu: MenuItemProps }) {
  return (
    <div
      className={`flex justify-between pt-2 ${menu.soldOut ? "grayscale" : ""}`}
    >
      {/* left side */}
      <div className="flex gap-4">
        {/* image */}
        <div className="size-24 relative">
          <Image src={menu.imageUrl} className="object-cover" fill alt="test" />
        </div>
        {/* lefid sifde content */}
        <div className="flex flex-col justify-between">
          <div>
            <p>{menu.name}</p>
            <span className="text-stone-500">
              {menu.ingredients?.join(", ")}
            </span>
          </div>
          <p>{menu.unitPrice}</p>
        </div>
      </div>
      {/* right side */}
      <div className="self-end">
        {menu.soldOut ? <p>SOLD OUT</p> : <AddCardButton menu={menu} />}
      </div>
    </div>
  );
}

export default MenuItem;
