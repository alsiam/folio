"use client";

import { useEffect, useRef, useState } from "react";

/**
 * true dopo il primo pixel di scroll. Un sentinel + IntersectionObserver
 * invece di un listener su scroll: zero calcoli ad ogni frame.
 *
 * Il sentinel va renderizzato da chi chiama l'hook (via sentinelRef) invece
 * che iniettato con document.body.prepend: in App Router <body> è il nodo
 * root di React, quindi un nodo DOM aggiunto a mano fuori dal suo albero
 * viene rimosso alla prima riconciliazione successiva (es. ogni navigazione).
 */
export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    });
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return { scrolled, sentinelRef };
}
