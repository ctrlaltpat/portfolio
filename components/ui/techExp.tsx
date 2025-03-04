import { CSSProperties, Suspense } from "react";
import {
  SiAngular,
  SiChakraui,
  SiCss3,
  SiCypress,
  SiElixir,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIterm2,
  SiJavascript,
  SiJest,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiSass,
  SiScala,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiWordpress,
} from "react-icons/si";

const icons = [
  SiAngular,
  SiChakraui,
  SiCss3,
  SiCypress,
  SiElixir,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIterm2,
  SiJavascript,
  SiJest,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiSass,
  SiScala,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiWordpress,
];

export default function TechExp() {
  return (
    <div className="tech-exp">
      <div
        className="tech-exp-list"
        style={{ "--tech-exp-icon-q": icons.length } as CSSProperties}
      >
        <Suspense>
          {icons.map((Icon, pos) => (
            <div
              key={pos}
              style={{ "--tech-exp-icon-p": pos } as CSSProperties}
            >
              <Icon />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
