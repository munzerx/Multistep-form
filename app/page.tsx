import Image from "next/image";
import Personal from "./forms/Personal";
import PlanSelect from "./forms/PlanSelect";

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <div className="fixed top-24 mt-2 w-5/6">
        <PlanSelect />
      </div>
    </main>
  );
}
