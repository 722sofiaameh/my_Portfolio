import Link from "next/link";

 const ProjectNavbar = () => {
  return (
    <div className="s-header bg-black">
      <nav className="row  flex items-center justify-between container mx-auto pt-6 pb-6 bg-black">
        <div className="flex justify-center items-center gap-10">
        <div className="s-header__block">
                    <div className="s-header__logo">
                        <a className="logo" href="index.html" style={{color
                        :'white'}}>
                        
                            sOf-fOlIo
                        </a>
                    </div>

                    <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                </div>
          <div className="loader"></div>
        </div>
        <ul className="s-header__menu-links flex gap-10 items-center font-mulish text-lg text-white">
                        <li className="current"><a className="smoothscroll" href="#intro">Intro</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#works">Works</a></li>
                        <li><a className="smoothscroll" href="#footer">Contact</a></li>
                   
        </ul>
      </nav>
    </div>
  );
};
export default ProjectNavbar;