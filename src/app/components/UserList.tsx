import { User } from "@/app/type/user";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg">No user found.</p>
        <p className="text-lg">Please add a user. </p>
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-4 w-full">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex flex-col sm:flex-row justify-between sm:items-center border border-gray-300 shadow-md rounded-lg bg-white p-4 gap-2"
        >
          <div className="flex flex-col gap-1 text-base sm:text-lg w-full justify-start">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Job:</strong> {user.job}
            </p>
          </div>
          <div className="flex mt-4 sm:mt-0 sm:ml-6 gap-4 justify-end">
            <button
              className="text-indigo-600 hover:underline text-base sm:text-lg cursor-pointer"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>
            <button
              className="text-red-600 hover:underline text-base sm:text-lg cursor-pointer"
              onClick={() => onDelete(user)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
