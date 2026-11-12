import './Button.css'

function Button() {
    function handleClick() {
        alert('Ouch! You have Clicked Me')
    }

    return (
        <p onClick={handleClick}>Upload</p>
    )
}

export default Button