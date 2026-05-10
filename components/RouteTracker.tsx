"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gtmPush } from "@/lib/gtm";

export default function RouteTracker() {
  const pathname = usePathname();
  useEffect(() => {
    gtmPush({
      event: "page_view",
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);
  return null;
}
