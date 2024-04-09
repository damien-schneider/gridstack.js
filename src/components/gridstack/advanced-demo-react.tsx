import React from 'react';
import { GridStack } from 'gridstack';

export default function AdvancedDemoReact() {
  React.useEffect(() => {
    const grid = GridStack.init();
    console.log(grid);
    console.log('coucou');
  }, []);
  return (
    <>
      <p>ASTRO GRID</p>
      <div className="container-fluid mb-96">
        <h1>Advanced Grid Demo</h1>
        <div></div>
        <div className="grid-stack w-full h-96 bg-red-100">
          <div
            className="grid-stack-item bg-red-300"
            data-gs-x="0"
            data-gs-y="0"
            data-gs-width="4"
            data-gs-height="2"
          >
            <div className="grid-stack-item-content">Hello</div>
          </div>
          <div
            className="grid-stack-item"
            data-gs-x="4"
            data-gs-y="0"
            data-gs-width="4"
            data-gs-height="4"
          >
            <div className="grid-stack-item-content">World</div>
          </div>
        </div>
      </div>
    </>
  );
}
