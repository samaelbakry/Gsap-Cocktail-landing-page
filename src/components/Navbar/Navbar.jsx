import gsap from "gsap";
import logoImage from "/images/logo.png";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  useGSAP(() => {
    const tween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    tween.fromTo(
      "nav",
      { backgroundColor: "transparent" },

      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: "1s",
        ease: "power1.inOut",
      }
    );
  }, []);
  const links = [
    {
      id: "cocktails",
      title: "Cocktails",
    },
    {
      id: "about",
      title: "About Us",
    },
    {
      id: "work",
      title: "The Art",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  return (
    <>
      <nav>
        <div className="max-w-7xl">
          <a className="flex items-center gap-2">
            <img src={logoImage} alt="website-logo" />
            <span>velvet pour</span>
          </a>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
