import { BsTelegram, BsTwitter, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/Dclassicgenius" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/itzClassicpat" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://t.me/noblehomme" target="_blank">
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
