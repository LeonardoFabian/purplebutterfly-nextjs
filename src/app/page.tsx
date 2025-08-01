import { BannerHero, H1 } from '@/src/components'
import Link from "next/link"
import { getProducts, ProductGrid, } from '@/src/products';
import { Header } from '@/src/components/header/Header';



const Main = async (): Promise<JSX.Element> => {

  const products = await getProducts({ limit: 30, offset: 0 });

  return (
      <>
          <Header />

          <main className="flex min-h-screen flex-col items-center justify-between ">
              <BannerHero title="Coffee Bouquets that speak your heart" subtitle="A unique gift experience that combines the aroma of premium coffee with the elegance of floral presentation. Perfect for any occasion." cta={<Link href="/shop" className="bg-primary hover:bg-accent text-white font-heading font-semibold rounded-lg px-8 py-4 transition-all">Shop Now</Link>} />

              <div className="px-4 lg:px-24 py-5">
                  <div className="latest-products text-center py-12 flex flex-col gap-6">
                      <H1>Latest Products</H1>
                      {/* { JSON.stringify( products ) } */}
                      <div className="flex flex-col ">
                          <ProductGrid products={ products } />

                      </div>
                </div>
              </div>
          </main>
      </>
  )
}

export default Main;