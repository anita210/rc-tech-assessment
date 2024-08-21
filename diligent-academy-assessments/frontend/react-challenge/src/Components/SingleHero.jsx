export default function SingleHero({hero, handleClick}){
    return(
        <span
        className="hero-item"
        key={hero.id} 
        onClick={()=>handleClick(hero.id)} 
        style={{
            color: hero.available ? "limegreen" : "crimson", 
          }}>
        {hero.id}. {hero.name} {hero.available && <a className="available-label">"Available"</a>} {/*needs to ne smalller font size */}
      </span>
    )
}