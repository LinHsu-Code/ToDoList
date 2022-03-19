import React from "react";
import TodoForm from "../TodoForm";
import TodoOverview from "../TodoOverview";
export default class Todo extends React.Component {
  render() {
    return (
      <main>
        <h4>Todo</h4>
        <TodoForm />
        <TodoOverview />
      </main>
    );
  }
}
