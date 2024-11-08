'use client';
import Link from 'next/link';
import NextImg from '../common/next-img';

type Props = {
  data: any;
};

const Content = ({ data }: Props) => {
  return (
    <>
      <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
        {/* section 1 */}
        <div className="grid grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-none lg:gap-5 lg2:gap-[30px]">
          <div
            className="flex w-full flex-col justify-between rounded-[12px] bg-[url('/assets/image/bg-card.png')] bg-cover bg-center p-5 lg:rounded-3xl lg2:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 2xl:gap-4">
              <span className="text-[20px] font-bold leading-normal text-[#FFF] lg:text-[24px] lg:leading-[40px] lg2:text-[32px] 2xl:text-[38px] 2xl:leading-[48px] 3xl:text-[40px] 3xl:leading-[50px]">
                {data.card1.content_card.title}
              </span>
              <span className="text-[14px] font-medium leading-[22px] text-[#FFF] lg:text-[18px] lg:leading-[28px]">
                {data.card1.content_card.sub_title}
              </span>
            </div>
            <div className="flex gap-5 md:gap-3 lg:gap-6">
              {data.card1.chats.map(({ chat }: any, index: number) => {
                return (
                  <Link
                    href={chat.url}
                    className="flex flex-col gap-3"
                    key={index}
                  >
                    <div className="relative h-10 w-10 lg:h-[50px] lg:w-[50px]">
                      <NextImg
                        src={process.env.REACT_APP_IMG_URL + chat.icon}
                        alt="Capi"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold leading-normal text-[#FFF]">
                        {chat.title}
                      </span>
                      <span className="text-xs font-medium leading-normal text-[#FFF]">
                        {chat.total}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div
            className="flex w-full items-end rounded-[12px] bg-[url('/assets/image/bg-card2.png')] bg-cover bg-center p-5 lg:rounded-3xl lg2:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[20px] font-bold leading-normal text-[#111013] lg:text-[24px] lg:leading-[40px] lg2:text-[32px] 2xl:text-[38px] 2xl:leading-[48px] 3xl:text-[40px] 3xl:leading-[50px]">
                {data.card2.content_card.title}
              </span>
              <span className="text-sm font-medium text-[#111013] lg:text-[18px] lg:leading-[28px]">
                {data.card2.content_card.sub_title}
              </span>
            </div>
          </div>
          <div
            className="relative flex flex-col justify-between rounded-[12px] bg-[#00D763] p-5 lg:rounded-3xl lg2:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#014227] lg:h-[60px] lg:w-[60px] lg:rounded-[20px] lg2:h-20 lg2:w-20">
                <div className="relative h-3 w-3 lg:h-[18px] lg:w-[18px] lg2:h-6 lg2:w-6">
                  <NextImg
                    src="/assets/icons/share.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <h3
                dangerouslySetInnerHTML={{
                  __html: data.card3.content_card.title,
                }}
                className="mb-2 mt-3 text-[20px] font-bold leading-normal text-[#014227] lg:mb-3 lg:mt-6 lg:text-[24px] lg:leading-[40px] lg2:text-[32px] 2xl:mb-4 2xl:mt-8 2xl:text-[38px] 2xl:leading-[48px] 3xl:text-[40px] 3xl:leading-[50px]"
              >
                {/* {data.card3.content_card.title} */}
              </h3>
              <span
                dangerouslySetInnerHTML={{
                  __html: data.card3.content_card.sub_title,
                }}
                className="text-[14px] font-medium leading-[22px] text-[#126240] lg:text-base lg:leading-[28px] lg2:text-[18px]"
              >
                {/* {data.card3.content_card.sub_title} */}
              </span>
            </div>
            <Link href={data.card3.cta.url}>
              <button className="btn active mt-3 flex items-center !bg-[#FFF] !text-[#014227] md:mt-6 lg:mt-12 2xl:mt-[42px] 3xl:mt-[70px]">
                {data.card3.cta.content_cta}
                <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                  <NextImg
                    src="/assets/icons/UPs.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
