import CourseBanner from '@/components/course/CourseBanner';
import CourseContent from '@/components/course/CourseContent';
import CourseContent2 from '@/components/course/CourseContent2';
import CourseSchedule from '@/components/course/CourseSchedule';
import CourseService from '@/components/course/CourseService';
import TagsPage from '@/components/tags/page';
import { fnGetPage } from '@/services/page';
import { Metadata, ResolvingMetadata } from 'next';
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
              {datasection.newbie && <CourseSchedule />}
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
    </div>
  );
};

export default CoursePage;
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  return {
    title: 'Trung tâm đào tạo UPS',
    description: 'Trung tâm đào tạo và chia sẻ kiến thức',
    openGraph: {
      images: ['/assets/icons/logo-bt.svg'],
    },
  };
}
