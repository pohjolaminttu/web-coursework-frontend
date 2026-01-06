import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Etusivu = () => {
  const navigate = useNavigate();
  return (
    <div className = "taustakuva">
      <div className="alkuNappi">
        <Button type="submit" variant="outline-secondary" onClick={() => navigate('/reseptit')}>Reseptit</Button>
      </div>
      <div className="frontPage">
        <div className="otsikko">Budjettilounaat</div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="by">Minttu - Pyry -  Kati -  Oskari<br></br>2025</div>
      </div>
    </div>
  )
}

export default Etusivu