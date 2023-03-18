import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {timelineCardDetails} = props
  const {
    imageUrl,
    duration,
    projectUrl,
    projectTitle,
    description,
  } = timelineCardDetails
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-and-time">
        <h1 className="title">{projectTitle}</h1>
        <div className="icon-and-time">
          <AiFillCalendar />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        rel="noreferrer"
        className="project-link"
        href={projectUrl}
        target="_blank"
      >
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
