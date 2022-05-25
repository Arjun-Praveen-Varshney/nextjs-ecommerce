import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropdown, setdropdown] = useState(false);
  const [sidebar, setsidebar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    Object.keys(cart).length !== 0 && setsidebar(true);
    let exempted = [
      "/checkout",
      "/order",
      "/orders",
      "/myaccount",
      "/",
      "/login",
      "/signup",
      "/forgot",
      "/about",
      "/contact",
    ];
    if (exempted.includes(router.pathname)) {
      setsidebar(false);
    }
  }, []);

  const toggleCart = () => {
    setsidebar(!sidebar);
    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full");
    //   ref.current.classList.add("translate-x-0");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };
  const ref = useRef();
  return (
    <>
      {!sidebar && (
        <span
          onMouseOver={() => {
            setdropdown(true);
          }}
          onMouseLeave={() => {
            setdropdown(false);
          }}
          className="fixed right-10 top-4 z-20 cursor-pointer"
        >
          {dropdown && (
            <div
              onMouseOver={() => {
                setdropdown(true);
              }}
              onMouseLeave={() => {
                setdropdown(false);
              }}
              className="absolute right-6 bg-white shadow-lg border top-7 py-4 rounded-md px-5 w-32 z-30"
            >
              <ul>
                <Link href={"/myaccount"}>
                  <a>
                    <li className="py-1 hover:text-indigo-700 cursor-pointer text-sm font-bold">
                      My Account
                    </li>
                  </a>
                </Link>
                <Link href={"/orders"}>
                  <a>
                    <li className="py-1 hover:text-indigo-700 cursor-pointer text-sm font-bold">
                      My Orders
                    </li>
                  </a>
                </Link>
                <li
                  onClick={logout}
                  className="py-1 hover:text-indigo-700 cursor-pointer text-sm font-bold"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          {user.value && (
            <MdAccountCircle className="text-xl md:text-3xl cursor-pointer mx-4" />
          )}
        </span>
      )}
      <div
        className={`flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10 bg-white ${
          !sidebar && "overflow-hidden"
        }`}
      >
        <div className="logo mr-auto md:mx-5 pt-1">
          <Link href={"/"}>
            <a>
              <Image src="/ARJUN.png" alt="" width={200} height={40} />
            </a>
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href={"/tshirts"}>
              <a>
                <li className="hover:text-indigo-600">Tshirts</li>
              </a>
            </Link>
            <Link href={"/hoodies"}>
              <a>
                <li className="hover:text-indigo-600">Hoodies</li>
              </a>
            </Link>
            <Link href={"/stickers"}>
              <a>
                <li className="hover:text-indigo-600">Stickers</li>
              </a>
            </Link>
            <Link href={"/mugs"}>
              <a>
                <li className="hover:text-indigo-600">Mugs</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="cart items-center absolute right-0 top-4 mx-5 flex">
          {!user.value && (
            <Link href={"/login"}>
              <a>
                <button className="bg-indigo-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                  Login
                </button>
              </a>
            </Link>
          )}

          <AiOutlineShoppingCart
            onClick={toggleCart}
            className="text-xl md:text-3xl cursor-pointer"
          />
        </div>

        <div
          ref={ref}
          className={`w-72 h-[100vh] sideCart overflow-y-auto absolute top-0 bg-indigo-100 px-8 py-10 transition-all ${
            sidebar ? "right-0" : "-right-96"
          }`}
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-4 cursor-pointer text-2xl text-indigo-500"
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your cart is empty</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">
                      {cart[k].name}({cart[k].size}/{cart[k].variant}){" "}
                    </div>
                    <div className="flex items-center justify-center w-1/3 font-semibold text-lg">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-indigo-500"
                      />
                      <span className="mx-2 text-sm">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-indigo-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="font-bold my-2">Total: ₹{subTotal}</div>
          <div className="flex">
            <Link href={"/checkout"}>
              <button
                disabled={Object.keys(cart).length === 0}
                className="disabled:bg-indigo-300 flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"
              >
                <BsFillBagCheckFill className="m-1" />
                Checkout
              </button>
            </Link>
            <button
              disabled={Object.keys(cart).length === 0}
              onClick={clearCart}
              className="disabled:bg-indigo-300 flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
