"use client";
import Navbar from "@/components/navbar";
import UserLists from "../components/table";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center p-5">
        <h1 className="font-semibold">CRUDS Operations</h1>
      </div>
      <Navbar />
      <UserLists />
    </>
  );
}
