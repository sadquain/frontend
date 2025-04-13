'use client';

import { useForm } from 'react-hook-form';

type FormField = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
};

type FormProps<T extends Record<string, any>> = {
  fields: FormField[];
  onSubmit: (data: T) => void;
  submitText: string;
};

export default function Form<T extends Record<string, any>>({
  fields,
  onSubmit,
  submitText,
}: FormProps<T>) {
  const { register, handleSubmit } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          <input
            {...register(field.name as any, { required: field.required })}
            type={field.type || 'text'}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
      ))}
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {submitText}
      </button>
    </form>
  );
}