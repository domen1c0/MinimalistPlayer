import icon from '../../assets/img/playbutton.svg'
import './styles.css'

function PlayButton (){
    return (
        <div className="play-btn">
            <img src={icon} alt="Play" />
        </div>
    )
}

export default PlayButton