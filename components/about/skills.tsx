import { skills } from "@/lib/content";
import TechExp from "../ui/techExp";

const cExp = (commercialExp: boolean) => (commercialExp ? "cexp" : "");

export default function Skills() {
  return (
    <div className="skills">
      <h4>Skills</h4>
      <TechExp />
      <div className="skills-list">
        <article className="frontend">
          <h5>Frontend</h5>
          {skills.frontend.map(({ name, commercialExp }, idx) => (
            <span key={`fe-${idx}`} className={cExp(commercialExp)}>
              {name}
            </span>
          ))}
        </article>
        <article className="backend">
          <h5>Backend</h5>
          {skills.backend.map(({ name, commercialExp }, idx) => (
            <span key={`be-${idx}`} className={cExp(commercialExp)}>
              {name}
            </span>
          ))}
        </article>
        <article className="cicd">
          <h5>Pipeline & CI/CD</h5>
          {skills.cicd.map(({ name, commercialExp }, idx) => (
            <span key={`pi-${idx}`} className={cExp(commercialExp)}>
              {name}
            </span>
          ))}
        </article>
        <article className="tools">
          <h5>Tools & Methods</h5>
          {skills.tools.map(({ name, commercialExp }, idx) => (
            <span key={`to-${idx}`} className={cExp(commercialExp)}>
              {name}
            </span>
          ))}
        </article>
      </div>
    </div>
  );
}
