"use client"
export default function AdminProductPage() {
  const revalidate = async () => {
    await fetch("https://localhost:3000/api/revalidate?tag=products", {
      method: "POST",
    });
  }
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">Admin Product Page</h1>
        <button onClick={() => revalidate()}>Revalidate now</button>
      </div>
    </>
)
};

