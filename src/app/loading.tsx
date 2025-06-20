interface Props {
  message: string;
}

export default function Loading({ message }: Props) {
  return (
    <div className="flex justify-center items-center min-h-[150px] flex-col">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="ml-4 text-lg font-medium text-gray-700">{message}</p>
    </div>
  );
}
