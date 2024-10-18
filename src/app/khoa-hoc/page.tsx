import CourseBanner from '@/components/course/CourseBanner'
import CourseContent from '@/components/course/CourseContent'
import CourseContent2 from '@/components/course/CourseContent2'
import CourseSchedule from '@/components/course/CourseSchedule'
import React from 'react'

type Props = {}

const CoursePage = (props: Props) => {
  return (
    <div>
        <CourseBanner/>
        <CourseContent/>
        <CourseSchedule/>
        <CourseContent2/>
    </div>
  )
}

export default CoursePage