"use client";

import { FormEvent } from "react";
import { IoIosAddCircle } from "react-icons/io";

type Props = {
  onAddValue: (event: FormEvent) => void;
};

function FloatingActionButton({ onAddValue }: Props) {
  return (
    <button
      onClick={onAddValue}
      className="bg-gray-800 dark:bg-[#265D97] hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center gap-1"
    >
      <span>Add</span>
      <IoIosAddCircle size={15} />
    </button>
  );
}

export default FloatingActionButton;
