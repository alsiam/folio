import Image from 'next/image'
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
            <h1>Simone Guarnuccio</h1>
            <p>Frontend Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGx5HKBKsr_TQAAAZBj64m4B-v-SF6jUFHCW1zj2Jp0chYKE-nSMUpwmBs-U1YKTNRb7Zgx6Z_okklU2MrdF3nuimoWHZjELM9rI5HSDfVh1yQShbYYsWPUO3vKApgv6-fa5Y4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsimone-guarnuccio-7779a4166%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/grnsmn" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/simoneguarnuccio" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.facebook.com/simone.guarnuccio" target="_blank">
                <i className="fa fa-facebook" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
