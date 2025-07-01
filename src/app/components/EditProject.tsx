interface Props {
  title: string;
  name: string;
  description: string;
  date: string;
  onCancel: () => void;
  onChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function EditProject({
  title,
  name,
  description,
  date,
  onCancel,
  onChange,
  onSubmit,
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
              htmlFor="description"
              className="block text-md font-medium text-gray-700 mb-2 ml-1"
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
            />
          </div>
          <div>
            <label
              htmlFor="Date"
              className="block text-md font-medium text-gray-700 mb-2 ml-1"
            >
              Date:
            </label>
            <input
              id="Date"
              type="date"
              placeholder="Date"
              className="w-full p-2 border rounded"
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange("date", e.target.value)
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
