'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-[92vh] flex-col items-center justify-center">
      <div className="flex max-w-xl flex-col rounded-box border border-base-content bg-base-300 p-8 text-base-content">
        <h2 className="text-xl font-bold">Oh no!</h2>
        <p className="my-2">
          There was an issue with our storefront. This could be a temporary issue, please try your
          action again.
        </p>
        <button className="btn" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
