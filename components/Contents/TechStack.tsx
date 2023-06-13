"use client";

import { gitRepoDetails } from "@/atom/repositoryAtom";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { useCallback, useEffect, useState } from "react";
import { FaChalkboardTeacher, FaDocker } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { useRecoilState } from "recoil";

import Heading from "../Heading";
import Stack from "../Stack";

type Props = {};

function TechStack({}: Props) {
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitRepoDetails);
  const [techStackValue, setTechStackValue] = useState({
    clientName: "",
    clientUrl: "",
    serverName: "",
    serverUrl: "",
    databaseName: "",
    databaseUrl: "",
    devOpsName: "",
    devOpsUrl: "",
  });
  const [listOfClient, setListOfClient] = useState([]);
  const [listOfServer, setListOfServer] = useState([]);
  const [listOfDatabase, setListOfDatabase] = useState([]);
  const [listOfDevOps, setListOfDevOps] = useState([]);
  const [currentStateLabel, setCurrentStateLabel] = useState("");

  const onChangeTechStackValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTechStackValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onAddValue = (
    event: React.FormEvent<HTMLFormElement>,
    strandedLabel: string
  ) => {
    event.preventDefault();

    const clientName = techStackValue.clientName;
    const clientUrl = techStackValue.clientUrl;
    const serverName = techStackValue.serverName;
    const serverUrl = techStackValue.serverUrl;
    const databaseName = techStackValue.databaseName;
    const databaseUrl = techStackValue.databaseUrl;
    const devOpsName = techStackValue.devOpsName;
    const devOpsUrl = techStackValue.devOpsUrl;

    const currentClient = gitHubTechStack.client;
    const currentName = gitHubTechStack.server;
    const currentDb = gitHubTechStack.database;
    const currentDevOp = gitHubTechStack.devOps;

    setCurrentStateLabel(strandedLabel);

    if (clientName && strandedLabel === "client") {
      const element = { clientName, clientUrl };
      setListOfClient((ls) => [...ls, ...currentClient, element] as any);
      setTechStackValue((prev) => ({
        ...prev,
        clientName: "",
        clientUrl: "",
      }));
    } else if (serverName && strandedLabel === "server") {
      const element = { serverName, serverUrl };
      setListOfServer((ls) => [...ls, ...currentName, element] as any);
      setTechStackValue((prev) => ({
        ...prev,
        serverName: "",
        serverUrl: "",
      }));
    } else if (databaseName && strandedLabel === "database") {
      const element = { databaseName, databaseUrl };
      setListOfDatabase((ls) => [...ls, ...currentDb, element] as any);
      setTechStackValue((prev) => ({
        ...prev,
        databaseName: "",
        databaseUrl: "",
      }));
    } else if (devOpsName && strandedLabel === "devOps") {
      const element = { devOpsName, devOpsUrl };
      setListOfDevOps((ls) => [...ls, ...currentDevOp, element] as any);
      setTechStackValue((prev) => ({
        ...prev,
        devOpsName: "",
        devOpsUrl: "",
      }));
    }
  };

  const updateStateValue = useCallback(
    (strandedLabel: string) => {
      if (listOfClient && strandedLabel === "client") {
        const unique = listOfClient.filter(onlyUnique).flat();

        setGitHubTechStack((prev) => ({
          ...prev,
          client: unique,
        }));
      } else if (listOfServer && strandedLabel === "server") {
        const unique = listOfServer.filter(onlyUnique).flat();

        setGitHubTechStack((prev) => ({
          ...prev,
          server: unique,
        }));
      } else if (listOfDatabase && strandedLabel === "database") {
        const unique = listOfDatabase.filter(onlyUnique).flat();

        setGitHubTechStack((prev) => ({
          ...prev,
          database: unique,
        }));
      } else if (listOfDevOps && strandedLabel === "devOps") {
        const unique = listOfDevOps.filter(onlyUnique).flat();

        setGitHubTechStack((prev) => ({
          ...prev,
          devOps: unique,
        }));
      }
    },
    [
      listOfClient,
      listOfDatabase,
      listOfDevOps,
      listOfServer,
      setGitHubTechStack,
    ]
  );

  const removeElement = useCallback(
    (label: any, category: string) => {
      if (category === "client") {
        const removeCurrentState = listOfClient.filter(
          (element: any) => element.clientName !== label.clientName
        );
        setListOfClient(removeCurrentState);

        const removeItem = gitHubTechStack.client.filter(
          (element: any) => element.clientName !== label.clientName
        );

        setGitHubTechStack((prev) => ({
          ...prev,
          client: removeItem,
        }));
      } else if (category === "server") {
        const removeCurrentState = listOfServer.filter(
          (element: any) => element.serverName !== label.serverName
        );
        setListOfServer(removeCurrentState);

        const removeItem = gitHubTechStack.server.filter(
          (element: any) => element.serverName !== label.serverName
        );

        setGitHubTechStack((prev) => ({
          ...prev,
          server: removeItem,
        }));
      } else if (category === "database") {
        const removeCurrentState = listOfDatabase.filter(
          (element: any) => element.databaseName !== label.databaseName
        );
        setListOfDatabase(removeCurrentState);
        const removeItem = gitHubTechStack.database.filter(
          (element: any) => element.databaseName !== label.databaseName
        );
        setGitHubTechStack((prev) => ({
          ...prev,
          database: removeItem,
        }));
      } else if (category === "devOps") {
        const removeCurrentState = listOfDevOps.filter(
          (element: any) => element.devOpsName !== label.devOpsName
        );
        setListOfDevOps(removeCurrentState);

        const removeItem = gitHubTechStack.devOps.filter(
          (element: any) => element.devOpsName !== label.devOpsName
        );

        setGitHubTechStack((prev) => ({
          ...prev,
          devOps: removeItem,
        }));
      }
    },
    [
      gitHubTechStack.client,
      gitHubTechStack.database,
      gitHubTechStack.devOps,
      gitHubTechStack.server,
      listOfClient,
      listOfDatabase,
      listOfDevOps,
      listOfServer,
      setGitHubTechStack,
    ]
  );

  useEffect(() => {
    updateStateValue(currentStateLabel);
  }, [
    listOfClient,
    listOfServer,
    listOfDatabase,
    listOfDevOps,
    currentStateLabel,
    updateStateValue,
  ]);

  return (
    <div className="py-8">
      <Heading label="Tech Stack" icon={FaChalkboardTeacher} />
      <div className="flex flex-col py-4">
        <Stack
          icon={TbBrandGolang}
          label="Client Name"
          name="clientName"
          type="text"
          stackValue="Client"
          secondLabel="Client Url"
          secondName="clientUrl"
          strandedLabel="client"
          onChange={onChangeTechStackValue}
          onAddValue={onAddValue}
          value={techStackValue.clientName}
          urlValue={techStackValue.clientUrl}
          gitHubTechStack={gitHubTechStack.client}
          removeElement={removeElement}
        />
        <Stack
          icon={GrGraphQl}
          label="Server Name"
          name="serverName"
          type="text"
          stackValue="Server"
          secondLabel="Server Url"
          secondName="serverUrl"
          strandedLabel="server"
          onChange={onChangeTechStackValue}
          onAddValue={onAddValue}
          value={techStackValue.serverName}
          urlValue={techStackValue.serverUrl}
          gitHubTechStack={gitHubTechStack.server}
          removeElement={removeElement}
        />
        <Stack
          icon={SiMongodb}
          label="Database Name"
          name="databaseName"
          type="text"
          stackValue="Database"
          secondLabel="Database Url"
          secondName="databaseUrl"
          strandedLabel="database"
          onChange={onChangeTechStackValue}
          onAddValue={onAddValue}
          value={techStackValue.databaseName}
          urlValue={techStackValue.databaseUrl}
          gitHubTechStack={gitHubTechStack.database}
          removeElement={removeElement}
        />
        <Stack
          icon={FaDocker}
          label="DevOps Name"
          name="devOpsName"
          type="text"
          stackValue="DevOps"
          secondLabel="DevOps Url"
          secondName="devOpsUrl"
          strandedLabel="devOps"
          onChange={onChangeTechStackValue}
          onAddValue={onAddValue}
          value={techStackValue.devOpsName}
          urlValue={techStackValue.devOpsUrl}
          gitHubTechStack={gitHubTechStack.devOps}
          removeElement={removeElement}
        />
      </div>
    </div>
  );
}

export default TechStack;
