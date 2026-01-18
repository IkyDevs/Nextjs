import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;

  const product = await getData("http://localhost:3000/api/product", {
    next: { revalidate: 10 },
  });
  const data = product.data







  return (
    <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product:any, index:any) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}

                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
                  <span className="text-black">{product.rating}</span>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-900 font-bold mt-2">${product.price}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-black">Rp. {(product.price).toLocaleString("id-ID")}</p>
                    <Link
                      href={`/product?id=/${product.id}`}
                      className="flex bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      View Details
                    </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
