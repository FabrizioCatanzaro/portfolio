import './CardAboutMe.css';

const CardAboutMe = (props) => {
    const {description, icon} = props;

    return (
        <div className='cardAboutMe'>
            <div className='iconCardCont'>
                {icon}
            </div>
            <p className='descriptionCardAbout'>{description}</p>
        </div>
    )
}

export default CardAboutMe;