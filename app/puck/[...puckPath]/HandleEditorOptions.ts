import { Dispatch, SetStateAction } from "react";

export const HandleEditorOptions = (
  setOption: Dispatch<SetStateAction<string>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  isOpen: boolean,
  editorOption: string
) => {
  setOption(editorOption);
  if (!isOpen) {
    setIsOpen(!isOpen);
  }
};
