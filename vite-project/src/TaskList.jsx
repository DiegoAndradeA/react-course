

function TaskList(props) {


  return (
    <div>
      {props.tasks.map((task) => (
        <div key = {task.id}>
            <h1>{task.title} </h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
