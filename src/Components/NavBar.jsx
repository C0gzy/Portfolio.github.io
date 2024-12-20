import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function TopBarLinks(props) {
    return (
        <a id="Link" href={props.Link}> {props.icon}  </a>
    );
}

function TopBarNav() {
    return (
		<nav className="TopBar" >
			<section className="TopBar-Left">
				
			</section>

			<div className="TopBar-Right">
                <TopBarLinks Link={"https://www.linkedin.com/in/tom-cogzell-878bb22b2/"} icon={<FontAwesomeIcon icon={faLinkedinIn} />} />
                <TopBarLinks Link={"https://github.com/C0gzy"} icon={<FontAwesomeIcon icon={faGithub} />} />
			</div>
		</nav>
    );
  }
  


export default TopBarNav;

