"use client";

import InputField from "@/components/InputField";
import { IconType } from "react-icons";

type Props = {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  secondValue: string;
  secondLabel: string;
  secondName: string;
  icon: IconType;
  secondIcon: IconType;
};

function SocialInput({
  onChange,
  value,
  label,
  name,
  secondValue,
  secondLabel,
  secondName,
  icon: Icon,
  secondIcon: SecondIcon,
}: Props) {
  return (
    <div className="flex justify-start gap-6 py-2">
      <div className="flex justify-center gap-2 items-center">
        <Icon size={20} />
        <InputField
          onChange={onChange}
          label={label}
          type="text"
          name={name}
          value={value}
        />
      </div>
      <div className="flex justify-center gap-2 items-center">
        <SecondIcon size={20} />
        <InputField
          onChange={onChange}
          label={secondLabel}
          type="text"
          name={secondName}
          value={secondValue}
        />
      </div>
    </div>
  );
}

export default SocialInput;
