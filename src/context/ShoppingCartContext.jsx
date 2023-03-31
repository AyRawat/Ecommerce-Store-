import { createContext, useContext, useState } from "react";
const ShoppingCartContext = createContext({});
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);

  const searchItems = (data) => {
    console.log("Reached inside Search", data);
    setSearchResults(data);
  };
  //Cart Items

  const getCartQuantity = () => {
    return cartItems.length;
  };
  const addToCart = (id) => {
    console.log("This was called for this item ID: ", id);
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log("The CartItems", cartItems);
  };
  function increaseProductQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            if (id === 642 && item.quantity === 5) {
              console.log("Reached here INSIDE COCA COALA");
              return { ...item, quantity: item.quantity + 2 };
            }
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log("The CartItems", cartItems);
  }
  function decreaseProductQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log("The CartItems", cartItems);
  }
  const removeFromCart = (itemId) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== itemId);
    });
  };
  // Applying Discount
  /**
   * if flag = true, Give Discount
   * if Flag = false, need to remove the discount
   */
  function handleDiscount(flag) {
    let id = "641";
    if (flag) {
      console.log("REACHED here inside Handle Discount");
      increaseProductQuantity(id);
    } else {
      decreaseProductQuantity(id);
    }
  }

  function discountPriceCalculator() {
    let totalDiscount = 0;
    cartItems.map((x) => {
      if (x.id === 642) {
        if (x.quantity >= 6) {
          totalDiscount += 0.99;
        }
      } else if (x.id === 532) {
        if (x.quantity >= 3) {
          totalDiscount += 0.65;
        }
      }
    });
    return totalDiscount;
    console.log();
  }

  //FinalPriceCalculator

  //WishList Items
  const getWishListCount = () => {
    return wishListItems.length;
  };
  const updateWishList = (id) => {
    console.log("This was called for this item ID: ", id);
    setWishListItems((wishListItems) => {
      if (wishListItems.find((item) => item.id === id) == null) {
        console.log("Id Not found");
        return [...wishListItems, { id }];
      } else {
        return wishListItems.filter((item) => item.id != id);
      }
    });
    console.log("The WishList Items", wishListItems);
  };

  const contextValue = {
    cartItems,
    searchResults,
    addToCart,
    removeFromCart,
    decreaseProductQuantity,
    getCartQuantity,
    increaseProductQuantity,
    handleDiscount,
    discountPriceCalculator,
    searchItems,
    getWishListCount,
    updateWishList,
  };
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
