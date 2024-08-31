import { useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { useRouter } from 'next/router';
import React from "react";
const data = {
  id: `999`,
  index: 999,
  type: "water",
  content: "TTT",
}

export const Water = () => {
  const router = useRouter();

  const handleDrop = async (item:any, index:any) => {
    
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CELL',
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'CELL',
    drop: (item) => handleDrop(item, data.index),
  }));

  const cellRef = useRef(null); // Create a ref for the cell

  drag(drop(cellRef)); // Assign the ref to the drag and drop functions

  return (
    <div
      ref={cellRef} // Assign the ref to the actual DOM element
      className="w-16 h-16 border border-gray-300 flex items-center justify-center font-bold bg-green-100"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <img src="/assets/water_bucket.png" alt="Water Bucket" />
    </div>
  );
};