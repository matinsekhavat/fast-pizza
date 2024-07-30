import React from "react";
import MenuItem from "./MenuItem";

export type MenuItemProps = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
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
    </div>
  );
}

export default MenuList;
