import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreateNew from "./CreateNew";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

type FormValues = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;
  companySlogan: string;
  companyStrategy: string;
};

function NewForm() {
  const [submit, setSubmit] = useState(true);
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, reset } = form;

  const onSubmit = (data: FormValues) => {
    createNewUser(data);
    console.log("CREATING NEW USER");
  };
  const toggleClicked = () => setSubmit((value) => !value);

  const createNewUser = async ({
    name,
    username,
    email,
    phone,
    website,
    companyName,
    companySlogan,
    companyStrategy,
  }: FormValues) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: { name },
        username: { username },
        email: { email },
        phone: { phone },
        website: { website },
        companyName: { companyName },
        companySlogan: { companySlogan },
        companyStrategy: { companyStrategy },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();
    setSubmit((value) => !value);
  };

  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-name"
              type="text"
              placeholder="Jane"
              {...register("name")}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Username
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-username"
              type="text"
              placeholder="Jane123"
              {...register("username")}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Jane123@gmail.com"
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 my-2 md:mb-0">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="text"
              placeholder="(+44) 5555-555555"
              {...register("phone")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 my-2 md:mb-0">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Website
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-website"
              type="text"
              placeholder="www.jsltd.com"
              {...register("website")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 my-2 md:mb-0">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Company Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-name"
              type="text"
              placeholder="Jane & Sons Ltd"
              {...register("companyName")}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 my-2 md:mb-0">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Company Slogan
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-slogan"
              type="text"
              placeholder="Just do it!"
              {...register("companySlogan")}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 my-2 md:mb-0">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Company Strategy
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-name"
              type="text"
              placeholder="Providing services to people"
              {...register("companyStrategy")}
            />
          </div>
        </div>
        {submit ? (
          <div className="mt-5 p-3 w-[70%] mx-auto text-center  bg-[#153b4f] rounded-xl cursor-pointer hover:bg-[#ffb703] hover:text-[#023047]">
            <button>Submit</button>
          </div>
        ) : (
          <>
            <div className="mt-5 p-3 w-[70%] mx-auto text-center rounded-xl bg-[#56ab91] text-[#023047]">
              <button>Done!</button>
            </div>
            <div className="mt-2 p-3 w-[20%] mx-auto text-center rounded-xl">
              <button
                className="hover:bg-white"
                type="button"
                onClick={() => {
                  reset();
                  toggleClicked;
                }}
              >
                {" "}
                <ArrowPathIcon className="h-6 text-white hover:text-[#023047]" />
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default NewForm;
