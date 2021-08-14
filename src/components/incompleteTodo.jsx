import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            //reactで何回もループする場合には最初のタグにkeyをつける。何回目のループか把握するため
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/**
               *関数に筆記数を渡してあげたいときはそのままカッコにするんじゃなくて関数のようにしなければならない
               */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
