import items from "./../../assets/js/constants";
import Item from "./../Item";

const ShoppingList = () => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} type="shopping" />
      ))}
    </>
  );
};

export default ShoppingList;
