"use client";

import { sendMail } from "@/lib/sendmail";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";

const SendUser = ({ id }: { id: any }) => {
  const router = useRouter();
  const SendUser = async () => {
    const confirmed = confirm("Are you sure to send Data?");

    if (confirmed) {
      try {
        const res = await sendMail(id, { message: "Hello" });

        if (res) {
          router.refresh();
          console.log("Email sent successfully");
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <button onClick={SendUser} className="text-green-500">
      <Send size={18} />
    </button>
  );
};

export default SendUser;
