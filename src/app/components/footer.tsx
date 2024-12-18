import { FaCodepen } from 'react-icons/fa';
import { GrGithub, GrLinkedin } from 'react-icons/gr';

const socialLinks = [
  { href: 'https://github.com/ctrlaltpat', icon: GrGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/patrickcpilgrim/', icon: GrLinkedin, label: 'LinkedIn' },
  { href: 'https://codepen.io/ctrlaltpat', icon: FaCodepen, label: 'CodePen' },
] as const;

const Footer = () => {
  return (
    <footer className="bg-black mt-auto mx-4 mb-2 rounded-lg">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-foreground/80">
          CtrlAltPat &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
