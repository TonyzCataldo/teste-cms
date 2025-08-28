"use client";
import Link from "next/link";
import { PagesListPropsType } from "./PagesListTypes";
import RemoveButton from "../RemoveButton/RemoveButton";
import EditButton from "../EditButton/EditButton";
import Modal from "../Modal/Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AddModal from "../AddModal/AddModal";

export default function PagesList({ names }: PagesListPropsType) {
  //   const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openName, setOpenName] = useState<string | boolean>(false);
  const router = useRouter();

  const deletePage = async (page: string) => {
    if (!page) return;
    try {
      await axios.delete(`/api/${page}`);
      router.refresh();
    } catch (error) {
      console.log("Erro ao deletar: ", error);
    }
  };

  return (
    <ul className="flex flex-col list-none py-8 gap-6 sm:gap-8">
      {names.map((name) => (
        <li key={name} className="flex justify-center">
          <div className="p-4 sm:p-6 border-2 border-[#583975] flex items-center bg-[var(--bg)] justify-between rounded-xl w-full">
            <Link
              href={`/${name}`}
              className="text-2xl sm:text-[2rem] underline break-words w-[47%] min-[420px]:w-[56%]"
            >
              {name}
            </Link>
            <div className="flex gap-2.5 sm:gap-8 min-w-[98px]">
              <EditButton page={name} />
              <div>
                <Modal
                  open={openName === name}
                  setOpen={setOpenName}
                  title="Tem certeza que quer apagar a página?"
                >
                  <RemoveButton action={() => setOpenName(name)} />
                  <RemoveButton action={() => deletePage(name)} />
                </Modal>
              </div>
            </div>
          </div>
        </li>
      ))}
      <AddModal />
    </ul>
  );
}
