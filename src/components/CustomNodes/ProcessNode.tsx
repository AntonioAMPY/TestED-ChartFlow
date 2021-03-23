import React, { memo, FC } from "react";

import "./customNodes.css";

import { Handle, Position, NodeProps } from "react-flow-renderer";

const ProcessNode: FC<NodeProps> = () => {
  return (
    <>
      <div className="rectangle">
        <Handle
          className="background"
          type="target"
          position={Position.Top}
          style={{ left: 50, right: "auto" }}
        />
        <Handle
          id="a"
          type="source"
          className="background"
          position={Position.Bottom}
        />
        <Handle
          id="b"
          className="background"
          type="source"
          position={Position.Left}
        />
        <Handle
          id="c"
          className="background"
          type="source"
          position={Position.Right}
        />
      </div>
    </>
  );
};

export default memo(ProcessNode);
