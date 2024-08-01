"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
type GoBackButtonProps = {
  children: ReactNode;
};
function GoBackButton({ children }: GoBackButtonProps) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="border-none text-blue-500">
      {children}
    </button>
  );
}

export default GoBackButton;
