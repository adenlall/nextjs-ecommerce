import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="btn relative">
      <ShoppingCartIcon
        className={clsx('hover:scale-130 h-4 transition-all ease-in-out ', className)}
      />
      {quantity ? (
        <div className="badge badge-primary absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-box">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
