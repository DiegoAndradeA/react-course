import './task.css'

export function TaskCard(props){


    return <div className ='card'>
        <h1>Mi primer tarea</h1>
        <span>
        {   props.ready ? 'Tarea realizada': 'Tarea pendiente'}
        </span>
        
    </div>
}