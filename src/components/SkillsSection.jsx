import NavDown from './NavDown'
import SkillsCarousel from './SkillsCarousel'

function SkillsSection() {
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center items-center">
        <SkillsCarousel />
        <div className='hidden md:flex'>
          <NavDown target="#projects" delay="800" anchor={"#skills"} refs="projects" className="hidden md:visible" />
        </div>
        
    </div>
    
  )
}

export default SkillsSection