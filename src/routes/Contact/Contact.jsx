import { Form } from "../../components/Form/Form"
import './styles.scss'

export const Contact = () => { 
    return(
        <div className='container'>
            <h1>Vegye fel velem a kapcsolatot!</h1>
            <Form />
            <p>Telefon: +36 30 414 4315</p>
        </div>
    )
}