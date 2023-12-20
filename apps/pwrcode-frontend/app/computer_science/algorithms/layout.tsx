import React, { ReactNode, Children } from 'react';
import './normalize.css';
import './page.scss';
export default function MdxLayout({ children }: { children: ReactNode }) {
  // Create any shared layout or styles here

  return <div className="MDX_ROOT">{children}</div>;
}
