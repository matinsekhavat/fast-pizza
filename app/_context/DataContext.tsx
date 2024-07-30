"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { MenuItemProps } from "../_features/menus/MenuList";

type DataProps = {
  name: string;
  setName: (name: string) => void;
  basket: MenuItemProps[];
  addToCartHandler: (data: MenuItemProps) => void;
  increaseBasketHandler: (id: number) => void;
};

const DataContext = createContext<DataProps | null>(null);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [basket, setBasket] = useState<MenuItemProps[]>([]);

  function addToCartHandler(data: MenuItemProps): void {
    setBasket((prev) => [...prev, { ...data, quantity: 1 }]);
  }
  function increaseBasketHandler(id: number): void {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
      )
    );
  }

  return (
    <DataContext.Provider
      value={{ name, setName, basket, addToCartHandler, increaseBasketHandler }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error("You cannot access this data in this area");
  return context;
}

export default DataProvider;
