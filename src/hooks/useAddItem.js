import { useItemsDispatch } from "../context/ItemsContext";

const useAddItem = () => {
  const dispatch = useItemsDispatch();
  const handleAddItem = (id) => {
    dispatch({ type: "add", id: id });
  };

  return { handleAddItem };
};

export default useAddItem;
