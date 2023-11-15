import { useState, useEffect } from "react";
/* Data */
import { shopingCartItems } from "../data.js";

function SubMenuCart() {
  /* Total Price State */
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    /* Calculate Total Price Function */
    const calculateTotalPrice = () => {
      let totalPrice = 0;

      shopingCartItems.forEach((item) => {
        const itemPrice = (item.price - item.off) * item.number;
        totalPrice += itemPrice;
      });

      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [shopingCartItems]);

// 	/* Handle Increment Products Number */
// 	const handleIncrement = (itemId) => {
//     const updatedCartItems = cartItems.map((item) =>
//       item.id === itemId ? { ...item, number: item.number + 1 } : item
//     );
//     updateCart(updatedCartItems);
//   };
// /* Handle Decrement Products Number */
//   const handleDecrement = (itemId) => {
//     const updatedCartItems = cartItems.map((item) =>
//       item.id === itemId && item.number > 1 ? { ...item, number: item.number - 1 } : item
//     );
//     updateCart(updatedCartItems);
//   }

  return (
    <div className="w-100 p-5 bg-white overflow-hidden absolute left-0 top-[99%] border-t-[3px] border-orange-300 rounded-2xl shadow-primary scale-y-0 origin-top transition-all delay-75 group-hover:scale-y-100 dark:bg-zinc-700 dark:text-white child:bg-red-700 cursor-default">
      {/* Sub Menu Head */}
      <div className="flex justify-between items-center font-DanaMedium text-xs">
        <span className="text-gray-300 tracking-tighter">{`${shopingCartItems.length} مورد`}</span>
        <a
          href="#"
          className="flex justify-center items-center text-orange-300"
        >
          <span>مشاهده سبد خرید</span>
          <svg className="w-4 h-4">
            <use xlinkHref="sprite.svg#chevron-left"></use>
          </svg>
        </a>
      </div>
      {/* Sub Menu Cart Body */}
      <div className="max-h-52 border-b divide-y overflow-y-auto">
        {shopingCartItems.map((item) => (
          <>
            <div className="flex pb-5 gap-x-2 pt-4">
              <img src={item.image} alt="item.title" className="w-30 h-30" />
              <div className="flex flex-col justify-between">
                <h1 className="font-DanaMedium text-zinc-700 text-justify tracking-normal dark:text-white">{item.title}</h1>
                <div className="flex items-center gap-x-10">
										<div className="line-[44px] p-2 flex justify-center items-center gap-x-3 font-DanaMedium text-xl border rounded-5xl">
												<div className="w-7 h-7 flex justify-center items-center rounded-full bg-gray-300 cursor-pointer">+</div>
												<div className="w-6 h-6 flex justify-center items-center">{item.number}</div>
												<div className="w-7 h-7 flex justify-center items-center rounded-full bg-gray-300 cursor-pointer">-</div>
										</div>

									<div className="flex flex-col">
                  <span className="text-xs text-teal-600 font-DanaRegular tracking-tighter dark:text-emerald-500">{`${item.off.toLocaleString()} تخفیف`}</span>
                  <span className="font-DanaMedium text-sm text-zinc-700 dark:text-white">{`${item.price.toLocaleString()} تومان`}</span>
                </div>
								</div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* Sub Menu Footer */}
      <div className="mt-5 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-gray-300 tracking-tighter font-DanaRegular dark:text-gray-300">
            مبلغ قابل پرداخت
          </span>
          <span className="font-DanaMedium text-xl text-zinc-700 dark:text-white">{`${totalPrice.toLocaleString()} تومان`}</span>
        </div>
        <a
          href="#"
          className="flex justify-center items-center w-36 h-14 bg-emerald-600 rounded-xl font-DanaDemiBold text-xl text-white tracking-menu dark:bg-emerald-500"
        >
          ثبت سفارش
        </a>
      </div>
    </div>
  );
}

export default SubMenuCart;
