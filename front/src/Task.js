import './task.css'

export function TaskCard(props){


    return <div className ='card'>
        <h1>Mi primer tarea</h1>
        <span className={props.ready ? 'bg-green' : 'bg-red'}>
        {   props.ready ? 'Tarea realizada': 'Tarea pendiente'}
        </span>
        
    </div>
}