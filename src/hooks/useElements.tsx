import { useState } from "react";
import {
  addEdge,
  Elements,
  Connection,
  Edge,
  OnLoadParams,
  removeElements,
} from "react-flow-renderer";

export default function useElements(initialElements: Elements) {
  const [elements, setElements] = useState<Elements>(initialElements);

  const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams>();

  const onConnect = (params: Connection | Edge) =>
    setElements((els) => addEdge({ ...params, animated: true }, els));

  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance: OnLoadParams) =>
    setReactFlowInstance(_reactFlowInstance);

  return {
    elements,
    setElements,
    reactFlowInstance,
    setReactFlowInstance,
    onConnect,
    onLoad,
    onElementsRemove,
  };
}
