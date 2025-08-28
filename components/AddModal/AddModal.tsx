"use client";

import { useState } from "react";
import Modal from "../Modal/Modal";
import AddButton from "../AddButton/AddButton";
import CreatePageForm from "../CreatePageForm/CreatePage";

export default function AddModal() {
  const [open, setOpen] = useState(false);

  const ButtonFunction = () => {
    setOpen(true);
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Criar nova página">
      <AddButton
        w="200px"
        radius="8px"
        action={() => setOpen(true)}
        text={true}
      />
      <CreatePageForm />
    </Modal>
  );
}
