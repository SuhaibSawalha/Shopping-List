import "./style.css";
import favicon from "./../../assets/img/favicon.png";
import shoppingCart from "./../../assets/img/shopping-cart.png";
import { useItems } from "./../../context/ItemsContext";

const Header = ({ page, setPage }) => {
  const cartItems = useItems();
  const handleClick = () => {
    setPage(page === "ShoppingList" ? "CartList" : "ShoppingList");
  };

  return (
    <header>
      <div>
        <img src={favicon} alt="icon" width="50" height="50" className="icon" />
        <h1>Shopping List</h1>
      </div>
      <button onClick={handleClick}>
        {page === "ShoppingList" ? (
          <div className="shopping-cart">
            <img
              src={shoppingCart}
              alt="shopping cart"
              width="20"
              height="20"
            />
            <span>
              <p>{cartItems.length}</p>
            </span>
          </div>
        ) : (
          <div className="shopping-list">Shopping List</div>
        )}
      </button>
    </header>
  );
};

export default Header;
