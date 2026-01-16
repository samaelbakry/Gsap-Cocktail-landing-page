import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";

export default function Contact() {
    useGSAP(()=>{
        const title = SplitText.create("#contact h2" ,{ type:"words"})
        const timeline= gsap.timeline({
            scrollTrigger:{
                trigger:"#contact",
                start:"top center",
            },
            ease:"power1.inOut"
        })
        timeline.from(title.words , {opacity:0 , yPercent:100 , stagger:0.04})
        .from("#contact h3 , #contact p" , {opacity:0 , yPercent:100 , stagger:0.04})
        .to("#f-left-leaf" , {y:"-50", duration:1 , ease:"power1.inOut"})
        .to("#f-right-leaf" , {y:"-50" , duration:1 , ease:"power1.inOut"} , "<")
    },[])
 const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];
const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

  return (
    <>
 	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find Us</h2>

		<div>
		 <h3>Visit Our Bar</h3>
		 <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
		</div>
		
		<div>
		 <h3>Contact Us</h3>
		 <p>(555) 987-6543</p>
		 <p>hello@jsmcocktail.com</p>
		</div>
		
		<div>
		 <h3>Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 {time.day} : {time.time}
			</p>
		 ))}
		</div>
		
		<div>

		 <h3>Socials</h3>
		 <div className="flex-center gap-5">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
			 >
				<img src={social.icon} />
			 </a>
			))}
		 </div>

		</div>

	 </div>
	</footer>
    </>
  );
}
