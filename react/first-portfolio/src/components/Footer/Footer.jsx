import LINKEDIN_ICON from "../../assets/linkedin_icon.svg";
import BEHANCE_ICON from "../../assets/behance_icon.svg";
import GITHUB_ICON from "../../assets/github_icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contatos"
      className="flex min-h-[220px] flex-col justify-between px-4 py-6"
    >
      <section className="flex items-center justify-center gap-6 text-lg lg:justify-between">
        <div>
          <p className="text-gray_200 hidden max-w-[39ch] break-all lg:block">
            Fique à vontade para entrar em contato pelas redes sociais ou pelo
            meu email.
          </p>
        </div>
        <div className="text-center text-white lg:text-right">
          <a
            href="mailto:paulovictordev16@gmail.com"
            className="link mb-2 inline-block"
          >
            paulovictordev16@gmail.com
          </a>
          <address className="not-italic">Rio de Janeiro - Brasil</address>
        </div>
      </section>
      <section className="mt-8 flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <div>
          <p className="text-gray_200 max-w-[37ch] break-all text-center text-sm uppercase">
            &copy; {currentYear} - Desenvolvido por Paulo Victor, todos os
            direitos reservados.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <a
            href="https://www.linkedin.com/in/paulopbi/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LINKEDIN_ICON}
              width={32}
              height={32}
              alt="Linkedin Icon"
            />
          </a>
          <a
            href="https://www.behance.net/paulopbi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={BEHANCE_ICON} width={32} height={32} alt="Behance Icon" />
          </a>
          <a
            href="https://github.com/paulopbi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GITHUB_ICON} width={32} height={32} alt="Github Icon" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
