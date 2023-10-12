import { Divide } from "lucide-react";
import React from "react";

export default function FinishingUp() {
  return (
    <div className="flex flex-col bg-white rounded-md p-5 gap-4">
      <section className="flex flex-col text-left gap-4">
        <h1 className="text-blue-marine text-2xl font-extrabold">
          Finishing up
        </h1>
        <p className="text-gray-cool">
          Double-check everything looks OK before confirming.
        </p>
      </section>

      <div className="flex flex-col gap-4 bg-alabaster  p-3 rounded-md items-center">
        <div className="flex flex-row justify-evenly w-full">
          <section className="flex flex-col">
            <h2 className=" text-blue-marine text-sm font-semibold">
              Arcade (Monthly)
            </h2>
            <p className="text-gray-cool text-sm underline">Change</p>
          </section>
          <p className="text-blue-marine text-sm font-extrabold self-center lowercase ml-auto">
            +$1/mo
          </p>
        </div>
        <hr className="border w-full"></hr>
        <section className="flex flex-row justify-between w-full">
          <p className="text-gray-cool text-sm ">Online service</p>
          <p className="text-blue-marine text-sm font-bold self-center lowercase ml-auto">
            +$1/mo
          </p>
        </section>
        <section className="flex flex-row justify-between w-full">
          <p className="text-gray-cool text-sm ">Online service</p>
          <p className="text-blue-marine text-sm font-bold self-center lowercase ml-auto">
            +$1/mo
          </p>
        </section>
      </div>
      <section className="flex flex-row justify-between w-full px-3">
        <p className="text-gray-cool text-sm ">Total (per month)</p>
        <p className="text-blue-purplish text-lg font-bold self-center lowercase ml-auto">
          +$1/mo
        </p>
      </section>
    </div>
  );
}
