// React
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

// Inteface
import { ITask } from '../interface/Task';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForms = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle('');
      setDifficulty(0);

      console.log(taskList);
    }
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className="flex flex-col max-w-[400px] mx-auto my-0">
      <div className="flex flex-col text-left">
        <label htmlFor="title" className="font-bold mb-[0.4em]">
          Titulo:
        </label>
        <input
          type="text"
          name="title"
          placeholder="Ttulo da tarefa"
          className="px-[15px] py-[8px] rounded-none border-[1px] border-[#282c34] border-solid mb-[1.5em]"
          onChange={handlerChange}
          value={title}
        />
      </div>
      <div className="flex flex-col text-left">
        <label htmlFor="difficulty" className="font-bold mb-[0.4em]">
          Dificuldade:
        </label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          className="px-[15px] py-[8px] rounded-none border-[1px] border-[#282c34] border-solid mb-[1.5em]"
          onChange={handlerChange}
          value={difficulty}
        />
      </div>
      <input
        type="submit"
        value={btnText}
        className="bg-[#61dafb] py-2 border-[1px] border-[#61dafb] border-solid text-black duration-[.5s] cursor-pointer hover:bg-white hover:border-[#282c34]"
      />
    </form>
  );
};

export default TaskForms;
