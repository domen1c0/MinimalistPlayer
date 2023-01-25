import icon from '../../assets/img/backwardbutton.svg'
import './styles.css'

function BackwardButton(){
  return(
    <div className="backward-btn">
      <img src={icon} alt="Backward" />
    </div>
  )
}


export default BackwardButton