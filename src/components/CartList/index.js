import { useItems } from "./../../ItemsContext";
import items from "./../../assets/js/constants";
import Item from "./../Item";

const Cart = () => {
  const cartItems = useItems();

  return (
    <>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((itemDescription) => (
          <Item
            key={itemDescription.id}
            type="cart"
            item={items.find((item) => item.id === itemDescription.id)}
            quantity={itemDescription.quantity}
          ></Item>
        ))
      )}
    </>
  );
};

export default Cart;
