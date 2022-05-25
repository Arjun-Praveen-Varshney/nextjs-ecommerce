import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0);
  const [progress, setprogress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setprogress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setprogress(100);
    });
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      localStorage.clear();
    }
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (myuser) {
      setuser({ value: myuser.token, email: myuser.email });
    }
    setkey(Math.random());
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("myuser");
    setuser({ value: null });
    setkey(Math.random());
    router.push("/");
  };

  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    let subt = 0;
    let keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    }
    setsubTotal(subt);
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    if (Object.keys(cart).length == 0) {
      setkey(Math.random());
    }
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setcart(newCart);
    saveCart(newCart);
  };
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {};
    newCart[itemCode] = { qty: 1, price, name, size, variant };
    setcart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };
  const clearCart = () => {
    setcart({});
    saveCart({});
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setcart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <LoadingBar
        color="#4B0082"
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      {key && (
        <Navbar
          logout={logout}
          user={user}
          key={key}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
        />
      )}
      <Component
        buyNow={buyNow}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
