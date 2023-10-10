import React from "react";

export default function PageSelector() {
  return (
    <section className="fixed top-10 flex flex-row justify-around w-52  font-medium">
      <button className="rounded-full border-white py-1 px-3 bg-blue-light text-blue-marine">
        1
      </button>
      <button className="rounded-full border-white px-3 border text-white">
        2
      </button>
      <button className="rounded-full border-white px-3 border text-white">
        3
      </button>
      <button className="rounded-full border-white px-3 border text-white">
        4
      </button>
    </section>
  );
}
