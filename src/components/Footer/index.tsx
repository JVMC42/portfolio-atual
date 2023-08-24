import { ContainerFooter } from "./styles";
import logoLinkedin from "../../assets/images/linkedinLogo.svg";
import gitHubLogo from "../../assets/images/githublogo.svg";
import logoCurriculo from "../../assets/images/logoCurriculo.svg";

export default function Footer() {
  return (
    <ContainerFooter>
      <h4> © 2023 João Victor</h4>

      <div className="linksSociais">
        <a
          href="#"
          target="_blank"
        >
          <img src={logoCurriculo} alt="" title="Baixar Currículo" />
        </a>

        <a href="https://github.com/JVMC42" target="_blank">
          <img src={gitHubLogo} alt="" title="Meu GitHub" />
        </a>

        <a href="https://www.linkedin.com/in/joaovictormariano/" target="_blank">
          <img src={logoLinkedin} alt="" title="Meu Linkedin" />
        </a>
      </div>
    </ContainerFooter>
  );
}
