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
      <p className="text-xl font-medium text-gray-900 dark:text-[#16e2f5] hover:underline dark:font-normal">
        {label}
      </p>
    </div>
  );
}

export default Heading;
