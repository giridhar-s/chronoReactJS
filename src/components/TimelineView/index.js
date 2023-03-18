import {Chrono} from 'react-chrono'
import {useMediaQuery} from 'react-responsive'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const timeLineCategoryConstants = {
  courseCategory: 'COURSE',
  projectCategory: 'PROJECT',
}

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 767px)'})

  const mode = isTabletOrMobile ? 'VERTICAL' : 'VERTICAL_ALTERNATING'

  return (
    <div className="ccbp-timeline-container">
      {/* <h2>MY JOURNEY OF</h2> */}
      <h1>MY JOURNEY OF CCBP 4.0</h1>

      <div className="chrono-container">
        <Chrono
          mode={mode}
          items={items}
          theme={{
            cardBgColor: '#fff',
            cardForeColor: 'violet',
            titleColor: '#1e293b',
            titleColorActive: 'white',
            secondary:
              'linear-gradient(rgba(162, 96, 192, 0.5), rgba(55, 34, 146, 0.5))',
            primary: '#7f4a97',
          }}
        >
          {timelineItemsList.map(eachObject => {
            if (
              eachObject.categoryId === timeLineCategoryConstants.courseCategory
            ) {
              return (
                <div key={eachObject.id}>
                  <CourseTimelineCard timelineCardDetails={eachObject} />
                </div>
              )
            }
            return (
              <div key={eachObject.id}>
                <ProjectTimelineCard timelineCardDetails={eachObject} />
              </div>
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
