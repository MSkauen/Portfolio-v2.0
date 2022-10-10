import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row maw-w-7xl
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 ml-3 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <div className="lg:space-y-10 sm:space-y-2">
          <div className="flex items-center space-x-5 justify-center py-2 md:py-1 lg:py-0">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="lg:text-2xl md:text-xl sm:text-sm">+47 454 76 628</p>
          </div>
          <div className="flex items-center space-x-5 justify-center py-2 md:py-1 lg:py-0">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="lg:text-2xl md:text-xl sm:text-sm">mathias.skauen.harestad@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center py-2 md:py-1 lg:py-0">
            <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="lg:text-2xl md:text-xl sm:text-sm">Furusetlia 23A</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-screen md:w-fit mx-auto px-10"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-fit"
              type="text"
            />

            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-fit"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
              {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
