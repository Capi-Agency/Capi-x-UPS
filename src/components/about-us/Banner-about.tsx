'use client';
import React from 'react';
import NextImg from '../common/next-img';
import { TypeAnimation } from 'react-type-animation';
type Props = {
  data: any;
};

const BannerAbout = ({ data }: Props) => {
  return (
    <>
      <div className="bg-[#00D763] pb-10 pt-16 md:pt-12 lg:pb-[60px] lg:pt-[76px] xl:pb-[70px] 3xl:pt-[100px]">
        <div className="custom-container relative flex flex-col items-center md:flex-row">
          <div
            className="w-full md:w-[55%] lg2:w-[50%]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <div className="2xl-h-[520px] z-1 relative h-[240px] w-full sm:h-[261px] md:h-[320px] lg:h-[430px] xl:h-[450px] 3xl:h-[550px]">
              <NextImg
                src={process.env.REACT_APP_IMG_URL + data.cover}
                alt="Capi"
                objectFit="contain"
                className=""
              />
            </div>
          </div>
          <div
            className="right-6 z-10 flex flex-col items-end justify-end self-end text-right md:absolute"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <h1 className="font-hanken-grotesk text-right text-[32px] font-bold tracking-[-0.64px] text-[#0F1B0E] md:text-[40px] md:tracking-[-0.8px] lg:text-[56px] lg:leading-[70px] lg:tracking-[-1.08px] lg2:text-[64px] lg2:leading-[80px] lg2:tracking-[-1.28px] xl:text-[70px] xl:leading-[86px] xl:tracking-[-1.4px] 2xl:text-[80px] 2xl:leading-[96px] 2xl:tracking-[-1.6px] 3xl:text-[100px] 3xl:leading-[120px] 3xl:tracking-[-2px]">
              {data.titles.title.map(({ text }: any, index: number) => {
                return (
                  <p key={index}>
                    {text} <br />
                  </p>
                );
              })}
            </h1>
            <TypeAnimation
              className="font-hanken-grotesk text-right text-[32px] font-bold tracking-[-0.64px] text-white md:text-[40px] md:tracking-[-0.8px] lg:text-[56px] lg:leading-[70px] lg:tracking-[-1.08px] lg2:text-[64px] lg2:leading-[80px] lg2:tracking-[-1.28px] xl:text-[70px] xl:leading-[86px] xl:tracking-[-1.4px] 2xl:text-[80px] 2xl:leading-[96px] 2xl:tracking-[-1.6px] 3xl:text-[100px] 3xl:leading-[120px] 3xl:tracking-[-2px]"
              sequence={[
                `${data.titles.change_text[0].text}`, // Types 'One'
                3000, // Waits 3s
                `${data.titles.change_text[1].text}`, // Deletes 'One' and types 'Two'
                3000, // Waits 3s
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </div>
        </div>
        <div className="custom-container mt-6 flex items-end justify-between lg:mt-[30px]">
          <div
            className="w-full border-t-[1px] border-[#000] pt-3 md:pt-6 lg:w-[400px] lg:pt-[40px]"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <p className="text-[14px] font-medium leading-[22px] text-[#074E28] lg:text-[20px] lg:leading-[28px]">
              {data.sub_title}
            </p>
          </div>
          <div
            className="hidden cursor-pointer lg:block"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.8983 14.9735C46.8983 14.4763 46.7008 13.9994 46.3491 13.6477C45.9975 13.2961 45.5206 13.0985 45.0233 13.0985L23.5626 13.0985C22.5271 13.0985 21.6876 13.938 21.6876 14.9735C21.6876 16.0091 22.5271 16.8485 23.5626 16.8485L40.499 16.8485L13.6459 43.7016C12.9137 44.4338 12.9137 45.621 13.6459 46.3533C14.3782 47.0855 15.5653 47.0855 16.2976 46.3533L43.1483 19.5025L43.1483 36.4342C43.1483 37.4698 43.9878 38.3092 45.0233 38.3092C46.0589 38.3092 46.8983 37.4698 46.8983 36.4342L46.8983 14.9735Z"
                  fill="#014227"
                />
              </svg>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAbout;
