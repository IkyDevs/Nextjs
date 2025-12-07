import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Product 1",
    rating: 4.5,
    price: 654,
    image: "https://dummyimage.com/300",
  },
  {
    id: 2,
    title: "Product 2",
    rating: 3.5,
    price: 711,
    image: "https://dummyimage.com/300",
  },
  {
    id: 3,
    title: "Product 3",
    rating: 2.5,
    price: 991,
    image: "https://dummyimage.com/300",
  },
  {
    id: 4,
    title: "Product 4",
    rating: 2.5,
    price: 776,
    image: "https://dummyimage.com/300",
  },
  {
    id: 5,
    title: "Product 4",
    rating: 2.5,
    price: 776,
    image: "https://dummyimage.com/300",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id == Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        detailProduct: detailProduct,
      });
    }
  }
  return NextResponse.json({
    status: 200,
        message: "Success",
    data: data,
  });
}
