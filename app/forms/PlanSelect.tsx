import React from "react";
import Image from "next/image";
import { Switch } from "@/app/components/ui/switch";

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
            <p className="text-blue-marine lowercase">2 months free</p>
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
            <p className="text-blue-marine lowercase">2 months free</p>
          </section>
        </div>
        <div className="flex flex-row gap-3 border border-gray-light p-4 rounded-md">
          <Image src={pro} alt="arcade" priority={false} placeholder="empty" />
          <section className="flex flex-col">
            <h2 className="text-base text-blue-marine font-medium">arcade</h2>
            <p className="text-gray-cool lowercase">$15/mo</p>
            <p className="text-blue-marine lowercase">2 months free</p>
          </section>
        </div>
        <div className="flex flex-row gap-4 bg-alabaster rounded-md p-4 items-center justify-center">
          <p>monthly</p>
          <Switch />
          <p>yearly</p>
        </div>
      </form>
    </div>
  );
}
