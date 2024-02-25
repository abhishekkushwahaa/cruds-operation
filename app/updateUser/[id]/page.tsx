import UpdateUser from "@/components/updateUser";
import { emit } from "process";

const getUserById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditUder({ params }: { params: any }) {
  const { id } = params;
  const { user } = await getUserById(id);
  const { name, email, phone, hobbies } = user;

  return (
    <UpdateUser
      id={id}
      name={name}
      email={email}
      phone={phone}
      hobbies={hobbies}
    />
  );
}
