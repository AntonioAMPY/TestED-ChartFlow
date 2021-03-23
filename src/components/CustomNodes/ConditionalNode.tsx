import React, { memo, FC } from "react";

import "./customNodes.css";

import { Handle, Position, NodeProps } from "react-flow-renderer";

const ConditionalNode: FC<NodeProps> = () => {
  return (
    <>
      <div className="rhombus">
        <Handle
          type="target"
          className="background"
          position={Position.Top}
          style={{ left: "auto", bottom: "auto" }}
        />
        <Handle
          id="d"
          type="source"
          className="background"
          position={Position.Right}
          style={{ top: "auto", bottom: "auto" }}
        />
        <Handle
          id="f"
          type="source"
          className="background"
          position={Position.Left}
          style={{ top: 80, bottom: "auto" }}
        />
      </div>
    </>
  );
};

export default memo(ConditionalNode);
