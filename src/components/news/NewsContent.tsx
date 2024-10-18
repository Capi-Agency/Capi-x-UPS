"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import NextImg from "../common/next-img";
import NewsContent2 from "./NewsContent2";
import TagsPage from "../tags/page";

const NewsContent = () => {
  const categories = [
    { id: 1, name: "Biến động thị trường" },
    { id: 2, name: "Báo cáo ngày" },
    { id: 3, name: "Phân tích từ UPS" },
    { id: 4, name: "Sự kiện doanh nghiệp" },
    { id: 5, name: "Tin đấu giá" },
    { id: 6, name: "Tin nội bộ UPS" },
  ];

  const [currentCategory, setCurrentCategory] = useState<number>(
    categories[0].id
  );

  const handleCategoryClick = (value: string) => {
    setCurrentCategory(Number(value));
  };

  const renderContent = () => {
    switch (currentCategory) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-[786px,auto]">
              {/* box left */}
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-5">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                    <div className="bg-[#C7C7C7] w-full h-[1px] my-6"></div>
                    <div className="flex flex-col gap-5">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full h-full ">
                    <NextImg
                      src="/assets/image/news.jpg"
                      alt="Capi"
                      objectFit="cover"
                      className="rounded-[20px]"
                    />
                  </div>
                </div>
                <div className="bg-[#C7C7C7] w-full h-[1px] my-8"></div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="relative w-full h-full ">
                    <NextImg
                      src="/assets/image/news.jpg"
                      alt="Capi"
                      objectFit="cover"
                      className="rounded-[20px]"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                    <div className="bg-[#C7C7C7] w-full h-[1px]"></div>
                    <div className="flex flex-col gap-5">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                  </div>
                </div>
                {/* End news hot */}
                <div className="bg-[#0F1B0E] rounded-[16px] px-10 py-[30px] mt-8 flex items-center justify-between">
                  <p className="text-[40px] font-semibold text-[#FFF]">
                    Kết nối cùng <span className="text-[#02E56A]">UPS!</span>
                  </p>
                  <button className="flex items-center gap-3 bg-[#242733] py-4 px-6 rounded-[40px] text-[#02E56A] font-bold text-[18px] leading-normal hover:shadow-[-2px_3px_0px_0px_#00813B]">
                    Mở tài khoản ngay
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                    >
                      <path
                        d="M0.85791 5.25C0.443697 5.25 0.10791 5.58579 0.10791 6C0.10791 6.41421 0.443697 6.75 0.85791 6.75V5.25ZM15.5304 6.53033C15.8233 6.23744 15.8233 5.76256 15.5304 5.46967L10.7574 0.696699C10.4645 0.403806 9.98964 0.403806 9.69674 0.696699C9.40385 0.989593 9.40385 1.46447 9.69674 1.75736L13.9394 6L9.69674 10.2426C9.40385 10.5355 9.40385 11.0104 9.69674 11.3033C9.98964 11.5962 10.4645 11.5962 10.7574 11.3033L15.5304 6.53033ZM0.85791 6.75H15V5.25H0.85791V6.75Z"
                        fill="#02E56A"
                      />
                    </svg>
                  </button>
                </div>
                <div className="bg-[#C7C7C7] w-full h-[1px] my-8"></div>
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-[340px,auto] items-center gap-8">
                    <div className="relative w-full h-[190px] ">
                      <NextImg
                        src="/assets/image/news.jpg"
                        alt="Capi"
                        objectFit="cover"
                        className="rounded-[20px]"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[340px,auto] items-center gap-8">
                    <div className="relative w-full h-[190px] ">
                      <NextImg
                        src="/assets/image/news.jpg"
                        alt="Capi"
                        objectFit="cover"
                        className="rounded-[20px]"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[340px,auto] items-center gap-8">
                    <div className="relative w-full h-[190px] ">
                      <NextImg
                        src="/assets/image/news.jpg"
                        alt="Capi"
                        objectFit="cover"
                        className="rounded-[20px]"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* box right */}
              <div className="border-l border-[#C7C7C7] h-full ml-8 pl-8">
                <div className="flex flex-col">
                  <div className="relative w-full h-[250px] ">
                    <NextImg
                      src="/assets/image/news.jpg"
                      alt="Capi"
                      objectFit="cover"
                      className="rounded-[20px]"
                    />
                  </div>
                  <div className="flex flex-col gap-5 mt-6">
                    <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                      Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                      vận động tranh cử ở Bắc Carolina
                    </h3>
                    <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                      Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                      vận động tranh cử ở Bắc Carolina
                    </p>
                  </div>
                </div>
                {/* End news hot */}
                <div className="bg-[#C7C7C7] w-full h-[1px] my-8"></div>
                <div className="grid grid-cols-2 gap-7">
                  <div className="flex flex-col">
                    <div className="relative w-full h-[149px] ">
                      <NextImg
                        src="/assets/image/news.jpg"
                        alt="Capi"
                        objectFit="cover"
                        className="rounded-[20px]"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-6">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative w-full h-[149px] ">
                      <NextImg
                        src="/assets/image/news.jpg"
                        alt="Capi"
                        objectFit="cover"
                        className="rounded-[20px]"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-6">
                      <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </h3>
                      <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                        Ông Trump nói về lạm phát, chỉ trích bà Harris trong
                        cuộc vận động tranh cử ở Bắc Carolina
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#C7C7C7] w-full h-[1px] my-8"></div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </h3>
                  <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </p>
                </div>
                <div className="bg-[#C7C7C7] w-full h-[1px] my-6"></div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </h3>
                  <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </p>
                </div>
                <div className="bg-[#C7C7C7] w-full h-[1px] my-6"></div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </h3>
                  <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </p>
                </div>
                <div className="bg-[#C7C7C7] w-full h-[1px] my-6"></div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-[#15171E] text-[20px] font-semibold leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </h3>
                  <p className="text-[#696B75] text-[16px] font-medium leading-normal">
                    Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc
                    vận động tranh cử ở Bắc Carolina
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#150900] rounded-[40px] my-20 flex relative">
              <div className="relative w-[55%] h-[310px] ">
                <NextImg
                  src="/assets/image/news-banner1.png"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-l-[40px]"
                />
              </div>
              <div className="flex flex-col absolute top-11 right-12 w-[53%]">
                <span className="text-[#FFF] text-[18px] font-medium leading-[40px]">
                  #trungtamdaotao
                </span>
                <p className="text-[#FFBC00] text-[40px] font-bold leading-[49px] mb-6 mt-2">
                  Trở thành nhà đầu tư chuyên nghiệp với UPS Academy
                </p>
                <div>
                  <button className="flex items-center gap-3 bg-[#FF6D00] p-3 pl-4 rounded-2xl text-[#FFF] font-bold text-[18px] leading-normal hover:shadow-[-2px_3px_0px_0px_#00813B]">
                    Khám phá ngay
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7594 6.48952C18.7594 6.2906 18.6804 6.09984 18.5398 5.95919C18.3991 5.81853 18.2083 5.73952 18.0094 5.73952L9.42515 5.73952C9.01093 5.73952 8.67515 6.0753 8.67515 6.48952C8.67515 6.90373 9.01093 7.23952 9.42515 7.23952L16.1992 7.23952L5.45855 17.9802C5.16566 18.2731 5.16566 18.7479 5.45855 19.0408C5.75145 19.3337 6.22632 19.3337 6.51921 19.0408L17.2594 8.30062V15.0738C17.2594 15.488 17.5952 15.8238 18.0094 15.8238C18.4236 15.8238 18.7594 15.488 18.7594 15.0738L18.7594 6.48952Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <NewsContent2/>
          </>
        );
      case 2:
        return <div>Báo cáo ngày</div>;
      case 3:
        return <div>Phân tích từ UPS</div>;
      case 4:
        return <div>Sự kiện doanh nghiệp</div>;
      case 5:
        return <div>Tin đấu giá</div>;
      case 6:
        return <div>Tin nội bộ UPS</div>;
      default:
        return null;
    }
  };
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1280px]">
      <Tabs
        defaultValue={currentCategory.toString()}
        onValueChange={handleCategoryClick}
      >
        <h1 className="text-[#15171E] text-[40px] font-medium leading-[72px] uppercase text-center mb-5">
          thời báo đầu tư UPS
        </h1>
        <TabsList className="flex justify-center items-center gap-10 border-b border-[#60606B] pb-5">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id.toString()}
              className={`text-base leading-normal transition-all duration-150 ease-in-out ${
                currentCategory === category.id
                  ? "text-[#15171E] font-bold"
                  : "text-[#525358] font-semibold"
              }`}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id.toString()}
            className="border-t-2 border-[#60606B] mt-[6px] pt-11"
          >
            {renderContent()}
            <TagsPage/>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NewsContent;
