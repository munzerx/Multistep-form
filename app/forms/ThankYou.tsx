import React from "react";
import Image from "next/image";

import tick from "@/public/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="flex flex-col bg-white rounded-md p-10 py-20 gap-4 items-center text-center">
      <Image src={tick} alt="Thank you" className="w-14"/>
      <section className="flex flex-col">
        <h2 className="text-2xl font-extrabold text-blue-marine">Thank you!</h2>
        <p className=" text-gray-cool">
          Thanks for confirming your subscription! We hope you have fun using
          our platform, If you ever need support, please feel free to email us
          at support@toremgaming.com.
        </p>
      </section>
    </div>
  );
}
