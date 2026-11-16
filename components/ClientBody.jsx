'use client';

import { useEffect } from 'react';

export default function ClientBody({ children, className }) {
  useEffect(() => {
    // Remove browser extension injected attributes that cause hydration mismatches
    document.querySelectorAll('[fdprocessedid]').forEach((el) => {
      el.removeAttribute('fdprocessedid');
    });
  }, []);

  return (
    <body className={className} suppressHydrationWarning>
      {children}
    </body>
  );
}
