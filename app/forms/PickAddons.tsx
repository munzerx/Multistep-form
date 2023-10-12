import React from "react";

export default function PickAddons() {
  return (
    <div className="flex flex-col bg-white rounded-md p-5 gap-4">
      <section className="flex flex-col text-left gap-4">
        <h1 className="text-blue-marine text-2xl font-extrabold">Pick add-ons</h1>
        <p className="text-gray-cool">
          Add-ons help enhance your gaming experience
        </p>
      </section>

      <form className="flex flex-col gap-3 text-blue-marine">





        <div className="flex flex-row gap-4 border bg-magnolia border-blue-purplish p-3 rounded-md items-center">
          <input type="checkbox" className="h-5 w-5 bg-blue-purplish"></input>
          <section className="flex flex-col">
            <h2 className=" text-blue-marine text-sm font-semibold">
              Online service
            </h2>
            <p className="text-gray-cool text-xs">Access to multiplayer games</p>
          </section>
          <p className="text-blue-purplish text-xs self-center lowercase ml-auto">+$1/mo</p>
        </div>






        <div className="flex flex-row gap-4 border bg-magnolia border-blue-purplish p-3 rounded-md items-center">
          <input type="checkbox" className="h-5 w-5 p-1 bg-blue-purplish"></input>
          <section className="flex flex-col">
            <h2 className="text-blue-marine text-sm font-semibold">
              Larger storage
            </h2>
            <p className="text-gray-cool text-xs">Extra 1TB of cloud save</p>
          </section>
          <p className="text-blue-purplish text-xs self-center lowercase ml-auto">+$2/mo</p>
        </div>


        <div className="flex flex-row gap-4 border border-gray-light p-3 rounded-md items-center">
          <input type="checkbox" className="h-5 w-5 p-1 bg-blue-purplish"></input>
          <section className="flex flex-col">
            <h2 className="text-blue-marine text-sm font-semibold">
              Customizable profile
            </h2>
            <p className="text-gray-cool text-xs">
              Custom theme on your profile
            </p>
          </section>
          <p className="text-blue-purplish text-xs self-center lowercase ml-auto">+$2/mo</p>
        </div>
      </form>
    </div>
  );
}
