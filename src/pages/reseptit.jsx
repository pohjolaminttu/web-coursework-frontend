import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import '../../style.css'

const RecipeCard = ({ recipe }) => {
  const [showMore, setShowMore] = useState(false);

  //Tämä tekee sen, että reseptin ohjeet voidaan näyttää / piilottaa napin painalluksella
  const toggleShowMore = () => { 
    setShowMore(!showMore)
  }

  return (
    <Card>
      <Card.Img variant="top" src={"http://localhost:3001/api/images/" + recipe.pictureName} className="kortinKuva" />
      <Card.Body>
        <Card.Title><h1>{recipe.recipeName}</h1></Card.Title>

        <Card.Text>
          <h2>{recipe.mealType} - {recipe.userName}</h2>
          {showMore && (
            <Card.Text>
              <hr />
              <p>{recipe.recipeContent}</p>
            </Card.Text>
          )}
        </Card.Text>

        <Button variant="outline-secondary" onClick={toggleShowMore}>{showMore ? 'Piilota' : 'Ohje'}</Button>
      </Card.Body>
    </Card>
  )
}


const Reseptit = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/recipes')
      .then(response => {
        console.log('promise fulfilled')
        setRecipes(response.data)
      })
  }, [])
  console.log('render', recipes.length, 'recipes')

  return (
    <div className = "page">
      <h1>Reseptit</h1>
      <Button type="submit" variant="outline-light" onClick={() => navigate('/reseptit/uusi')}>Lisää resepti</Button>
      <Button type="submit" variant="outline-light" onClick={() => navigate('/')}>Takaisin</Button>
      <br></br><br></br>
      <div className="Cards">
        {recipes.map(recipe => <RecipeCard recipe={recipe} />)}
      </div>
    </div>
  )
}

export default Reseptit