"use client";

import { gitTechnologies } from "@/atom/technology";
import profileUpdateState from "@/hook/profileUpdateState";
import { Checkbox, Tooltip } from "@mui/material";
import { useRecoilState } from "recoil";

type Props = {
  label: string;
  image: string;
};

function Skill({ label, image }: Props) {
  const [technology, setTechnology] = useRecoilState(gitTechnologies);
  const { images } = profileUpdateState();

  const boxLabel = { inputProps: { "aria-label": "Checkbox demo" } };

  const onChangeTechnology = () => {
    if (images.skills.includes(image)) {
      setTechnology((prev) => ({
        ...prev,
        [label]: "",
      }));
    } else {
      setTechnology((prev) => ({
        ...prev,
        [label]: image,
      }));
    }
  };

  return (
    <div>
      <Tooltip title={label}>
        <div
          className={`flex justify-between items-center border border-[#0F2557] w-full overflow-hidden rounded-xl px-4 py-4 space-y-2 hover:bg-[#161748] hover-shadow-xl hover:text-black cursor-pointer ${
            images.skills.includes(image) && "bg-[#04082b]"
          }`}
          onClick={onChangeTechnology}
        >
          <Checkbox
            {...boxLabel}
            value={label}
            name={label}
            sx={{ color: "#fff" }}
            color="default"
            checked={images.skills.includes(image)}
          />
          {images.skills.includes(image) ? (
            <img
              src={image}
              alt={label}
              className="object-cover h-10 w-10 group-hover:scale-110 transition animate-bounce"
            />
          ) : (
            <img
              src={image}
              alt={label}
              className="object-cover h-10 w-10 group-hover:scale-110 transition"
            />
          )}
        </div>
      </Tooltip>
    </div>
  );
}

export default Skill;
