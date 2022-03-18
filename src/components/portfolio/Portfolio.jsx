import React from 'react'
import './portfolio.css'
// import images

import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'



const data = [
   {
     id: 1,
     image: IMG1,
     title: 'Drum Pad ',
     github: 'https://github.com'
   },
   {
     id: 2,
     image: IMG2,
     title: 'Note Finder',
     github: 'https://github.com'
   },
   {
     id: 3,
     image: IMG3,
     title: 'Recommender App',
     github: 'https://github.com'
   },
   {
     id: 4,
     image: IMG4,
     title: 'Barkmates',
     github: 'https://github.com'
   },

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>

     <div className='container portfolio_container'>
       {
         data.map(({id, image, title, github}) => {
           return (
             <article key={id} className='portfolio_item'>
         <div className="portfolio_item-image">
           <img src={image} alt={title} />
           <h3>{title}</h3>
           <div className='portfolio_item-cta'>
             <a href={github} className='btn'>Github</a>
           </div>
         </div>
       </article>
          )
         })
       }

     </div>

    </section>
  )
}

export default Portfolio