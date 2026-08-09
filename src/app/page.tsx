import Image from "next/image";
import { site } from "@/content/site";
import { socials } from "@/content/socials";

export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="/imgs/GS-Photo.webp"
              alt="gscripts"
              className="shadow-dark"
              width={280}
              height={280}
            />
            <h1>{site.name}</h1>
            <p>{site.role}</p>
            <div className="social-links">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
