import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ProjectTags(props) {
    return <div className="ProjectTag">{props.Name}</div>
}

function ProjectSquare(props) {
    const ProjectTagMap = props.ProjectTag.map((ProjectTag) => 
        <ProjectTags Name={ProjectTag} />
    );

  return (
    <div id="ProjectSquare">
					
        <p style={{TextAlign: 'Center'}}>{props.Title}</p>
        <img className="ImageDesc" src={props.ProjectImage} alt="The Tower" />

        <section className="ProjectTags">
            {ProjectTagMap} 
        </section>
        <section className="ProjectText">
            <h3 className="Desc">
                {props.Desc}
            </h3>

        </section>
        <div className="ProjectLinkFlex">
        <a className="ProjectLink" href={props.ProjectLink}>Project Link
        <FontAwesomeIcon icon={faLink} />
        </a>
        </div>
    </div>
    
  );
}

export default ProjectSquare;