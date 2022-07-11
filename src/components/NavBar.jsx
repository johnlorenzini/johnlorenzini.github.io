function NavBar() {

  return (
    <>
      <div className='fixed w-full flex flex-row p-5 justify-center scrollBG h-1/7 drop-shadow-2xl'>
        
        <a href='#about' className='z-1 px-5'>about</a>
        <a href='#skills' className='z-2 px-5'>skills</a>
      </div>
    </>
  )
}

export default NavBar