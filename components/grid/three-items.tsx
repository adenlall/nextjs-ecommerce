import { GridTileImage } from 'components/grid/tile';
import Slider from 'components/slider';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({ item, priority }: { item: Product; priority?: boolean }) {
  return (
    <div className={'md:col-span-2 md:row-span-1'}>
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item?.handle}`}
      >
        <GridTileImage
          src={item?.featuredImage?.url}
          fill
          sizes={'(min-width: 768px) 33vw, 100vw'}
          priority={priority}
          alt={item?.title}
          label={{
            position: 'bottom',
            title: item?.title as string,
            amount: item?.priceRange?.maxVariantPrice?.amount,
            currencyCode: item?.priceRange?.maxVariantPrice?.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'beta'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  return (
    <Slider
      data={homepageItems?.map((item) => (
        <ThreeItemGridItem item={item} key={crypto.randomUUID()} />
      ))}
    />
  );
}
