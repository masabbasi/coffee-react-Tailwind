/* Components */
import Menu from "./Menu.jsx";
function Header({ darkModeHandler, darkMode }) {
  return (
    <div className="w-full h-[1000px] bg-header-desktop bg-no-repeat">
      {/* Menu */}
      <Menu darkModeHandler={darkModeHandler} darkMode={darkMode} />
    </div>
  );
}

export default Header;
