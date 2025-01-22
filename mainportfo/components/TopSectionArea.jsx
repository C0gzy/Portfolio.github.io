import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CVLink from "../Images/Tom_CV2025.pdf";

function TopSection() {
    return (
		<section className="TopSection">
		<h1 className="TopSectionText">
			&lt;TC&gt;

		</h1>
		<p className="TopSectionDesc">
			Hello , I'm Tom Cogzell and im currently a Student at the University of Plymouth studying software Engineering. This website is a brief showcase of what i've worked on and what i'm currently working on.
		</p>
		<div className="ResumeLink">
			<a className="AResumeLink" href={CVLink}>My Resume 
			 <FontAwesomeIcon icon={faLink} />
			</a>
		</div>
		</section>
    );
}

export default TopSection;