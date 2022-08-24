import './styles.scss'

export const About = () => {
    return(
        <div>
            <h1>Rólam</h1>
            <div className='about'>
                <img src={require('../../resources/images/dummy_image.jpeg')} width={300} height={380} alt="" />
                <div>
                    <p className='header'>header header header</p>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus nibh id lacus mattis, ac cursus nunc condimentum. Cras vehicula in nunc a commodo. Proin tortor orci, varius sit amet nibh non, cursus maximus elit. Aliquam sed massa sit amet ex pellentesque elementum. Nulla purus elit, posuere eu neque sit amet, porttitor imperdiet nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent euismod felis ipsum, at tempus turpis porttitor non. Fusce suscipit mi sed diam ullamcorper, sit amet luctus velit euismod. Integer ut imperdiet justo. Nulla euismod gravida urna, a dictum metus tincidunt quis. Maecenas suscipit leo id pellentesque varius.</p>
                    <p className='header'>header header header</p>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus nibh id lacus mattis, ac cursus nunc condimentum. Cras vehicula in nunc a commodo. Proin tortor orci, varius sit amet nibh non, cursus maximus elit. Aliquam sed massa sit amet ex pellentesque elementum. Nulla purus elit, posuere eu neque sit amet, porttitor imperdiet nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent euismod felis ipsum, at tempus turpis porttitor non. Fusce suscipit mi sed diam ullamcorper, sit amet luctus velit euismod. Integer ut imperdiet justo. Nulla euismod gravida urna, a dictum metus tincidunt quis. Maecenas suscipit leo id pellentesque varius.</p>
                </div>
            </div>
        </div>
    )
}