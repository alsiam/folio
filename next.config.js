/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Il marquee delle tecnologie passa a next/image 14 URL remoti di Simple
    // Icons: senza questa voce Next 14 lancia "hostname not configured" e la
    // pagina /about non renderizza affatto.
    // Toppa temporanea: alla Tappa 4 le icone diventano componenti
    // react-icons/si, gli URL remoti spariscono e questo blocco si elimina.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/npm/simple-icons@**",
      },
    ],
  },
};

module.exports = nextConfig;
