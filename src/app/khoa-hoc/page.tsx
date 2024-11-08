import CourseBanner from '@/components/course/CourseBanner';
import CourseContent from '@/components/course/CourseContent';
import CourseContent2 from '@/components/course/CourseContent2';
import CourseSchedule from '@/components/course/CourseSchedule';
import CourseService from '@/components/course/CourseService';
import TagsPage from '@/components/tags/page';
import { fnGetPage } from '@/services/page';
import React from 'react';

type Props = {};

const CoursePage = async (props: Props) => {
  const data = await fnGetPage('ups-academy-GK');
  const dataCourse = data?.data?.data?.pages_by_id?.raw_content;
  return (
    <div>
      {dataCourse &&
        dataCourse?.contents.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.banner && <CourseBanner data={datasection.banner} />}
              {datasection.newbie && (
                <CourseContent data={datasection.newbie} />
              )}
              {datasection.academy_service && (
                <CourseService data={datasection.academy_service} />
              )}
              {datasection.advanced && (
                <CourseContent2 data={datasection.advanced} />
              )}
              {datasection.tags && <TagsPage data={datasection.tags} />}
            </div>
          );
        })}
      <CourseSchedule />
    </div>
  );
};

export default CoursePage;
