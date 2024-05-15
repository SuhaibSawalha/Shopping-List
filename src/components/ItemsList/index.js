import "./style.css";
import { useItems } from "./../../context/ItemsContext";
import items from "./../../assets/js/constants";

const ItemsList = ({ children, name }) => {
  const cartItems = useItems();

  return (
    <div className="items-list">
      <h1>{name}</h1>
      <div className="items">{children}</div>
      {name === "Cart Items" && cartItems.length !== 0 && (
        <p className="total-price">
          Total price:{" "}
          {cartItems.reduce(
            (sum, itemDescription) =>
              sum +
              itemDescription.quantity *
                items.find((item) => item.id === itemDescription.id).price,
            0
          )}
          <span>$</span>
        </p>
      )}
    </div>
  );
};

export default ItemsList;
