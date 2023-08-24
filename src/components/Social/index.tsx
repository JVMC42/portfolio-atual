import { ContainerSocials, IconSocial } from "./styles";
import logoCurriculo from "../../assets/images/logoCurriculo.svg";
import logoLinkedin from "../../assets/images/linkedinLogo.svg";
import gitHubLogo from "../../assets/images/githublogo.svg";

export default function Social() {
  return (
    <ContainerSocials>
      <IconSocial href="https://drive.google.com/file/d/1U4cug-2-VeZqclMbjNslvYHWcFgn2qFH/view?usp=sharing" target="_blank">
        <img src={logoCurriculo} alt="" title="Baixar Currículo" />
      </IconSocial>

      <IconSocial href="https://github.com/JVMC42" target="_blank">
        <img src={gitHubLogo} alt="" title="Meu GitHub" />
      </IconSocial>

      <IconSocial href="https://www.linkedin.com/in/joaovictormariano/" target="_blank">
        <img src={logoLinkedin} alt="" title="Meu Linkedin" />
      </IconSocial>
    </ContainerSocials>
  );
}
