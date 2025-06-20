interface Props {
  title: string;
  name: string;
  email: string;
  job: string;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  onChange: (field: string, value: string) => void;
}

export default function EditUser({
  title,
  name,
  email,
  job,
  onSubmit,
  onCancel,
  onChange,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h1 className="text-xl flex justify-center items-center font-medium">
          {title}
        </h1>
        <form onSubmit={onSubmit} className="space-y-4 mb-6 p-4 rounded">
          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium text-gray-700 mb-2 ml-1"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("name", e.target.value)
              }
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700 mb-2 ml-1"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("email", e.target.value)
              }
            />
          </div>
          <div>
            <label
              htmlFor="job"
              className="block text-md font-medium text-gray-700 mb-2 ml-1"
            >
              Job:
            </label>
            <input
              id="job"
              type="text"
              placeholder="Job"
              className="w-full p-2 border rounded"
              value={job}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("job", e.target.value)
              }
            />
          </div>

          <div className="space-x-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-2 py-2 rounded hover:bg-green-700 transition cursor-pointer"
            >
              Update
            </button>
            <button
              onClick={onCancel}
              className="bg-red-600 text-white px-2 py-2 rounded hover:bg-red-700 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
