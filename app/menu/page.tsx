import MenuList from "../_features/menus/MenuList";
import { getMenu } from "../_services/pizzaApi";

async function page() {
  const menus = await getMenu();
  console.log(menus);
  if (!menus.length) return <p>fetching</p>;
  return (
    <div className="my-2 max-w-3xl mx-auto mb-20">
      <MenuList menus={menus} />
    </div>
  );
}

export default page;
