import {useState, useEffect} from 'react'
import Card from "react-tinder-card"
import classes from '../styles/Cards.module.css'
import database from '../firebase'

function Cards() {
    const [clothes, setClothes] = useState([{
    }])
    useEffect(() => {
      const unsubscribe = database.collection('clothes').onSnapshot((snapshot) => {
        setClothes(snapshot.docs.map((doc) => doc.data()))
      })
      return () => {
        unsubscribe();
      }
    },[])
    
  return (
    <div>
      <main className={classes.cardContainer}>
          {clothes.map((cloth) => (
        <Card className={classes.swipe} key={cloth.id} preventSwipe={['up', 'down']} flickOnSwipe swipeRequirementType='velocity'>
          <div style={{backgroundImage: `url(${cloth.url})`}} className={classes.card}>
            <h3>{cloth.name}</h3>
          </div>
        </Card>
      ))}
      </main>
    </div>
  )
}

export default Cards;