import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'Shop digital solutions built by our team that fit your needs, with a 100% guarantee.',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/brand/banner.svg',
        alt: 'website banner'
      }
    ]
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="mb-8 flex flex-col space-y-8 xl:flex-row xl:items-stretch xl:justify-center xl:space-x-8 xl:space-y-0">
        <div className="space-y-8">
          <ThreeItemGrid />
          <div className="container m-auto w-full rounded-box border border-base-content bg-base-200 p-5">
            <div className="prose m-auto text-center">
              <img src="/brand/header-t2-light.svg" className="m-auto -mb-8 w-1/2" />
              <h1>
                shop anything from a store <br />
                that you trust
              </h1>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}
