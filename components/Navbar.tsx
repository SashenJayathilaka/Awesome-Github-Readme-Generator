"use client";

import { authModelState } from "@/atom/authModalAtom";
import { FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AiFillGithub,
  AiOutlineCloseCircle,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { useRecoilState } from "recoil";

import LoginModal from "./models/LoginModal";

type Props = {};

function Navbar({}: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [show, setshow] = useState(false);
  const [modelState, setModelState] = useRecoilState(authModelState);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const handleOpen = () => {
    setModelState((prev) => ({
      ...prev,
      open: true,
    }));
  };

  return (
    <>
      <LoginModal />
      <div className="bg-transparent shadow-2xl">
        <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
          <div className="flex justify-between ">
            <div className="hidden sm:flex flex-row items-center space-x-6">
              <CiTwitter size={25} />
              <AiFillGithub size={25} />
              <AiOutlineLinkedin size={25} />
              <AiOutlineInstagram size={25} />
            </div>
            <div
              className=" flex space-x-3 items-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img
                src="https://user-images.githubusercontent.com/99184393/232021800-8e2d8151-7484-451c-a194-ced6ab249b00.png"
                alt=""
                className="w-8"
              />
              <h1 className="font-semibold text-2xl leading-6 text-gray-900 dark:text-gray-100">
                Github Readme File Generator
              </h1>
            </div>
            <div className="flex justify-center gap-4 items-center">
              <FormGroup>
                <FormControlLabel
                  control={
                    <MaterialUISwitch
                      sx={{ m: 1 }}
                      defaultChecked={resolvedTheme === "light"}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={theme?.toLocaleUpperCase()}
                  value={resolvedTheme === "dark" ? "light" : "dark"}
                  onChange={(e: any) => setTheme(e.target.value)}
                  name="theme"
                />
              </FormGroup>
              {session ? (
                <div
                  className="flex justify-center items-center"
                  onClick={() => signOut()}
                >
                  <img
                    src={session.user.image!}
                    alt={session.user.name!}
                    className="w-8 rounded-full"
                  />
                </div>
              ) : (
                <div className="hidden sm:flex flex-row space-x-4">
                  <button
                    onClick={handleOpen}
                    className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>
            <div
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300  justify-center items-center sm:hidden cursor-pointer`}
            >
              {!show ? (
                <AiOutlineMenu size={25} onClick={() => setshow(!show)} />
              ) : (
                <AiOutlineCloseCircle
                  size={25}
                  onClick={() => setshow(!show)}
                />
              )}
            </div>
          </div>
          <div
            id="MobileNavigation"
            className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
          >
            <div className="flex flex-row items-center justify-center space-x-6">
              <CiTwitter size={25} />
              <AiFillGithub size={25} />
              <AiOutlineLinkedin size={25} />
              <AiOutlineInstagram size={25} />
            </div>
            {session ? (
              <div
                className="flex justify-center items-center"
                onClick={() => signOut()}
              >
                <img
                  src={session.user.image!}
                  alt={session.user.name!}
                  className="w-8 rounded-full"
                />
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
                <button
                  onClick={handleOpen}
                  className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
