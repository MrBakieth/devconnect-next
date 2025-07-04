interface Props {
  name: string;
  description: string;
  date: string;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  onChange: (field: string, value: string) => void;
}

export default function ProjectForm({
  name,
  description,
  date,
  onSubmit,
  onChange,
  onCancel,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h1 className="text-xl flex justify-center items-center font-medium">
          Add A Project
        </h1>
        <form
          onSubmit={onSubmit}
          className="space-y-4 mb-6 p-4 rounded flex flex-col gap-2"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium text-gray-700 mb-2 ml-1 sm:ml-0"
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
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-md font-medium text-gray-700 mb-2 ml-1 sm:ml-0"
            >
              Description:
            </label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              className="w-full p-2 border rounded"
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("description", e.target.value)
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-md font-medium text-gray-700 mb-2 ml-1 sm:ml-0"
            >
              Date:
            </label>
            <input
              id="date"
              type="date"
              placeholder="Date"
              className="w-full p-2 border rounded"
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("date", e.target.value)
              }
              required
            />
          </div>
          <div className="space-x-4 flex flex-col sm:flex-row gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-2 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto"
            >
              Submit
            </button>
            <button
              onClick={onCancel}
              className="bg-red-600 text-white px-2 py-2 rounded hover:bg-red-700 transition w-full sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
