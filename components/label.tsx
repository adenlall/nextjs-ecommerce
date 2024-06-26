'use client';
import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  sm,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  sm?: boolean | null;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx(
        `absolute bottom-0 left-0 flex w-full ${sm ? '' : 'px-4 pb-4'} @container/label`,
        {
          'lg:px-20 lg:pb-[35%]': position === 'center'
        }
      )}
    >
      <div
        className={`flex ${sm ? 'xl:flex-col xl:space-y-1' : ''} items-center rounded-box border bg-base-100/70 p-1 text-xs font-semibold text-base-content backdrop-blur-md`}
      >
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none rounded-box bg-primary p-2 text-primary-content"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
