import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Cocktails() {
  const cocktailLists = [
    {
      name: "Chapel Hill Shiraz",
      country: "AU",
      detail: "Battle",
      price: "$10",
    },
    {
      name: "Caten Malbee",
      country: "AU",
      detail: "Battle",
      price: "$49",
    },
    {
      name: "Rhino Pale Ale",
      country: "CA",
      detail: "750 ml",
      price: "$20",
    },
    {
      name: "Irish Guinness",
      country: "IE",
      detail: "600 ml",
      price: "$29",
    },
  ];
  const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];
useGSAP(()=>{
    const cocktailsScroll =gsap.timeline({
        scrollTrigger:{
            trigger:"cocktails",
            start:"top 30%",
            end:"bottom 80%",
            scrub:true
        }
    })
    cocktailsScroll.from("#c-left-leaf", { x:-100 , y:100})
    cocktailsScroll.from("#c-right-leaf",  {  x:100 , y:100})
},[])
  return (
    <>
      <section id="cocktails" className="noisy">
        <img
          src="/images/cocktail-left-leaf.png"
          alt="cocktails-left-leaf"
          id="c-left-leaf"
        />
        <img
          src="/images/cocktail-right-leaf.png"
          alt="cocktails-right-leaf"
          id="c-right-leaf"
        />
        <div className="max-w-7xl mx-auto">
            <div className="list">
          <div className="popular">
            <h2>Most popular cocktail:</h2>
            <ul>
                {cocktailLists.map((drink)=>(
                <li key={drink.id}>
                   <div className="md:me-28">
                    <h3>{drink.name}</h3>
                    <p>{drink.country} | {drink.detail}</p>
                   </div>
                   <span>-{drink.price}</span>
                </li>
            ))}
            </ul>
          </div>
           <div className="loved">
            <h2>Most loved mocktails:</h2>
            <ul>
                  {mockTailLists.map((drink)=>(
                <li key={drink.id}>
                   <div className="me-28">
                    <h3>{drink.name}</h3>
                    <p>{drink.country} | {drink.detail}</p>
                   </div>
                   <span>-{drink.price}</span>
                </li>
            ))}
            </ul>
          </div>
      
        </div>

        </div>

         
      </section>
    </>
  );
}
