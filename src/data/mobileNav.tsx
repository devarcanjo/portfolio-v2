import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { BiDevices } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

interface NavigationItem {
  id: number;
  text: string;
  icon: ReactNode;
  href: string;
}

export const data: NavigationItem[] = [
  {
    id: 1,
    text: "Home",
    icon: <FaHome />,
    href: "#home",
  },
  {
    id: 2,
    text: "Sobre",
    icon: <BsFillPersonLinesFill />,
    href: "#about",
  },
  {
    id: 3,
    text: "Tecnologias",
    icon: <BsStack />,
    href: "#technologies",
  },
  {
    id: 4,
    text: "Projetos",
    icon: <BiDevices />,
    href: "#projects",
  },
  {
    id: 5,
    text: "Contato",
    icon: <MdEmail />,
    href: "#contact",
  },
];

