interface Props {
  message: string;
}

export default function Loading({ message }: Props) {
  return (
    <p className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 font-bold text-2xl">
      {message}
    </p>
  );
}
