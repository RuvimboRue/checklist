import { Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom,#90EE90, #006400)", // Dark green to light green gradient
      }}
    >
      <h1
        className="text-white text-4xl font-extrabold"
        style={{
          fontSize: "3rem", // Increased font size
        }}
      >
        AFC HOLDINGS CHECKLIST
      </h1>
      <div className="justify-between p-14">
        <ul>
          <li>
            <Link href="/systems" className="text-white sm:text-lg transition-all duration-500 font-medium hover:text-black justify-between">
              Systems Administration
            </Link>
          </li><Spacer/>
          <li>
            <Link href="#" className="text-white sm:text-lg transition-all duration-500 font-medium hover:text-black justify-between">
              Core Systems Administration
            </Link><Spacer/>
          </li>
          <li>
            <Link href="#" className="text-white sm:text-lg transition-all duration-500 font-medium hover:text-black justify-between">
              Database Administration
            </Link><Spacer/>
          </li>
        </ul>
      </div>
    </main>
  );
}