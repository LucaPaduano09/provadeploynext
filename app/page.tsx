"use server";
import Image from "next/image";

const getSome = async () => {
  const res = await fetch(
    "https://food-ordering-111a827d8037.herokuapp.com/getuser",
    { cache: "no-cache" }
  );
  const user = await res.json();
  return user;
};

export default async function Home() {
  const user = await getSome();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user[0].email}
    </main>
  );
}
