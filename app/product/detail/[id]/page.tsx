import { getData } from "@/services/products";
import Image from "next/image";
import React from "react";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const { id } = await params;
  const product = await getData("https://dummyjson.com/products/" + id);
  console.log(product);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-white">
        <img
          src={product.thumbnail}
          alt="product image"
          className=" w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white text-black p-4 px-6">
          <h3>{product.title}</h3>
          <p>price : {product.price}</p>
        </div>
      </div>
    </div>
  );
}
