import { BsPlus } from "react-icons/bs";
import logoImage from "../assets/habit-logo.svg";

export function Header() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={logoImage} alt="Habits" />
        <button
          type="button"
          className="border border-violet-500 font-semibold text-violet-500 rounded-lg px-6 py-4 flex items-center gap-3 hover:text-violet-300 hover:border-violet-300 transition-colors"
        >
          <BsPlus className="w-10 h-10 " />
          Novo hábito
        </button>
      </div>
    </>
  );
}
