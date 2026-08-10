/** @type {import('next').NextConfig} */
const nextConfig = {
  // /about, /portfolio e /contact erano pagine vere prima della Tappa 7:
  // eventuali link o segnalibri esterni puntano ancora lì. /blog e
  // /services non sono mai stati linkati né indicizzati, quindi per loro
  // il 404 di default è la risposta corretta, non un redirect.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/portfolio", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#about", permanent: true },
    ];
  },
};

module.exports = nextConfig;
