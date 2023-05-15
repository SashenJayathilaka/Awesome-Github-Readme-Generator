"use client";

type Props = {
  label: string;
};

function InstallCodeLine({ label }: Props) {
  return (
    <p className="dark:bg-slate-800 bg-slate-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center text-sm font-normal text-gray-700 dark:text-[#7c8691]">
      {label}
    </p>
  );
}

export default InstallCodeLine;
