import { getData } from "@/services/products";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");
  console.log(products);

  return (
    <div className="grid grid-cols-4 mt-5 gap-5 place-items-center ">
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="gap-10 bg-gray-700 p-5 w-full h-full rounded-2xl">
            <img
              src={product.image}
              alt="product image"
              className="rounded-lg"
            />
            <h1 className="items-center flex justify-center text-3xl font-bold">
              {product.name}
            </h1>
            <p className=" my-2 text-2xl">rating : {product.rating}</p>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Rp. {product.price}.</h2>
              <button
                className=" rounded-lg text-black bg-white p-3"
                type="button">
                add to cart
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
}
