import type { NextPage } from "next";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";
import { projects } from "@/content/projects";

// La vecchia card è una schermata 14rem in object-fit:fill: mostra bene
// uno screenshot reale, non il logo quadrato di RankPong. La vecchia
// pagina sparisce comunque con l'app/portfolio/ in Tappa 7 — per ora
// vediamo solo i progetti con un'immagine adatta a questa forma.
const legacyProjects = projects.filter((p) => p.legacyImage);

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15" />
          </div>
          <div className="row">
            {legacyProjects.map((project) => (
              <div key={project.slug} className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <div className="portfolio-img">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "14rem",
                        }}
                      >
                        <Image
                          src={project.legacyImage!.src}
                          alt={project.legacyImage!.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <h4>{project.title}</h4>
                      <div className="icon">
                        <LuChevronRight aria-hidden />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
