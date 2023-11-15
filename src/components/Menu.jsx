/* Components */
import SubMenuCart from "./SubMenuCart.jsx";
/* Data */
import { menuItems } from "../data.js";

function Menu({ darkModeHandler, darkMode }) {
  return (
    /* Main Menu Div */
    <div className="w-[98%] lg:w-[90%] h-24 px-6 lg:px-10 py-5 mx-auto flex items-center fixed top-9 right-0 left-0 bg-black/50 backdrop-blur-[6px] rounded-3xl tracking-menu">
      {/* Inner Div */}
      <div className="w-full flex justify-between items-center">
        {/* Navbar */}
        <nav className="flex items-center gap-5 lg:gap-9">
          {/* Logo */}
          <div className="shrink-0">
            <img src="/app-logo.png" alt="" />
          </div>
          {/* Menu Items */}
          <ul className="h-full flex gap-x-4 xl:gap-x-9 text-xl text-gray-300">
            {menuItems.map((item, index) => {
              /* Condition To Establish Sub-item */
              if (typeof item === "object" && item !== null) {
                return (
                  /* Item With sub-item */
                  <li
                    key={index}
                    className="h-14 leading-[56px] relative group"
                  >
                    <a href="#" className="group-hover:text-orange-300">
                      {Object.keys(item)[0]}
                    </a>
                    {/* Sub-item */}
                    <ul className="w-52 p-6 bg-white overflow-hidden absolute top-[99%] space-y-4 font-DanaMedium text-zinc-700 text-base tracking-normal border-t-[3px] border-orange-300 rounded-2xl shadow-primary scale-y-0 origin-top transition-all delay-75 group-hover:scale-y-100 dark:bg-zinc-700 dark:text-white child:bg-red-700">
                      {item[Object.keys(item)[0]].map(
                        (subItem, subItemIndex) => (
                          <li
                            key={subItemIndex}
                            className="transition-all hover:text-orange-300"
                          >
                            <a href="#" className="block">
                              {subItem}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                );
              } else {
                /* If There Is No Sub-item */
                return (
                  <li
                    key={index}
                    className={`h-14 leading-[56px] ${
                      index === 0 && "font-DanaMedium text-orange-200"
                    }`}
                  >
                    <a href="#">{item}</a>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        {/* The Left Side Of The Menu */}
        <div className="flex items-center gap-x-4 xl:gap-x-10 text-orange-200">
          {/* Shopping Cart And Dark Mode Icons */}
          <div className="flex gap-x-1 xl:gap-x-5">
            {/* Shopping Cart Icon */}
            <div className="p-3 relative group cursor-pointer">
              <svg className="w-8 h-8">
                <use xlinkHref="sprite.svg#shopping-cart"></use>
              </svg>
							{/* Sub Menu Cart (Show With Hover) */}
							<SubMenuCart />
            </div>
            {/* Dark Mode Icon */}
            <div onClick={darkModeHandler} className="py-3 cursor-pointer">
              <svg className="w-8 h-8">
                <use
                  xlinkHref={`sprite.svg#${darkMode ? "sun" : "moon"}`}
                ></use>
              </svg>
            </div>
          </div>
          {/* The line Between The Dark Mode Icon And The Login Or Register Button */}
          <span className="inline-block w-px h-14 bg-orange-200"></span>
          {/* Login Or Register Button */}
          <div>
            <a href="#" className="flex items-center gap-x-2.5">
              <svg className="w-8 h-8">
                <use xlinkHref="sprite.svg#arrow-left-on-rectangle"></use>
              </svg>
              <span className="hidden lg:inline-block">ورود | ثبت‌نام</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
