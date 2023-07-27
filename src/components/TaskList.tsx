import { ITask } from '../interface/Task';

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            className="flex justify-between items-center max-w-[400px] mx-auto my-0 border-b-[1px] border-solid border-[#ccc] p-[1em]"
            key={task.id}
          >
            <div className="text-left">
              <h4 className="text-[1.2em] mb-[1em] font-bold">{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i
                className="bi bi-pencil mb-[0.5em] text-[1.2em] cursor-pointer bg-[#282c34] text-white p-[0.4em] duration-[0.5s] hover:text-[#61dafb]"
                onClick={() => {
                  handleEdit(task);
                }}
              ></i>
              <i
                className="bi bi-trash mb-[0.5em] text-[1.2em] cursor-pointer bg-[#282c34] text-white p-[0.4em] duration-[0.5s] hover:text-[#61dafb]"
                onClick={() => {
                  handleDelete(task.id);
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>Não tem tarefas</p>
        </div>
      )}
    </>
  );
};

export default TaskList;
