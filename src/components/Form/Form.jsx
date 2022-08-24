import './styles.scss'

export const Form = () => {
    return (
        <form action="">
            <label htmlFor="">Név</label>
            <input type={'text'} placeholder="Név"/>
            <label htmlFor="">Email</label>
            <input type={'email'} placeholder="pelda@pelda.com" />
            <textarea rows={10} />
            <button type={'submit'} className="submitBtn">Elküldöm</button>
        </form>
    )
}