import "./style.css";
import { useItems } from "./../../context/ItemsContext";
import useAddItem from "./../../hooks/useAddItem";
import useUpdateItem from "./../../hooks/useUpdateItem";
import useDeleteItem from "./../../hooks/useDeleteItem";

const Item = ({ item, type, quantity }) => {
  const img = require("./../../assets/img/items/" + item.img);
  const cartItems = useItems();
  const { handleAddItem } = useAddItem();
  const { handleUpdateItem } = useUpdateItem();
  const { handleDeleteItem } = useDeleteItem();

  const handleAdd = () => {
    handleAddItem(item.id);
  };

  const increaseQuantity = () => {
    handleUpdateItem(item.id, quantity + 1);
  };
  const descreaseQuantity = () => {
    handleUpdateItem(item.id, quantity - 1);
  };

  const handleDelete = () => {
    handleDeleteItem(item.id);
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
