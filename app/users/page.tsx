"use client"

import { useEffect, useState } from "react"

export default function Users() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    fetch('https://dummyjson.com/users').then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    }).then((data) => {
      setData(data.users);
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className="flex justify-center items-center  mx-auto">
        {isLoading && <p className="text-4xl italic">Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="grid grid-cols-4 gap-5 mt-5">
          {data.map((user: any) => (
            <div key={user.id} className="flex gap-y-10 border border-gray-300 p-4 rounded-lg">
              <img src={user.image} alt="" className="p-5"/>
              <div className="">
                <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Age: {user.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
};

