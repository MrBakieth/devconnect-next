interface Props {
  error: string;
}
export default function Failed({ error }: Props) {
  return (
    <p className="text-red-500 fixed inset-0 bg-black/30 flex items-center justify-center z-50 font-bold text-2xl">
      Error: {error}
    </p>
  );
}
