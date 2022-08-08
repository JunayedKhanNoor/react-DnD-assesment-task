import React, { useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import { COLUMN } from './constants';
import DropZone from './DropZone';
import Component from './Component';

const Column = ({ data, components, handleDrop, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: COLUMN,
    item: {
      type: COLUMN,
      id: data.id,
      children: data.children,
      path,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderComponent = (component, currentPath) => {
    return (
      <Component key={component.id} data={component} components={components} path={currentPath} />
    );
  };
  const [size, setSize] = useState({ x: 300, y: 500 });

  const style = { width: size.x, height: size.y };
  const handler = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent) {
      setSize((currentSize) => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
      }));
    }
    document.body.addEventListener('mousemove', onMouseMove);
  };
  return (
    <div
      id="containerD"
      ref={ref}
      style={{ ...style, opacity }}
      className="base draggable column"
      onMouseMove={handler}
    >
      {data.id}
      {data.children.map((component, index) => {
        const currentPath = `${path}-${index}`;

        return (
          <React.Fragment key={component.id} id="draghandle">
            <DropZone
              data={{
                path: currentPath,
                childrenCount: data.children.length,
              }}
              onDrop={handleDrop}
            />
            {renderComponent(component, currentPath)}
          </React.Fragment>
        );
      })}
      <DropZone
        data={{
          path: `${path}-${data.children.length}`,
          childrenCount: data.children.length,
        }}
        onDrop={handleDrop}
        isLast
      />
    </div>
  );
};
export default Column;
