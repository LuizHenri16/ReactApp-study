import { Button, ButtonLogin } from '../button/Button'
import './style.css'

export default function Header() {
    

    return (
        <>
            <div id="Header" className="container"> 
                <div className="logo">Logo</div>
                <ul>
                   <Button name="Features"/>
                   <Button name="Enterprise"/>
                   <Button name="Support"/>
                   <ButtonLogin name="Login"/ >
               </ul>
                

            </div>
        </>
    )
}