
import Link from 'next/link';

export const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center gap-3 mt-10">
      {currentPage > 1 && (
        <Link href={`/page/${currentPage - 1}`}>
          <span className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Prev</span>
        </Link>
      )}
      <span className="px-4 py-2 bg-pink-600 text-white rounded">{currentPage}</span>
      {currentPage < totalPages && (
        <Link href={`/page/${currentPage + 1}`}>
          <span className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">Next</span>
        </Link>
      )}
    </div>
  );
};

