import { useTodoDispatch } from "./Context";

const Item = ({ state }) => {
  const dispatch = useTodoDispatch();
  const deleteItem = (itemId) => {
    dispatch({ type: "todo/delete", payload: { id: itemId } });
  };
  const handleDoubleClick = (id, content, bool) => {
    dispatch({
      type: "handleToggle",
      payload: {
        id: id,
        content: content,
        isEditing: !bool,
      },
    });
  };

  const handleChange = (id, value) => {
    dispatch({ type: "change", payload: { id: id, content: value } });
  };

  const handleKeyDown = (e, id, content) => {
    console.log(`handleKeyDownのIDは${id}`);
    if (e.keyCode === 13) {
      console.log("エンターキーが押されました！");
      dispatch({
        type: "handleToggle",
        payload: { id: id, content: content, isEditing: false },
      });
    }
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
            value={state.content}
            id={state.id}
            type="text"
            onChange={(e) => handleChange(state.id, e.target.value)}
            onDoubleClick={() =>
              handleDoubleClick(state.id, state.content, state.isEditing)
            }
            onKeyDown={(e) => handleKeyDown(e, state.id, state.content)}
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
