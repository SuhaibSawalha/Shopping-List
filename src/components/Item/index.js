import "./style.css";
import { useItemsDispatch } from "../../ItemsContext";
import { useItems } from "../../ItemsContext";

const Item = ({ item, type, quantity }) => {
  const img = require("./../../assets/img/items/" + item.img);
  const dispatch = useItemsDispatch();
  const cartItems = useItems();

  const handleAdd = () => {
    dispatch({ type: "add", id: item.id });
  };

  const increaseQuantity = () => {
    dispatch({ type: "update", id: item.id, quantity: quantity + 1 });
  };
  const descreaseQuantity = () => {
    dispatch({ type: "update", id: item.id, quantity: quantity - 1 });
  };

  const handleDelete = () => {
    dispatch({ type: "delete", id: item.id });
  };

  return (
    <div className="item">
      <img src={img} alt="item" />
      <div>
        <h2>{item.name}</h2>
        <p className="price">
          {item.price}
          <span>$</span>
        </p>
        {type === "shopping" ? (
          <button
            onClick={handleAdd}
            disabled={cartItems.find((cartItem) => cartItem.id === item.id)}
            className="btn-add"
          >
            add to cart
          </button>
        ) : (
          <>
            <div className="quantity">
              <button
                onClick={descreaseQuantity}
                disabled={quantity === 1}
                className="btn-decrease"
              >
                -
              </button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity} className="btn-increase">
                +
              </button>
            </div>
            <button onClick={handleDelete} className="btn-delete">
              {" "}
              delete from cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
