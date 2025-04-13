// src/app/(main)/add-job/page.tsx
"use client";

import Form from "@/components/Form";
import { createCandidate } from "@/api/client";
import { useRouter } from "next/navigation";

export default function AddCandidatePage() {
  const router = useRouter();

  const fields = [
    { name: "id", label: "Candidate ID", required: true },
    { name: "name", label: "Candidate Name", required: true },
    { name: "bio", label: "Candidate Bio", required: true },
  ];

  const handleSubmit = async (data: {
    id: string;
    name: string;
    bio: string;
  }) => {
    try {
      await createCandidate(data);
      router.push("/");
    } catch (error) {
      console.error("Error creating candidate:", error);
      alert("Failed to create candidate");
    }
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold text-black mb-6">Add New Candidate</h1>
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Create Candidate"
      />
    </div>
  );
}
