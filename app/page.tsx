import {Anton} from 'next/font/google'

const anton = Anton({weight: '400', subsets: ['latin']})

export default function Home() {
  return (
    <main className={`${anton.className} bg-[#F6F2F2] text-[#1E1D1E]`}>
      <div className="grid grid-cols-7 grid-rows-5 h-screen">
        <div className="row-span-4 row-start-0 items-center flex justify-center LeftToRight "><div className='transform -rotate-90 text-8xl whitespace-nowrap m-0 p-0'>test & test & test</div></div>
        <div className="col-span-5 row-span-4 row-start-0">
          <h1 className={`text-[400px]  tracking-widest`}>john</h1>
        </div>
        <div className="row-span-4 col-start-7 row-start-0 items-center flex justify-center RightToLeft"><div className='rotate-90 text-8xl whitespace-nowrap '>nasa & this & that</div></div>
        <div className="col-span-7 row-start-5 text-8xl overflow-x-hidden"><h1>yes</h1></div>

      </div>
      
    
    </main>
  )
}
