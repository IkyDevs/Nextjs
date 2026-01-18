export async function getData(url: string, p0: { next: { revalidate: number; }; }) {
  // const response = await fetch("https://fakestoreapi.com/products");
  // const response = await fetch("https://dummyjson.com/products", {
  //   cache: "no-store",
  // });
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["product"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed To Fetch Data");
  }
  return res.json();
}
