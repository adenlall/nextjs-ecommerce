import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <div className="container prose m-auto my-8 w-full rounded-box border border-base-content bg-base-200 p-5 text-center">
        <img src="/brand/header-t2-light.svg" className="m-auto -mb-8 w-1/2" />
        <h1>
          shop anything from a store <br />
          that you trust
        </h1>
      </div>
      <Carousel />
      <Footer />
    </>
  );
}
