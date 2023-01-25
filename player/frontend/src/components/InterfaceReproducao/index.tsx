import PlayButton from '../PlayButton'
import ForwardButton from '../ForwardButton'
import BackwardButton from '../BackwardButton'
import './styles.css'

function Interface() {
  return (
    <div className="buttons">
      <div className="btns" id="backward">
        <BackwardButton></BackwardButton>
      </div>
      <div className="btns" id="play">
        <PlayButton></PlayButton>
      </div>
      <div className="btns" id="forward">
        <ForwardButton></ForwardButton>
      </div>
    </div>
  )
}

export default Interface
