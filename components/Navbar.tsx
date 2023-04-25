"use client";

import { authModelState } from "@/atom/authModalAtom";
import { firestore } from "@/clientApp";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [show, setshow] = useState(false);
  const [userCreates, setUserCreate] = useState<boolean>(false);
  const [modelState, setModelState] = useRecoilState(authModelState);

  const getUserData = async () => {
    if (session) {
      try {
        const docRef = doc(firestore, "users", session?.user?.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("User Already Created");
          setUserCreate(false);
        } else {
          setUserCreate(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else return;
  };

  const userCreate = async (session: Session) => {
    const userDocRef = doc(firestore, "readmeDoc", session?.user?.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(session)));
  };

  const handleOpen = () => {
    setModelState((prev) => ({
      ...prev,
      open: true,
    }));
  };

  useEffect(() => {
    getUserData();

    if (userCreates) {
      userCreate(session!);
    } else return;
  }, [session, firestore, userCreates]);

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
              <h1 className="font-semibold text-2xl leading-6 text-gray-300">
                Github Readme File Generator
              </h1>
            </div>
            <div className="flex justify-center gap-4 items-center">
              <button className="flex justify-center px-1 py-1 bg-gray-800 hover:bg-gray-600 border border-gray-500 items-center text-center rounded-lg gap-1 text-sm">
                <AiFillGithub size={15} />
                {`GitHub`}
              </button>
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
