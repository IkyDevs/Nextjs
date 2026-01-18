import { retriveData, retriveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: Date.now(),
    name: "Nike Air Force 1 Gore-tex",
    rating: 4.5,
    price: 2489000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/4cde9042-7bbf-4bc3-9870-2891c27e7888/AIR+FORCE+1+GTX.png",
  },
  {
    id: Date.now(),
    name: "Product 2",
    rating: 3.5,
    price: 711,
    image: "https://dummyimage.com/300",
  },
  {
    id: Date.now(),
    name: "Product 3",
    rating: 2.5,
    price: 991,
    image: "https://dummyimage.com/300",
  },
  {
    id: Date.now(),
    name: "Product 4",
    rating: 2.5,
    price: 776,
    image: "https://dummyimage.com/300",
  },
  {
    id: Date.now(),
    name: "Product 4",
    rating: 2.5,
    price: 776,
    image: "https://dummyimage.com/300",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retriveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        detailProduct: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  const products = await retriveData("products");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: products,
  });
}
