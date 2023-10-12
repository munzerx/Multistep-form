import Image from "next/image";
import Personal from "./forms/Personal";
import PlanSelect from "./forms/PlanSelect";
import PickAddons from "./forms/PickAddons";
import FinishingUp from "./forms/FinishingUp";
import ThankYou from "./forms/ThankYou";

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <div className="fixed top-24 mt-2 w-11/12">
        <ThankYou />
      </div>
    </main>
  );
}
