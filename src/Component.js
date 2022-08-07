import React, { useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT } from './constants';
import Modal from './ModalComponent/Modal';
const style = {
  border: '1px dashed black',
  padding: '1rem 1rem',
  backgroundColor: 'white',
  cursor: 'move',
};
const Component = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: COMPONENT,
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = components[data.id];
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div ref={ref} style={{ ...style, opacity }} className="component draggable">
      <div>{data.id}</div>
      <div>{component.content}</div>
      <button
        className="btn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        View Details / Open Modal
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};
export default Component;
