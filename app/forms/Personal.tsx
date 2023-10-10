import React from "react";

export default function Personal() {
  return (
    <div className="flex flex-col bg-white rounded-md p-5 gap-4">
      <section className="flex flex-col text-left gap-4">
        <h1 className="text-blue-marine text-2xl font-bold">Personal info</h1>
        <p className="text-gray-cool">
          Please provide your name, email address, and phone number.
        </p>
      </section>

      <form className="flex flex-col gap-6 text-xs text-blue-marine font-medium capitalize">
        <div>
          <label>name</label>
          <input
            className="border border-gray-light rounded w-full h-9 p-3 text-sm text-blue-marine"
            placeholder="e.g. Stephen King"
          ></input>
        </div>
        <div>
          <label>email address</label>
          <input
            className="border border-gray-light rounded w-full h-9 p-3 text-sm text-blue-marine"
            placeholder="e.g. stephenking@lorem.com"
          ></input>
        </div>
        <div>
          <label>phone number</label>
          <input
            className="border border-gray-light rounded w-full h-9 p-3 text-sm text-blue-marine"
            placeholder="e.g. +1 234 567 890"
          ></input>
        </div>
      </form>
    </div>
  );
}
