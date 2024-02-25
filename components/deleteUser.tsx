"use client";

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteUser = ({ id }: { id: any }) => {
  const router = useRouter();
  const DeleteUser = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(process.env.API_URL + `/api/users?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={DeleteUser} className="text-red-400">
      <Trash size={18} />
    </button>
  );
};

export default DeleteUser;
