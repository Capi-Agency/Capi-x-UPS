import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const CustomerReviews = (props: Props) => {
  const lists = [
    {
      avatar: '/assets/image/td-1.jpg',
      tag: 'Môi giới chứng khoán',
      name: 'Cao Thanh Lâm',
      content:
        'Môi trường làm việc của môi giới chứng khoán rất năng động và cạnh tranh. Chúng tôi luôn phải cập nhật thông tin thị trường, tìm kiếm khách hàng mới và duy trì mối quan hệ với khách hàng hiện tại. Áp lực công việc khá cao, đặc biệt là khi thị trường biến động mạnh. Tuy nhiên, đây cũng là một công việc thú vị, mang lại nhiều cơ hội phát triển và thu nhập hấp dẫn.',
      position: 'Chuyên viên môi giới · 7 năm',
    },
    {
      avatar: '/assets/image/td-2.jpg',
      tag: 'Marketing & Truyền thông',
      name: 'Nguyễn Bá Cường',
      content:
        'Tôi yêu thích sự sáng tạo và năng động trong công việc marketing. Tôi được tham gia vào các chiến dịch quảng bá, xây dựng thương hiệu và tương tác với khách hàng trên nhiều kênh truyền thông khác nhau. Môi trường làm việc khá thoải mái, khuyến khích sự đổi mới và hợp tác. Tuy nhiên, công việc cũng đòi hỏi sự nhạy bén, khả năng thích ứng nhanh với xu hướng thị trường và áp lực về hiệu quả công việc.',
      position: 'Chuyên viên Marketing · 2 năm',
    },
    {
      avatar: '/assets/image/td-3.jpg',
      tag: 'Tài chính kế toán',
      name: 'Chu Ngọc Diệu',
      content:
        'Kế toán là một bộ phận quan trọng trong mọi doanh nghiệp, đặc biệt là trong lĩnh vực tài chính như chứng khoán. Ở đây, tôi có nhiều cơ hội để học hỏi, phát triển kỹ năng và thăng tiến trong sự nghiệp. Công ty cũng thường xuyên tổ chức các khóa đào tạo để cập nhật kiến thức mới cho nhân viên.',
      position: 'Kế toán tổng hợp · 8 năm',
    },
  ];
  return (
    <div className="mt-10 bg-[#F2F2F8] py-10 lg:py-[60px] lg2:mt-[60px] 2xl:mt-20 2xl:py-20 3xl:mt-[120px] 3xl:py-[100px]">
      <div className="custom-container">
        <div className="pb-8 text-center">
          <h5 className="pb-2 text-center text-[14px] font-medium uppercase leading-[150%] text-[#604D3C]">
            Nhân viên đánh giá
          </h5>
          <h2 className="text-center text-[20px] font-bold text-[#111013] md:text-[24px] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Từ UPS với <span className="text-[#E50261]">Sự yêu thương</span>
          </h2>
        </div>
        <div className="flex grid-cols-3 flex-col gap-7 md:grid md:gap-[30px] lg:gap-[35px] 2xl:gap-10 3xl:gap-[120px]">
          {lists &&
            lists.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 md:gap-[14px] lg:gap-4"
                >
                  <div className="relative h-[56px] w-[56px] rounded-full">
                    <NextImg
                      src={item.avatar}
                      alt="UPS"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="rounded-[5px] bg-[rgba(144,145,156,0.15)] px-[8px] py-[4px]">
                    {item.tag}
                  </div>
                  <p className="line-clamp-[9] text-center text-sm font-normal leading-[28px] text-[#283742] lg:text-base lg2:text-[18px]">
                    {item.content}
                  </p>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-sm font-semibold text-[#283742] md:text-base lg:text-[18px] lg2:leading-[24px]">
                      {item.name}
                    </p>
                    <p className="font-semibold leading-6 text-[#60606B] md:text-sm lg:text-base">
                      {item.position}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
