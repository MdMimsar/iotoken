import "../assets/css/fontawesome.css";
import TaskPanel from "../components/TaskPanel";

const Task = () => {
  const tasks = [
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
    { heading: "Follow our community on X", reward: "250 000" },
  ];

  return (
    <>
      <div className="flex-col h-[90%] overflow-scroll no-scrollbar">
        <h2>Complete Tasks and Get Reward</h2>
        <div className="h-[80%] overflow-scroll no-scrollbar">
          {tasks.map((task, index) => (
            <TaskPanel key={index} heading={task.heading}>
              {task.reward}
            </TaskPanel>
          ))}
        </div>
      </div>
    </>
  );
};

export default Task;
