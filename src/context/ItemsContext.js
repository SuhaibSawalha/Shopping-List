import { createContext, useReducer, useContext } from "react";

const ItemsContext = createContext();
const ItemsDispatchContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(itemsReducer, []);

  return (
    <ItemsContext.Provider value={cartItems}>
      <ItemsDispatchContext.Provider value={dispatch}>
        {children}
      </ItemsDispatchContext.Provider>
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  return useContext(ItemsContext);
};

export const useItemsDispatch = () => {
  return useContext(ItemsDispatchContext);
};

const itemsReducer = (cartItems, action) => {
  switch (action.type) {
    case "add":
      return [...cartItems, { id: action.id, quantity: 1 }];
    case "delete":
      return cartItems.filter((item) => item.id !== action.id);
    case "update": {
      const itemIndex = cartItems.findIndex((item) => item.id === action.id);
      const updatedItem = {
        ...cartItems[itemIndex],
        quantity: action.quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex] = updatedItem;
      return updatedCartItems;
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
