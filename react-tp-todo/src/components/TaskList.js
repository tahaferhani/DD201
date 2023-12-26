import TaskItem from "./TaskItem"

export default ({tasks, updateTask}) => {
    return <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Texte</th>
                <th>Complet</th>
            </tr>
        </thead>
        <tbody>
            {
                tasks.map(task => {
                    return <TaskItem key={task.id} task={task} updateTask={updateTask}/>
                })
            }
        </tbody>
    </table>
}