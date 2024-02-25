// sendmail.ts

export const sendMail = async (id: string, data: any) => {
  try {
    const res = await fetch(process.env.API_URL + `/api/user`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    return res.json();
  } catch (error) {
    console.error("Error sending mail:", error);
    throw error; // Propagate the error
  }
};
