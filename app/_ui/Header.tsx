import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-400 border-b border-stone-200 sm:px-6 gap-4 ">
      <p>Fast React Pizza Co.</p>
      <form action="">
        <SearchInput />
      </form>
    </div>
  );
}

export default Header;
