"use client";

type Props = {};

function HowItWorks({}: Props) {
  return (
    <div className="overflow-y-hidden bg-gradient-to-r from-[#191a47] via-[#0d0d37] to-[#06375f] ">
      <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
        <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-100">
          How it works?
        </h1>
        <div className="md:mt-24 f-f-p">
          <div className="hidden md:flex justify-center w-full">
            <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
              <div aria-label="sign up" role="img">
                <img
                  className="focus:outline-none mt-10"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg"
                  alt="how it work"
                />
              </div>
              <div role="img">
                <img
                  className="focus:outline-none mt-24"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                  alt=""
                />
              </div>
              <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">
                  Create a Wallet
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">
                  Create a wallet by linking a payment method that you’re
                  comfortable with. Paypal, Visa and more{" "}
                </h2>
              </div>
              <div aria-label="transactions" role="img">
                <img
                  className="focus:outline-none mt-24"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg"
                  alt=""
                />
              </div>
              <img
                className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
              <div role="img">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                  alt=""
                />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">
                  SignUp for an Account
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                  Sign up on our website and opt for a program that suits you
                  the best .{" "}
                </h2>
              </div>
              <div aria-label="wallet" role="img">
                <img
                  className="focus:outline-none mt-32"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg"
                  alt=""
                />
              </div>
              <div role="img">
                <img
                  className="focus:outline-none mt-20"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                  alt=""
                />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">
                  Start your Transactions
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                  Start transactions right away. No more complicated process for
                  anything else.
                </h2>
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col items-center w-full">
            <img
              className="focus:outline-none my-10"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg"
              alt="how it work"
            />
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
              alt=""
            />
            <div className="mt-10">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold">
                SignUp for an Account
              </h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                Sign up on our website and opt for a program that suits you the
                best .
              </h2>
            </div>
            <img
              className="focus:outline-none my-10"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg"
              alt=""
            />
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
              alt=""
            />
            <div className="mt-10">
              <h1 className="text-xl tracking-wide text-center leading-5 font-bold">
                Create a Wallet
              </h1>
              <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">
                Create a wallet by linking a payment method that you’re
                comfortable with. Paypal, Visa and more
              </h2>
            </div>
            <img
              className="focus:outline-none my-10"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg"
              alt=""
            />
            <img
              // className
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
              alt=""
            />
            <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold">
                Start your Transactions
              </h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                Start transactions right away. No more complicated process for
                anything else.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
