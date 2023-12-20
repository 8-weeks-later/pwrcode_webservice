import React, { ReactNode, Children } from 'react';
import './normalize.css';
import './page.scss';
import { Collection } from '../design/organisms/Collection/Collection';
import { ComputerScienceNavBarCollection } from '../design/organisms/Collection/Collection.stories';

export default function MdxLayout({ children }: { children: ReactNode }) {
  // Create any shared layout or styles here

  return (
    <div className="MDX_ROOT">
      <Collection {...ComputerScienceNavBarCollection.args} />
      {children}
    </div>
  );
}
