import './styles.scss'

export const WorkItem = ({image}) => {
    return(
        <div>
            <img src={image} width={300} />
            <p className='title'>Rakuzott tányérok delfti stilussal</p>
            <p>2021</p>
        </div>
    )
}