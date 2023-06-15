"use client";

import { useState } from "react";

import BodyContent from "./BodyContent";
import ClientOnly from "./ClientOnly";
import HomeComponents from "./HomeComponents";
import ProfileContent from "./profile/ProfileContent";

type Props = {};

function ClientController({}: Props) {
  const [isShow, setIsShow] = useState(true);
  const [path, setPath] = useState("home");

  return (
    <>
      {/*  {path === "home" ? (
        <HomeComponents
          isShow={isShow}
          setIsShow={setIsShow}
          setPath={setPath}
        />
      ) : path === "profile" ? (
        <ClientOnly>
          <ProfileContent />
        </ClientOnly>
      ) : (
        path === "repo" && (
          <ClientOnly>
            <BodyContent />
          </ClientOnly>
        )
      )} */}
      <ClientOnly>
        <ProfileContent />
      </ClientOnly>
    </>
  );
}

export default ClientController;
