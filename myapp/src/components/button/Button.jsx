import './style.css'

export function Button(props) {
    return (
        <>
            <button className="button-link">{props.name}</button>
        </>
        
)}

export function ButtonLogin(props) {
    return (
        <>
            <button className="button-login">{props.name}</button>
        </>
    )
}