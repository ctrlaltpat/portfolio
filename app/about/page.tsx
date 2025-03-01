"use server";

import { Suspense } from "react";
import Image from "next/image";
import { experience, intro } from "@/lib/content";
import Skills from "@/components/about/skills";
import ContactForm from "@/components/about/contact-form";

export default async function About() {
  return (
    <div className="about">
      <h2>{`<Patrick />`}</h2>
      <section>
        <Suspense fallback={<div className="bg-vid-fb"></div>}>
          <video className="bg-video" autoPlay loop muted preload="none">
            <source
              src="https://strapi.apps.ctrlaltpat.com/uploads/1000053636_4089bad12d.MP4"
              type="video/mp4"
            />
          </video>
        </Suspense>
        <div className="intro">
          <Image
            src="https://avatars.githubusercontent.com/u/10384309?v=4"
            alt="CtrlAltPat"
            width={256}
            height={256}
          />
          <div>
            <h3>Software Engineer • Skater • British-Bajan</h3>
            <p>London, UK</p>
            <br />
            {intro.map((p) => (
              <p key={p.substring(0, 3)}>{p}</p>
            ))}
          </div>
        </div>
        <Skills />
        <div className="profile">
          <h4>Experience</h4>
          {experience.map(({ title, company, tenure, description, work }) => (
            <div className="work" key={company.substring(0, 3)}>
              <h5>
                {title} - {company} ({tenure})
              </h5>
              <div>
                <p>{description}</p>
                {work.map((a, i) => (
                  <div key={a.substring(0, 3) + i}>{a}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
