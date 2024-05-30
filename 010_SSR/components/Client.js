"use client";

import { useEffect, useState } from "react";

export default function Client() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState("client loaded");
  }, []);

  return (
    <>
      <div>{state}</div>
    </>
  );
}
