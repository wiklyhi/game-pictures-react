import { createPortal } from "react-dom";
import "./custommodal.css";
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog style={{ transparent: true }} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
