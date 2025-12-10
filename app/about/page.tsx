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
        <Suspense >
          <video
            className="bg-video"
            playsInline
            autoPlay
            loop
            muted
            preload="auto"
            controls={false}
          >
            <source
              // src="https://strapi.apps.ctrlaltpat.com/uploads/1000053636_4089bad12d.MP4"
              // src="https://strapi.apps.ctrlaltpat.com/uploads/RP_Replay_Final1726788595_8dd5986d1f.mov"
              src="https://strapi.apps.ctrlaltpat.com/uploads/Year_3_of_roller_skating_86243611ee.mov"
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
            <h3>Full Stack Developer • Skater • British-Bajan</h3>
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
                <strong>{title}</strong> - {company} ({tenure})
              </h5>
              <p>{description}</p>
              <ul>
                {work.map((a, i) => (
                  <li key={a.substring(0, 3) + i}>{a}</li>
                ))}
              </ul>
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
