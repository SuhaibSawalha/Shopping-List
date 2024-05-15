import { useItemsDispatch } from "../context/ItemsContext";

const useUpdateItem = () => {
  const dispatch = useItemsDispatch();
  const handleUpdateItem = (id, quantity) => {
    dispatch({ type: "update", id: id, quantity: quantity });
  };

  return { handleUpdateItem };
};

export default useUpdateItem;
