import { useTodoDispatch } from "./Context";

const Item = ({ state }) => {
  const dispatch = useTodoDispatch();
  const deleteItem = (itemId) => {
    dispatch({ type: "complete", payload: { id: itemId } });
  };
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          deleteItem(state.id);
        }}
      >
        完了
      </button>
      {state.content}
    </div>
  );
};

export default Item;
