"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const Form: React.FC<MyComponentProps> = ({ onClose }) => {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [save, setSave] = useState<formType>({
    name: "",
    email: "",
    phone: "",
    hobbies: "",
  });

  const formRef = useRef(null);

  const closeForm = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === formRef.current) {
      onClose();
    }
  };

  const submit = async (e: React.FormEvent) => {
    // e.preventDefault();

    try {
      const { name, email, phone, hobbies } = save;
      const res = await fetch(process.env.API_URL + `/api/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, hobbies }),
      });

      if (res) {
        const responseData = res.headers
          .get("Content-Type")
          ?.includes("application/json")
          ? await res.json()
          : null;
        console.log("User created successfully");
        setSaving(true);
        onClose();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={formRef}
      onClick={closeForm}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[500px] p-5 pt-2 rounded-md shadow-md bg-muted">
        <X
          className="ml-[450px] cursor-pointer hover:text-zinc-500"
          size={20}
          onClick={onClose}
        />
        <h1 className="text-xl font-medium flex justify-center items-center">
          User&rsquo;s Data
        </h1>
        <form onSubmit={submit} className="text-black">
          <div className="mt-5">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              onChange={(e) => setSave({ ...save, name: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              onChange={(e) => setSave({ ...save, email: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <input
              type="tel"
              id="tel"
              name="tel"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
              onChange={(e) => setSave({ ...save, phone: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <textarea
              id="hobbies"
              name="hobbies"
              className="w-full h-full p-2 border border-gray-300 rounded-md"
              placeholder="What are your hobbies?"
              onChange={(e) => setSave({ ...save, hobbies: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="inline-flex mt-5 w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
