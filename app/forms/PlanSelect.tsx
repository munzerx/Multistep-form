import React from "react";
import Image from "next/image";

import arcade from "@/public/icon-arcade.svg";
import advanced from "@/public/icon-advanced.svg";
import pro from "@/public/icon-pro.svg";

export default function PlanSelect() {
  return (
    <div className="flex flex-col bg-white rounded-md p-6 gap-4">
      <section className="flex flex-col text-left gap-3">
        <h1 className="text-blue-marine text-2xl font-bold">
          Select your plan
        </h1>
        <p className="text-gray-cool">
          You have the option of monthly or yearly billing.
        </p>
      </section>

      <form className="flex flex-col gap-3 text-xs text-blue-marine font-medium capitalize">
        <div className="flex flex-row gap-3 border bg-magnolia border-blue-purplish p-4 rounded-md">
          <Image
            src={arcade}
            alt="arcade"
            priority={false}
            placeholder="empty"
          />
          <section className="flex flex-col">
            <h2 className="text-base text-blue-marine font-medium">arcade</h2>
            <p className="text-gray-cool lowercase">$9/mo</p>
          </section>
        </div>
        <div className="flex flex-row gap-3 border border-gray-light p-4 rounded-md">
          <Image
            src={advanced}
            alt="arcade"
            priority={false}
            placeholder="empty"
          />
          <section className="flex flex-col">
            <h2 className="text-base text-blue-marine font-medium">arcade</h2>
            <p className="text-gray-cool lowercase">$12/mo</p>
          </section>
        </div>
        <div className="flex flex-row gap-3 border border-gray-light p-4 rounded-md">
          <Image src={pro} alt="arcade" priority={false} placeholder="empty" />
          <section className="flex flex-col">
            <h2 className="text-base text-blue-marine font-medium">arcade</h2>
            <p className="text-gray-cool lowercase">$15/mo</p>
          </section>
        </div>
        <div className="flex flex-row bg-alabaster rounded-md p-4 items-center">
          <p>monthly</p>
          <label className="switch relative inline-block w-14 h-9">
            <input type="checkbox" className="opacity-0 w-0 h-0" />
            <span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-strawberry-red transition before:h-7 before:w-7 before:left-1 before:right-1 before:bg-white"></span>
          </label>
          <p>yearly</p>
        </div>
      </form>
    </div>
  );
}
