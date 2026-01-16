import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { useRef, useState } from 'react'

export default function Menu() {
    const contentRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)

    useGSAP(()=>{

        gsap.fromTo("#title" , {opacity :0} , { opacity:1 , duration:1 })
        gsap.fromTo(".cocktail img" ,{ xPercent:-100 , opacity:0 } , { opacity:1 , xPercent:0 , ease:"power1.inOut" })
        gsap.fromTo(".details h2" , {opacity:0 , yPercent:100} , {opacity:1 , duration:1, ease:"power1.inOut" ,yPercent:0})
        gsap.fromTo(".details p" , {opacity:0 , yPercent:100} , {opacity:1 , duration:1, ease:"power1.inOut" ,yPercent:0})

    },[currentIndex])

    
    const sliderLists = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },];

const totalCocktails = sliderLists.length

function goToNextSlide(index){
const newIndex = (totalCocktails+ index) % totalCocktails
setCurrentIndex(newIndex)
}

const getCocktail = (indexOffset)=>{
   return sliderLists[ (totalCocktails+ indexOffset + currentIndex) % totalCocktails]
}

const currentCocktail = getCocktail(0)
const prevCocktail = getCocktail(-1)
const nextCocktail = getCocktail(1)


  return <>
  <section id='menu' aria-labelledby='menu-heading' >
    <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
    <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

    <h2 id='menu-heading' className='sr-only'>
        cocktails menu
    </h2>
    <nav aria-label="Cocktail Navigation" className='cocktail-tabs'>
        {sliderLists.map((cocktail , index)=>{
            const isActive = index === currentIndex;
            return (<button key={cocktail.id} 
             className={`${isActive ? "text-white border-white" 
             :"text-white/50 border-white/50"}`}
             onClick={()=>{goToNextSlide(index)}}
             >
             {cocktail.name}</button>)})}
             
    </nav>
            <div className="content max-w-7xl mx-auto">
                <div className="arrows">
                    <button className='text-left' onClick={()=>{goToNextSlide( currentIndex - 1)}}>
                        {nextCocktail.name}
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button className='text-left' onClick={()=>{goToNextSlide( currentIndex + 1)}}>
                        {prevCocktail.name}
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>
                
                <div className='cocktail'>
                    <img src={currentCocktail.image} className="object-contain"/>
                </div>
                <div className="recipe">
                    <div ref={contentRef} className='info'>
                        <p>recipe for:</p>
                        <p id='title'>{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>

             </div>

 


  </section>
    
  </>
}
