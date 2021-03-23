import React, { memo, FC } from "react";

import "./customNodes.css";

import { Handle, Position, NodeProps } from "react-flow-renderer";

const StartNode: FC<NodeProps> = () => {
  return (
    <>
      <div className="circle">
        <Handle
          id="z"
          className="background"
          type="source"
          position={Position.Right}
        />
      </div>
    </>
  );
};

export default memo(StartNode);
