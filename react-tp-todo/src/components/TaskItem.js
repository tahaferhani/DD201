const TaskItem = ({task, updateTask}) => {
    return <tr style={{ backgroundColor: task.complet ? "green" : "red" }}>
        <td>{task.id}</td>
        <td>{task.texte}</td>
        <td>
            <input
                id={task.id}
                type="checkbox" 
                checked={task.complet}
                onChange={() => updateTask(task.id)}/>
        </td>
    </tr>
}

export default TaskItem;