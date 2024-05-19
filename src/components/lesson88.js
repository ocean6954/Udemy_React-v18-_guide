import { createPortal } from "react-dom";
import { useState } from "react";

const Toast = ({ visible, handleCloseClick }) => {
  const toastClassName = visible ? "toast is-visible" : "toast";
  return (
    <>
      <div className={toastClassName}>
        <div className="toast_content">
          <p>トースト</p>
          <button
            type="button"
            className="toast_button"
            onClick={handleCloseClick}
          >
            閉じる
          </button>
        </div>
      </div>
    </>
  );
};

const ModalPortal = ({ children }) => {
  const target = document.querySelector(".container.start");
  return createPortal(children, target);
};

const Lesson88 = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <>
      <div className="container start"></div>

      <button
        type="button"
        onClick={() => {
          setToastOpen(true);
        }}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>

      {toastOpen && (
        <ModalPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => {
              setToastOpen(false);
            }}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default Lesson88;
