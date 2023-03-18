import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {timelineCardDetails} = props
  const {courseTitle, duration, tagsList, description} = timelineCardDetails
  return (
    <div className="course-container">
      <div className="title-and-duration">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-section">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => (
          <li className="tag" key={eachTag.id}>
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
