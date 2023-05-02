"use client";

import { AiFillGithub } from "react-icons/ai";

type Props = {};

function ProfileFeedbackForm({}: Props) {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Support
          </h2>
          <div className="dark:text-gray-400">
            Are you using the tool and happy with it to create your GitHub
            Repository?
          </div>
        </div>
        <img
          src="https://github.com/teamedwardforever/awesome-readme-template-1/blob/main/assets/134278937-ed33e623-b833-4565-945d-29fa43ea0b7c.gif?raw=true"
          alt=""
          className="w-[300px]"
        />
      </div>
      <div className="space-y-6 ng-untouched ng-pristine ng-valid items-center flex justify-center">
        <div className="flex flex-col items-center">
          <div>
            <a
              href="https://github.com/SashenJayathilaka/Awesome-Github-Readme-Generator.git"
              className="flex justify-center px-4 py-4 bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 border border-gray-500 items-center text-center font-medium rounded-lg gap-4 cursor-pointer"
            >
              <AiFillGithub size={25} />
              {`Please Don't Forget to Star This Repository`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileFeedbackForm;
