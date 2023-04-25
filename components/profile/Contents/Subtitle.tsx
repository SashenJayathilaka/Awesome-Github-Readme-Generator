"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import InputField from "@/components/InputField";
import { MdOutlineSubtitles } from "react-icons/md";
import { useRecoilState } from "recoil";

type Props = {};

function Subtitle({}: Props) {
  const [title, setTitle] = useRecoilState(profileAtomDetail);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="py-6">
      <Heading icon={MdOutlineSubtitles} label="Subtitle" />
      <div className="flex justify-start gap-6 py-4">
        <InputField
          onChange={onChange}
          label="Tittle"
          type="text"
          name="profileSubTitle"
          value={title.profileSubTitle}
        />
      </div>
    </div>
  );
}

export default Subtitle;
