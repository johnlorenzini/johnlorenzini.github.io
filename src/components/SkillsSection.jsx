import NavDown from './NavDown'
import SkillsCarousel from './SkillsCarousel'

function SkillsSection() {
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center items-center">
        <SkillsCarousel />
        <NavDown target="#projects" delay="500" anchor={"#skills"} />
    </div>
    
  )
}

export default SkillsSection