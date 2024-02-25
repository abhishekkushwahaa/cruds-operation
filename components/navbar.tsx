import { useState } from "react";
import { Button } from "./ui/button";
import Form from "./form";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  return (
    <nav className="flex justify-between items-center px-1 py-1">
      <Button
        className="mb-3 ml-3 flex justify-center items-center"
        variant="default"
        onClick={() => setShowForm(true)}
      >
        Add New User
      </Button>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </nav>
  );
}
