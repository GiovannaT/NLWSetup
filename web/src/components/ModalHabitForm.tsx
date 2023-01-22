import { url } from "../lib/axios";
import { FormEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { BsCheck, BsCheck2 } from "react-icons/bs";
import * as Checkbox from "@radix-ui/react-checkbox";
import { toast, ToastContainer } from "react-toastify";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function ModalHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleSuccess() {
    toast.success("Hábito criado com sucesso");
  }

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    await url.post("habits", {
      title,
      weekDays,
    });

    handleSuccess();
    setTitle("");
    setWeekDays([]);
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);
      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];
      setWeekDays(weekDaysWithAddedOne);
    }
  }
  return (
    <>
      <ToastContainer />
      <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight">
          Qual seu comprometimento?
        </label>
        <input
          autoFocus
          id="title"
          type="text"
          placeholder="ex.: Exercícios, dormir bem, etc..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        />

        <label htmlFor="" className="font-semibold leading-tight mt-4">
          Qual a recorrência?
        </label>

        <div className="flex flex-col gap-2 mt-3">
          {availableWeekDays.map((weekDay, index) => {
            return (
              <Checkbox.Root
                key={weekDay}
                className="flex items-center gap-3 group focus:outline-none"
                checked={weekDays.includes(index)}
                onCheckedChange={() => handleToggleWeekDay(index)}
              >
                <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:outline-none group-focus:ring-green-600 group-focus-ring-offset-2 group-focus:ring-offset-zinc-900">
                  <Checkbox.Indicator>
                    <BsCheck2 width={10} height={10}></BsCheck2>
                  </Checkbox.Indicator>
                </div>
                <span className="text-white leading-tight">{weekDay}</span>
              </Checkbox.Root>
            );
          })}
        </div>

        <button
          type="submit"
          className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500 transition-colors"
        >
          <BsCheck /> Confirmar
        </button>
      </form>
    </>
  );
}
