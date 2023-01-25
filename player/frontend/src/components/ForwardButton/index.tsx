import icon from '../../assets/img/forwardbutton.svg'
import './styles.css'

function ForwardButton(){
    return(
        <div className="forward-btn">
            <img src={icon} alt="Forward"/>
        </div>
    )
}


export default ForwardButton