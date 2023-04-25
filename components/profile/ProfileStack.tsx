import React from "react";
import InputField from "../InputField";

type Props = {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  secondValue: string;
  secondLabel: string;
  secondName: string;
};

function ProfileStack({
  onChange,
  value,
  label,
  name,
  secondValue,
  secondLabel,
  secondName,
}: Props) {
  return (
    <div className="flex justify-start gap-6 py-2">
      <InputField
        onChange={onChange}
        label={label}
        type="text"
        name={name}
        value={value}
      />
      <InputField
        onChange={onChange}
        label={secondLabel}
        type="text"
        name={secondName}
        value={secondValue}
      />
    </div>
  );
}

export default ProfileStack;
