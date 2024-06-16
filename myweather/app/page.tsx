"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

const Greet = () => {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    invoke<string>("greet", { name: "nextjs" })
      .then((res) => setGreeting(res))
      .catch(console.error);
  });
  return <div>{greeting}</div>;
};

export default function Home() {
  return (
    <main>
      <Greet />
    </main>
  );
}
