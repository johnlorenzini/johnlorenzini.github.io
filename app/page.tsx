import { Playfair_Display } from "next/font/google";
const Playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <main className={`h-[400vh] uppercase bg-zinc-900 tracking-tighter`}>
      <div className="relative h-screen overflow-hidden">
        <div className="content overflow-x-hidden">
          <div className={`${Playfair.className}`}>
            <h1 className="test tracking-tight text-[16rem] pt-40 leading-none text-zinc-800">
              <span>john</span>
              <br />
              <span>lorenzini</span>
            </h1>
          </div>
        </div>
        <div className="marquee-container invisible md:visible">
          <div className="left-marquee">
            <a className="marquee cursor-pointer bg-zinc-900 leading-none">
              <span className="py-4">
                data analytics • cloud computing • web development • machine
                learning •&nbsp;
              </span>
            </a>
            <a className="marquee marquee2 cursor-pointer leading-none">
              <span className="py-4">
                data analytics • cloud computing • web development • machine
                learning •&nbsp;
              </span>
            </a>
          </div>
          <div className="top-marquee">
            <a className="marquee cursor-pointer leading-none bg-zinc-900">
              <span className="py-4">
                computer science @ uc irvine • computer science @ uc irvine
                •&nbsp;
              </span>
            </a>
            <a className="marquee marquee2 cursor-pointer leading-none">
              <span className="py-4">
                computer science @ uc irvine • computer science @ uc irvine
                •&nbsp;
              </span>
            </a>
          </div>
          <div className="right-marquee">
            <a className="marquee3 cursor-pointer bg-zinc-900 leading-none">
              <span className="py-4">
                nasa • d-bat • springs creative • pepsico •&nbsp;
              </span>
            </a>
            <a className="marquee3 marquee4 cursor-pointer leading-none">
              <span className="py-4">
                nasa • d-bat • springs creative • pepsico •&nbsp;
              </span>
            </a>
          </div>
          <div className="bottom-marquee">
            <a className="marquee cursor-pointer leading-none bg-zinc-900">
              <span className="py-4">
                best overall @ hackuci 2023 • 3rd place @ zothacks 2021 • 3rd
                place @ webreg hackathon 2023 •&nbsp;
              </span>
            </a>
            <a className="marquee marquee2 cursor-pointer leading-none">
              <span className="py-4">
                best overall @ hackuci 2023 • board's pick @ uci datathon 2023 •
                3rd place @ webreg hackathon 2023 •&nbsp;
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
