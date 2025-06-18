interface Props {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  disablePrev: boolean;
}

export default function Pagination({
  currentPage,
  onPageChange,
  disablePrev,
}: Props) {
  return (
    <div className="flex justify-center items-center p-3 mt-12">
      <button
        disabled={disablePrev}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <button
        onClick={() => onPageChange(currentPage)}
        className="px-3 py-1 font-bold"
      >
        {currentPage}
      </button>
      <button
        className="px-3 py-1"
        onClick={() => onPageChange(currentPage + 1)}
      >
        {currentPage + 1}
      </button>
      <button
        onClick={() => onPageChange(currentPage + 2)}
        className="px-3 py-1"
      >
        {currentPage + 2}
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
}
