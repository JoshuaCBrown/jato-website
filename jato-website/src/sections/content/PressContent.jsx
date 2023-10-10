import { motion, stagger } from "framer-motion";
import "./style/PressStyle.css";
export default function PressContent() {
  const pressLinks = [
    {
      title: "Acid Stag",
      link: "https://acidstag.com/2019/09/jack-and-the-other-lost-in-space/",
      id: "1",
    },
    {
      title: "Beatbox Saboteurs",
      link: "https://beatboxsaboteurs.blogspot.com/2019/05/video-jack-and-other-passin-through.html",
      id: "2",
    },
    {
      title: "Bong Mines",
      link: "https://www.bongminesentertainment.com/jack-and-the-other-push-push/",
      id: "3",
    },
    {
      title: "Ear To The Ground",
      link: "https://www.eartothegroundmusic.co/2019/01/15/2-acts-we-cannot-get-enough-of/",
      id: "4",
    },
    {
      title: "Keep Walking Music",
      link: "https://keepwalkingmusic.com/jack-and-the-other-e-s-t/",
      id: "5",
    },
    {
      title: "Lifoti",
      link: "http://www.lifoti.com/2019/06/atlanta-duo-jack-and-other-finds.html",
      id: "6",
    },
    {
      title: "Mystic Sons",
      link: "https://www.eartothegroundmusic.co/2019/01/15/2-acts-we-cannot-get-enough-of/",
      id: "7",
    },
    {
      title: "Soundplate",
      link: "https://soundplate.com/jack-and-the-other-interview-2022/",
      id: "8",
    },
    {
      title: "Voyage ATL",
      link: "https://voyageatl.com/interview/conversations-with-jack-and-the-other/",
      id: "9",
    },
  ];

  return (
    <>
      <div className="press-links-container">
        <ul>
          {pressLinks.map((item, i) => (
            <motion.li key={item.id} className="press-link"
            initial={{ opacity: 0, y: -300}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <a href={item.link} target="_blank">
                <h2>{item.title}</h2>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
