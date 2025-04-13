"use client";
import Form from "../../components/Form";
import { createJob } from "../../api/client";
import { useRouter } from "next/navigation";

export default function AddJob() {
  const router = useRouter();

  const fields = [
    { name: "id", label: "Job ID", required: true },
    { name: "title", label: "Job Title", required: true },
    { name: "description", label: "Job Description", required: true },
  ];

  const handleSubmit = async (data: {
    id: string;
    title: string;
    description: string;
  }) => {
    try {
      await createJob(data);
      router.push("/");
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl text-black font-bold mb-6">Add New Job</h1>
      <Form fields={fields} onSubmit={handleSubmit} submitText="Add Job" />
    </div>
  );
}
