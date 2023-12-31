import { Link, useLocation } from "react-router-dom";
import { ContainerMenu, ContainerPerfil, DivImg, Li, MenuNav } from "./styles";
import {PiHouseLineLight, PiCode, PiUserCircleLight, PiGraduationCapLight} from "react-icons/pi"
export default function MenuSecondary() {
  const location = useLocation()
  console.log(location)
  return (
    <ContainerMenu>
      <ContainerPerfil>
        <Link to="/" className="container-img">
          <div className="bg">
            <DivImg />
          </div>
          <h2>João Victor</h2>
        </Link>

        <a href=""></a>
      </ContainerPerfil>

      <MenuNav>
        <ul className="navList">
          <Li>
            <Link to={"/"}>
             <PiHouseLineLight/> <span>Home</span>
            </Link>
          </Li>
          <Li>
            <Link to={"/projetos"}>
             <PiCode/> <span>Projetos</span>
            </Link>
          </Li>
          <Li>
            <Link to={"/certificados"}>
             <PiGraduationCapLight/> <span>Certificados</span>
            </Link>
          </Li>
          <Li>
            <Link to={"/sobre"}>
             <PiUserCircleLight/> <span>Sobre</span>
            </Link>
          </Li>
         
        </ul>
      </MenuNav>
      
    </ContainerMenu>
  );
}
