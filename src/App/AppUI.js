import React from "react";
import { TodoContext } from "../components/TodoContext";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../components/TodoForm";
import { TodoError } from "../components/TodoError";
import { TodoLoading } from "../components/TodoLoading/index";
import { EmptyTodos } from "../components/EmptyTodos";

function AppUI() {

  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <TodoError error={error} />}
            {loading && <TodoLoading />}
            {!loading && !searchedTodos.length && <EmptyTodos />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
