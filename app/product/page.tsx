import { getData } from "@/services/products";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("https://dummyjson.com/products");
  console.log(products);

  return (
    <div className="grid grid-cols-4 mt-5 gap-5 place-items-center">
      { products.products.length > 0 &&
        products.products.map((product: any) => (
          <Link href={ `/product/detail/${ product.id }` } key={ product.id }>
            <img src={ product.thumbnail } alt="product image" className="rounded-lg" />
            <h1 className="items-center flex justify-center text-3xl font-bold">
              { product.title }
            </h1>
            <p className="px-5 mt-5">rating : { product.rating }</p>
            <div className="flex justify-between">
              <h2>$ { product.price }</h2>
              <button className=" rounded-lg bg-white font-black" type="button">
                add to cart
              </button>
            </div>
          </Link>
))}
    </div>
  );
}
