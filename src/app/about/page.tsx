import type { NextPage } from "next";
import Link from "next/link";
import { LuCalendar } from "react-icons/lu";
import Tecnologies from "../../components/technologies";
import { jobs } from "@/content/experience";
import { education } from "@/content/education";
import { formatJobPeriod } from "@/lib/format";

const About: NextPage = () => {
  return (
    <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Simone Guarnuccio <span>Frontend Developer</span>
                  </h2>
                    <p>I am Simone, an Enthusiastic Developer with experience building beautiful and user-friendly mobile applications using React Native.<br />
                    Currently, I am working with an amazing product team at <Link href="https://www.creationdose.com/">Creationdose</Link>, a creator economy company based in Catania, Italy.
                  <br />
                  </p>
                  <p> I thrive on automating workflows and tackling the challenges of cross-platform development. I am a passionate learner, constantly seeking new advancements in this ever-evolving field.</p>
                </div>
              </div>

              <div className="experience padd-15">
                <h3 className="title">Skills on</h3>
                <div className="row">
                  <Tecnologies />
                </div>
              </div>

              <div className="row">
                <div className="experience padd-15">
                  <h3 className="title">Professional Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {jobs.map((job) => (
                          <div key={job.id} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <LuCalendar size={14} aria-hidden />{" "}
                              {formatJobPeriod(job.start, job.end)}
                            </h6>
                            <h4 className="timeline-title">{job.role}</h4>
                            <p className="timeline-text">
                              {job.company}, {job.location} <br />
                              {job.bullets.map((bullet) => (
                                <span key={bullet}>
                                  • {bullet} <br />
                                </span>
                              ))}
                              {job.links?.map((link, i) => (
                                <span key={link.href}>
                                  {i > 0 && " · "}
                                  <Link href={link.href}>{link.label}</Link>
                                </span>
                              ))}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education padd-15">
                  <h3 className="title">Education and Training</h3>  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {education.map((entry) => (
                          <div key={entry.id} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <LuCalendar size={14} aria-hidden /> {entry.date}
                            </h6>
                            <h4 className="timeline-title">
                              {entry.qualification}
                            </h4>
                            <p className="timeline-text">
                              {entry.institutionHref ? (
                                <Link href={entry.institutionHref}>
                                  {entry.institution}
                                </Link>
                              ) : (
                                entry.institution
                              )}
                              <br />
                              {entry.bullets?.map((bullet) => (
                                <span key={bullet}>
                                  - {bullet} <br />
                                </span>
                              ))}
                              {entry.grade && <>Final grade: {entry.grade}</>}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
