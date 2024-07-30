import Image from "next/image";
import MenuList from "../_features/menus/MenuList";

async function page() {
  const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");
  const menus = await res.json();
  if (!menus.data.length) return <p>fetching</p>;
  return (
    <div className="my-2 max-w-3xl mx-auto">
      <MenuList menus={menus.data} />
    </div>
  );
}

export default page;
