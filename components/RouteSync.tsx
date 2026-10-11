"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Tells the plain scripts in /public (nav state, reveals, avatar) that the page changed.
export default function RouteSync() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    window.dispatchEvent(new Event("site:route"));
  }, [pathname]);
  return null;
}
