import React from "react";
import MenuItem from "./MenuItem";
import BasketIndicator from "./BasketIndicator";

export type MenuItemProps = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
  quantity?: number;
};

type MenuListProps = {
  menus: MenuItemProps[];
};

function MenuList({ menus }: MenuListProps) {
  return (
    <div className="divide-y-2 space-y-2">
      {menus.map((menu) => (
        <MenuItem menu={menu} key={menu.id} />
      ))}

      <BasketIndicator />
    </div>
  );
}

export default MenuList;
