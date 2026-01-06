import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios'
import { use, useState } from 'react';

const Lomake = () => {
  //States for saving photo and form text inputs
  const [file, setFile] = useState()
  const [recipeName, setRecipeName] = useState("")
  const [mealType, setMealType] = useState("NOTVALID")
  const [userName, setUserName] = useState("")
  const [recipe, setRecipe] = useState("")


  const upload = (event) => {
/*Tästä poistettu tarkoituksella prevent default koska nyt halutaan, että sivu uudelleenlatautuu
Muuten käy niin, että samoilla tiedoilla täytetty resepti lähetetään monta kertaa

JATKOKEHITYS: Jos uploadissa tulee virhe -> tiedot hävii!? Ehkä refresh vasta ku tiedot kuitattu ok. 
Joku latausikkuna näkyvii ku tietoja lähetetää ettei nappii paina turhaa useeta kertaa
*/
    console.log(file)
    const formData = new FormData()
    formData.append('file', file, "Teksti.png")
    
    const newRecipe = {
      recipeName: recipeName,
      mealType: mealType,
      userName: userName,
      recipeContent: recipe
    }

    formData.append('data', JSON.stringify(newRecipe))

    axios.post('http://localhost:3001/api/recipe', formData)
  }


  return (
    <div className = "lomake">
    <Form>

      <Form.Group className='mb-3'>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Reseptin nimi">
              <Form.Control type="text" placeholder="Yam yam" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            </FloatingLabel>
          </Col>

          <Col md>
            <FloatingLabel controlId="floatingSelectGrid" label="Ateria tyyppi">
              <Form.Select aria-label="Floating label select example" value={mealType} onChange={(e) => setMealType(e.target.value)}>
                <option value="NOTVALID"></option>
                <option value="BREAKFAST">Aamupala / Välipala</option>
                <option value="LUNCH">Lounas / Päivällinen</option>
                <option value="DESSERT">Jälkiruoka</option>
                <option value="DRINK">Juoma</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Tekijä</Form.Label>
        <Form.Control type="text" placeholder="Nimimerkki" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Valmistusohje</Form.Label>
        <Form.Control as="textarea" rows={2} value={recipe} onChange={(e) => setRecipe(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Kuva</Form.Label>
        <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br /><br />
        <Button type="submit" variant='outline-light' onClick={upload}>Upload</Button>
      </Form.Group>


    </Form>
    </div>
  )
}

const Uusi = () => {
  const navigate = useNavigate();
  return (
    <div className = "form">
      <h1>Lisää resepti</h1>
      <Button type="submit" variant="outline-light" onClick={() => navigate('/reseptit')}>Takaisin</Button><br /><br />
      <Lomake />
    </div>
  )
}


export default Uusi