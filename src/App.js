import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import ShoppingList from "./components/ShoppingList";
import CartList from "./components/CartList";
import { useState } from "react";
import { ItemsProvider } from "./ItemsContext";

function App() {
  const [page, setPage] = useState("ShoppingList");

  return (
    <ItemsProvider className="App">
      <Header page={page} setPage={setPage} />
      <ItemsList
        name={page === "ShoppingList" ? "Shopping Items" : "Cart Items"}
      >
        {page === "ShoppingList" ? <ShoppingList /> : <CartList />}
      </ItemsList>
    </ItemsProvider>
  );
}

export default App;
