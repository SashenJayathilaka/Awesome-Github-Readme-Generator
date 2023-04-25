import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import InputField from "@/components/InputField";
import React from "react";
import { MdTitle } from "react-icons/md";
import { useRecoilState } from "recoil";

type Props = {};

function Title({}: Props) {
  const [title, setTitle] = useRecoilState(profileAtomDetail);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="py-6">
      <Heading icon={MdTitle} label="Title" />
      <div className="flex justify-start gap-6 py-4">
        <InputField
          onChange={onChange}
          label="Tittle"
          type="text"
          name="profileTitle"
          value={title.profileTitle}
        />
        <InputField
          onChange={onChange}
          label="Name"
          type="text"
          name="profileName"
          value={title.profileName}
        />
      </div>
    </div>
  );
}

export default Title;
