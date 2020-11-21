import React from 'react';

const Hero = (handleLogOut) => {
    return (
       <section className="hero">
           <nav>
               <h2>Welcome</h2>
               <button onclick={handleLogOut}>LogOut</button>
           </nav>
       </section>
    )
}

export default Hero
