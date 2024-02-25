import DeleteUser from "@/components/deleteUser";
import SendUser from "@/components/sendUser";
import sendUser from "@/components/sendUser";
import { Edit } from "lucide-react";
import Link from "next/link";

const getUsers = async () => {
  try {
    const res = await fetch(process.env.API_URL + `/api/user`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { users } = await getUsers();

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white font-[sans-serif]">
          <thead className="bg-zinc-800 whitespace-nowrap">
            <tr>
              <th className="pl-6 w-8">
                <input id="checkbox" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox"
                  className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-white"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </label>
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                User ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Hobbies
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Actions
              </th>
            </tr>
          </thead>
          {users.map((u: any) => (
            <tbody className="whitespace-nowrap" key={u._id}>
              <tr className="even:bg-blue-50">
                <td className="pl-6 w-8">
                  <input
                    id="checkbox1"
                    type="checkbox"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </td>
                <td className="px-6 py-4 text-sm">{u._id}</td>
                <td className="px-6 py-4 text-sm">{u.name || "Unknown"}</td>
                <td className="px-6 py-4 text-sm">{u.email || "Null"}</td>
                <td className="px-6 py-4 text-sm">{u.phone || "Null"}</td>
                <td className="px-6 py-4 text-sm">{u.hobbies || "Nothing"}</td>
                <td className="px-6 py-4 flex gap-2">
                  <DeleteUser id={u._id} />
                  <Link href={`/updateUser/${u._id}`}>
                    <Edit size={18} />
                  </Link>
                  <SendUser id={u._id} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
