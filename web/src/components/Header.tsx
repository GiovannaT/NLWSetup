import { BsPlus, BsX } from "react-icons/bs";
import * as Dialog from "@radix-ui/react-dialog";

import logoImage from "../assets/habit-logo.svg";
import { ModalHabitForm } from "./ModalHabitForm";

export function Header() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={logoImage} alt="Habits" />
        <Dialog.Root>
          <Dialog.Trigger
            type="button"
            className="border border-violet-500 font-semibold text-violet-500 rounded-lg px-6 py-4 flex items-center gap-3 hover:text-violet-300 hover:border-violet-300 transition-colors"
          >
            <BsPlus className="w-10 h-10 " />
            Novo hábito
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

            <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Close className="absolute r-6 t-6 text-zinc-400 hover:text-zinc-200">
                <BsX className="w-10 h-10" aria-label="Fechar" />
              </Dialog.Close>

              <Dialog.Title className="text-3xl leading-tight font-bold">
                Criar hábito
              </Dialog.Title>

              <ModalHabitForm></ModalHabitForm>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
}
