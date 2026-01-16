import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";

export default function Art() {
    const isMobile = useMediaQuery({maxWidth:767})
    const start = isMobile ? "top 20%" : "top top"

    useGSAP(()=>{
        const artScroll = gsap.timeline({
            scrollTrigger:{
                trigger:"#art",
                start,
                end:"bottom center",
                pin:true,
                scrub:1.5

            }
        })
        artScroll.to(".will-fade" , { opacity:0 , ease:"power1.inOut" , stagger:0.2})
        .to(".masked-img", {maskPosition:"center" , maskSize:"400%" , scale:1.4 , duration:1 , ease:"power1.inOut"})
        .to("#masked-content", {ease:"power1.inOut", opacity:1 , duration:1})
    },[])
  const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
  ];
  const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
  ];
  return (
    <>
      <div id="art" className="mx-auto">
        <div className="container mx-auto pt-20 h-full">
          <h2 className="will-fade">The Art</h2>

          <div className="content">
            <ul className="space-y-4 will-fade">
              {goodLists.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="./images/check.png" alt="check" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div className="cocktail-img">
              <img
                src="/images/under-img.jpg"
                alt="art-img"
                className="abs-center object-contain size-full masked-img"
              />
            </div>
            <ul className="space-y-4 will-fade">
              {featureLists.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start gap-2"
                >
                  <img src="./images/check.png" alt="check" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>

         	<div className="masked-container">
		 <h2 className="will-fade">Sip-Worthy Perfection</h2>
		 <div id="masked-content">
			<h3>Made with Craft, Poured with Passion</h3>
			<p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
		 </div>
		</div>
        </div>
      </div>
    </>
  );
}
