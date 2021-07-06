import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./components/Column";

function App() {
  const [state, setState] = useState(initialData);

  const handleOnDragEnd = (result) => {
    // TODO reorder our column
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
