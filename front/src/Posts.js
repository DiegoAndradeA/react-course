export const Posts = () => {
    return <button onClick={() => {
        alert("trayendo datos")
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
            // assignagate, promesas, colbacks
    }}>
        Traer datos
    </button>

}