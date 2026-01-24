export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string;
  linkText: string;
}

export const projects: Project[] = [
  {
    id: "fincra",
    title: "Fincra NodeJS SDK",
    description:
      "A NodeJS sdk which leverages fincra's API to enable developers build fintech products seamlessly",
    imageUrl:
      "https://res.cloudinary.com/iservecloud/image/upload/v1657739015/new%20portfolio/fincra_vv6oyf.jpg",
    imageAlt: "fincra",
    projectUrl: "https://www.npmjs.com/package/fincra-node-sdk",
    linkText: "View Project",
  },
  {
    id: "thepeer",
    title: "Thepeer Python SDK",
    description:
      "Official python sdk for interacting with thepeer payment processing infrastructure",
    imageUrl:
      "https://res.cloudinary.com/iservecloud/image/upload/v1657739073/thepeer_jb1i4j.png",
    imageAlt: "thepeer",
    projectUrl: "https://pypi.org/project/pythepeer/",
    linkText: "View Project",
  },
  {
    id: "fuse-wallet",
    title: "Fuse-Wallet",
    description:
      "A simple fintech wallet system developed with NestJS and Typeorm(MySQL)",
    imageUrl:
      "https://res.cloudinary.com/iservecloud/image/upload/v1643400656/new%20portfolio/download_tlgqdl.jpg",
    imageAlt: "ecommerce site",
    projectUrl: "https://documenter.getpostman.com/view/11690328/UzBiNnzU",
    linkText: "View Project",
  },
  {
    id: "bitfast",
    title: "Bitfast",
    description: "A bitcoin price predictor built with python, fastapi and faunadb",
    imageUrl:
      "https://res.cloudinary.com/iservecloud/image/upload/v1622574264/index_liinkh.jpg",
    imageAlt: "bitfast",
    projectUrl: "https://bitfast.onrender.com/docs",
    linkText: "View Project",
  },
  {
    id: "gocrypto",
    title: "Gocrypto",
    description:
      "A crypto/fiat exchange cli built with go. Get real time USD exchange rates of common crypto coins such as Bitcoin (BTC), Ether(ETH), Dogecoin(DOGE), Solana(SOL), Shiba(SHIB) and Tether(USDT).",
    imageUrl:
      "https://res.cloudinary.com/iservecloud/image/upload/v1699487702/cryptocurrency_bk4m8a.png",
    imageAlt: "gocrypto",
    projectUrl: "https://pkg.go.dev/github.com/E-wave112/gocrypto",
    linkText: "View Project",
  },
];
