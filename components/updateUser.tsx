"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateUser({
  name,
  email,
  phone,
  hobbies,
  id,
}: {
  name: any;
  email: any;
  phone: any;
  hobbies: any;
  id: any;
}) {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newHobbies, setNewHobbies] = useState(hobbies);

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await fetch(process.env.API_URL + `/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          email: newEmail,
          phone: newPhone,
          hobbies: newHobbies,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[500px] p-5 pt-2 rounded-md shadow-md bg-muted">
        <h1 className="text-xl font-bold mb-5 mt-3 text-center">Update User</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-muted">
          <input
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            className="border border-slate-500 px-8 py-2 rounded-sm"
            type="text"
            placeholder="Enter your Name"
          />

          <input
            onChange={(e) => setNewEmail(e.target.value)}
            value={newEmail}
            className="border border-slate-500 px-8 py-2 rounded-sm"
            type="email"
            placeholder="Enter your Email"
          />

          <input
            onChange={(e) => setNewPhone(e.target.value)}
            value={newPhone}
            className="border border-slate-500 px-8 py-2 rounded-sm"
            type="tel"
            placeholder="Enter your Phone"
          />

          <input
            onChange={(e) => setNewHobbies(e.target.value)}
            value={newHobbies}
            className="border border-slate-500 px-8 py-2 rounded-sm"
            type="text"
            placeholder="Enter your Hobbies"
          />
          <button className="bg-green-600 font-medium rounded-md text-white py-2 px-3 w-fit">
            Update Topic
          </button>
        </form>
      </div>
    </div>
  );
}
