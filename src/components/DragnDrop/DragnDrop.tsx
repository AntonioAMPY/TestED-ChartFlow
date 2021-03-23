import React, { DragEvent } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  ConnectionMode,
  MiniMap,
  Node,
} from "react-flow-renderer";

import { v4 as uuidv4 } from "uuid";

// Hooks
import useElements from "../../hooks/useElements";

// Components
import Sidebar from "./SideBar";
import ConditionalNode from "../CustomNodes/ConditionalNode";
import ProcessNode from "../CustomNodes/ProcessNode";
import StartNode from "../CustomNodes/StartNode";

// styles
import "./styles.css";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "" },
    position: { x: 250, y: 5 },
  },
];

// customNodes
const nodeTypes = {
  conditionalNode: ConditionalNode,
  processNode: ProcessNode,
  startNode: StartNode,
};

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

export interface DnDFlowProps {}

const DnDFlow: React.SFC<DnDFlowProps> = () => {
  const {
    onConnect,
    onElementsRemove,
    onLoad,
    reactFlowInstance,
    elements,
    setElements,
  } = useElements(initialElements);

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const type = event.dataTransfer.getData("application/reactflow");
      const position = reactFlowInstance.project({
        x: event.clientX,
        y: event.clientY - 40,
      });
      const newNode: Node = {
        id: uuidv4(),
        type,
        position,
        data: { label: `` }, // ${type} node - put name on the node.
      };

      setElements((es) => es.concat(newNode));
    }
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            style={{ width: "100%", height: "90vh" }}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            deleteKeyCode={46}
            connectionMode={ConnectionMode.Loose} // type source - target both works
            nodeTypes={nodeTypes}
            onDragOver={onDragOver}
          >
            <MiniMap
              nodeStrokeColor={(n: any) => {
                if (n.style?.background) return n.style.background;
                if (n.type === "input") return "#0041d0";
                if (n.type === "output") return "#ff0072";
                if (n.type === "default") return "#1a192b";
                if (n.type === "conditionalNode") return "#FF0000";
                if (n.type === "processNode") return "#000";
                return "#eee";
              }}
              nodeColor={(n: any) => {
                if (n.style?.background) return n.style.background;
                return "#fff";
              }}
              nodeBorderRadius={2}
            />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
