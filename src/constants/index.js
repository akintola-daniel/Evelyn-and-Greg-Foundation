import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { RiMentalHealthLine } from "react-icons/ri";



export const navLinks = [
 {label: "Home", href: "/" },
 {label: "About", href: "/about" },
 {label: "Gallery", href: "/gallery" },
 {label: "Contact Us", href: "/contact" },
];



export const helps= [
 { icon: FaRegHeart, label: "Donate", text: "Your generosity changes lives. Your financial support helps us provide food, shelter, education, and care for orphaned children. Every donation, big or small, makes a lasting impact." },

 { icon: GiReceiveMoney, label: "Sponsor a Child", text: "Transform a life through sponsorship. By sponsoring a child, you provide them with the resources they need for a brighter future—education, healthcare, and emotional support. Your commitment gives them hope and stability."},

 { icon: MdOutlineShare, label: "Spread The Word", text: "Be a voice for orphans. Share our mission with your friends, family, and community. The more people who know about us, the greater the impact we can make together."},

 { icon: MdOutlineVolunteerActivism, label: "Volunteer", text: "Give your time, change a life. Whether through mentorship, skills training, or event support, your time and talents can make a difference in the lives of these children."},


];




export const projects= [
 { icon: IoFastFood, label: "Feeding Supplies", text: "Our goal is to provide 10,000+ meals to orphaned children, ensuring no child goes hungry." },

 { icon: FaGraduationCap, label: "School Fees Payment", text: "We aim to fund the education of 500+ children also providing 2,000+ school supplies, giving them the opportunity for a brighter future."},

 { icon: IoShirtOutline, label: "Clothing Support", text: "Our mission is to provide new clothes and essentials to orphans, ensuring they are warm, comfortable, and confident."},

 { icon: RiMentalHealthLine, label: "Emotional & Mental Support", text: "Beyond physical needs, we are committed to offering counseling, mentorship, and love, so every child knows they are valued and never alone."},
];



export const footerLinks = [
 { label: "Quick Links",
     links: [
         { name: "Home", link: "/" },
         { name: "About Us", link: "/" },
         { name: "Gallery", link: "/" },
         { name: "Contact Us", link: "/" },
     ],
 },

 { label: "Get Involved",
  links: [
      { name: "Donate", link: "/" },
      { name: "Volunteer", link: "/" },
      { name: "Spread the Word", link: "/" },
      { name: "Partner With Us", link: "/" },
  ],
},

{ label: "Reach Out",
 links: [
     { name: "info@evelynandgreg.org", link: "/" },
     { name: "+234 123 456 7890", link: "/" },
     { name: "Lagos, Nigeria", link: "/" },
 ],
},
];



export const contacts = [
 {
     icon: FaPhone,
     label: "Call Us",
     info: "+234 810 704 0704", 
     
 },

 {
  icon: CiMail,
  label: "Email Us",
  info: "theevelynandgregfoundation@gmail.com", 
},
];

export const contactInfo = [
    { label: "Name"},
    { label: "Email Address"},
    { label: "Subject"},
   ]


