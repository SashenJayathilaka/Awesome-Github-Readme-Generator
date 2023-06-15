/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { gitHubDetails } from "@/atom/gitHubDetails";
import { useEffect, useState } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { useRecoilState } from "recoil";

import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function Contact({}: Props) {
  const [details, setDetails] = useRecoilState(gitHubDetails);

  const [contactValues, setContactsValue] = useState({
    name: details.name,
    twitter: details.twitter,
    email: details.email,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactsValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const updateState = () => {
    if (contactValues) {
      setDetails((ls) => ({
        ...ls,
        name: contactValues.name,
        email: contactValues.email,
        twitter: contactValues.twitter,
      }));
    }
  };

  useEffect(() => {
    updateState();
  }, [contactValues]);

  return (
    <div className="py-8">
      <Heading label="Contact" icon={FaRegHandshake} />
      <div className="flex flex-col justify-between gap-4">
        <div className="py-4 flex justify-between gap-4">
          <InputField
            onChange={onChange}
            label="Your Name"
            type="text"
            name="name"
            value={details.name}
          />
          <InputField
            onChange={onChange}
            label="Your Twitter Profile Link"
            type="text"
            name="twitter"
            value={details.twitter}
          />
          <InputField
            onChange={onChange}
            label="Your Email Address"
            type="text"
            name="email"
            value={details.email}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
