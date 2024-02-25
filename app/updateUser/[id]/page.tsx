import UpdateUser from "@/components/updateUser";

const getUserById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditUser({ params }: { params: any }) {
  try {
    const { id } = params;
    const userData = await getUserById(id);

    if (!userData || !userData.user) {
      throw new Error("User data not found");
    }

    const { name, email, phone, hobbies } = userData.user;

    return (
      <UpdateUser
        id={id}
        name={name}
        email={email}
        phone={phone}
        hobbies={hobbies}
      />
    );
  } catch (error) {
    console.error(error);
  }
}
