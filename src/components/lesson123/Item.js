import { useTodoDispatch } from "./Context";

const Item = ({ state }) => {
  const dispatch = useTodoDispatch();
  const deleteItem = (itemId) => {
    dispatch({ type: "complete", payload: { id: itemId } });
  };
  const handleDoubleClick = (id, content, bool) => {
    console.log("double Clicked");
    // console.log(bool);
    // console.log(!bool);

    dispatch({
      type: "handleToggle",
      payload: {
        id: id,
        content: content,
        isEditing: !bool,
      },
    });
  };
  const handleChange = () => {
    dispatch({ type: "change", payload: {} });
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
      {state.isEditing ? (
        <label htmlFor={state.id}>
          <input
            // value={state.content}
            id={state.id}
            type="text"
            onChange={handleChange}
            onDoubleClick={() =>
              handleDoubleClick(state.id, state.content, state.isEditing)
            }
          ></input>
        </label>
      ) : (
        <span
          onDoubleClick={() =>
            handleDoubleClick(state.id, state.content, state.isEditing)
          }
        >
          {state.content}
        </span>
      )}
    </div>
  );
};

export default Item;
