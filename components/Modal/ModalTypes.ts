import { Dispatch, SetStateAction } from "react";

export type ModalPropsType = {
  children: React.ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};
