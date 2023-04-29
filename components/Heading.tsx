"use client";

import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
};

function Heading({ icon: Icon, label }: Props) {
  return (
    <div className="py-2 flex justify-start gap-3 font-medium items-center">
      <Icon size={20} />
      <p className="text-xl font-serif text-gray-900 font-medium dark:text-[#16e2f5] dark:font-normal hover:underline">
        {label}
      </p>
    </div>
  );
}

export default Heading;
