import { Playfair_Display } from "next/font/google";
const Playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <main className={`h-[400vh] uppercase bg-[#E8E3D0] tracking-tighter`}>
      <div className="relative h-screen overflow-hidden">
        <div className="content overflow-x-hidden">
          <div className={`${Playfair.className}`}>
            <h1 className="test tracking-tight text-[15rem] leading-none text-zinc-800">
              <span>john</span>
              <br />
              <span>lorenzini</span>
            </h1>
          </div>
        </div>
        <div className="marquee-container invisible md:visible">
          <div className="left-marquee">
            <a className="marquee cursor-pointer bg-[#E8E3D0] leading-none">
              <span className="py-4">
                data analytics, cloud computing, web development, machine
                learning,&nbsp;
              </span>
            </a>
            <a className="marquee marquee2 cursor-pointer leading-none">
              <span className="py-4">
                data analytics, cloud computing, web development, machine
                learning,&nbsp;
              </span>
            </a>
          </div>
          <div className="top-marquee">
            <a className="marquee cursor-pointer leading-none bg-[#E8E3D0]">
              <span className="py-4">
                computer science @ uc irvine | computer science @ uc irvine
                |&nbsp;
              </span>
            </a>
            <a className="marquee marquee2 cursor-pointer leading-none">
              <span className="py-4">
                computer science @ uc irvine | computer science @ uc irvine
                |&nbsp;
              </span>
            </a>
          </div>
          <div className="right-marquee">
            <a className="marquee3 cursor-pointer bg-[#E8E3D0] leading-none">
              <span className="py-4">
                nasa, d-bat, springs creative, pepsico,&nbsp;
              </span>
            </a>
            <a className="marquee3 marquee4 cursor-pointer leading-none">
              <span className="py-4">
                nasa, d-bat, springs creative, pepsico,&nbsp;
              </span>
            </a>
          </div>
          <div className="bottom-marquee">
            <a className="marquee cursor-pointer leading-none bg-[#E8E3D0]">
              <span className="py-4">
                computer science & informatics @ uc irvine | computer science &
                informatics @ uc irvine |&nbsp;
              </span>
            </a>
            <a className="marquee marquee2 cursor-pointer leading-none">
              <span className="py-4">
                computer science & informatics @ uc irvine | computer science &
                informatics @ uc irvine |&nbsp;
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
