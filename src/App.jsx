import './App.css'
import Nav from "./nav.jsx"
import Card from "./card.jsx"
import data from "./data.jsx"

export default function App() {
  // <Hero />
const cards = data.map(item => {
return (
  <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
  />
)
})
  return (
    <>
    <Nav />
    <section className='collection'>
      {cards}
    </section>
    </>
    )
}

