import React, { DragEvent } from "react";

const onDragStart = (event: DragEvent, nodeType: string) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};

const Sidebar = () => {
  return (
    <aside>
      <div className="description">
        Puedes mover los artefactos a la derecha
      </div>
      <div
        className="dndnode input"
        onDragStart={(event: DragEvent) => onDragStart(event, "input")}
        draggable
      >
        Inicio
      </div>
      <div
        className="dndnode"
        onDragStart={(event: DragEvent) => onDragStart(event, "processNode")}
        draggable
      >
        Proceso
      </div>
      <div
        className="dndnode output"
        onDragStart={(event: DragEvent) =>
          onDragStart(event, "conditionalNode")
        }
        draggable
      >
        Decision
      </div>
    </aside>
  );
};

export default Sidebar;
