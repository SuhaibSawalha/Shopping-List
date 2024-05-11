import { useItemsDispatch } from "../context/ItemsContext";

const useDeleteItem = () => {
  const dispatch = useItemsDispatch();
  const handleDeleteItem = (id) => {
    dispatch({ type: "delete", id: id });
  };

  return { handleDeleteItem };
};

export default useDeleteItem;
