import { useState } from "react";
import { createPortal } from "react-dom";

// eslint-disable-next-line react/prop-types
const Modal = (prop) => {
  const [open, setOpen] = useState(false || prop.open);

  console.log("tick");
  const onClose = () => setOpen(false);

  if (!open) return null;

  return (
    <div id="modal" className="modal-root">
      <h2>Modal Title</h2>
      <p>Modal content goes here.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
const CreatePortal = () => {
  const [open, isOpen] = useState(false);
  const root = document.getElementById("root");

  return (
    <>
      {createPortal(<Modal open={open} />, root)}
      <button onClick={() => isOpen(true)}>dffd</button>
    </>
  );
};

export default CreatePortal;
