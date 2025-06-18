import { User } from "@/app/type/user";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  return (
    <ul className="flex flex-col space-y-4 items-center">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex justify-between w-4xl border-b border-gray-300 shadow-lg p-3 rounded bg-white"
        >
          <div className="flex flex-col">
            <p className="text-lg">
              <strong>Name: </strong>
              {user.name}
            </p>
            <p className="text-lg">
              <strong>E-Mail: </strong>
              {user.email}
            </p>
            <p className="text-lg">
              <strong>Job: </strong>
              {user.job}
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              className="text-indigo-500 hover:underline text-lg"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline text-lg"
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
