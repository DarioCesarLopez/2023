
function handleClick (event) {
    event.preventDefault();
    alert('el boton fue presionado');
}

const Button = () => {
    return (
         <button>onClick = {handleClick} Click me!!</button>
    )
}