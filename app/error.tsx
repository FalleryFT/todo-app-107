'use client';

export default function Error({
 reset,}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Something went wrong!</h2>
            <button
                onClick={() => reset()}
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Try again
            </button>
        </div>
    );
}