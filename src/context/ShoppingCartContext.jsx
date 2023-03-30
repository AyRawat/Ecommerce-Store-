import { createContext, useContext, useState } from "react";
const ShoppingCartContext = createContext({});
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  //Cart Items
  const getCartItemsId = () => {
    return cartItems.map((item) => item.id);
  };
  const getAllCartItems = () => {
    return cartItems;
  };
  const getCartQuantity = () => {
    return cartItems.length;
  };
  const updateCartItemCount = (newAmount, id) => {
    setCartItems((currItems) => {
      currItems.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: newAmount };
        }
      });
    });
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
  const removeFromWishList = (id) => {
    setWishListItems((wishListItems) => {
      return wishListItems.filter((item) => item.id !== itemId);
    });
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseProductQuantity,
    updateWishList,
    getCartQuantity,
    removeFromWishList,
    getWishListCount,
    increaseProductQuantity,
    getCartItemsId,
    getAllCartItems,
  };
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
