"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type DataProps = {
  name: string;
  setName: (name: string) => void;
};

const DataContext = createContext<DataProps | null>(null);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");

  return (
    <DataContext.Provider value={{ name, setName }}>
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
