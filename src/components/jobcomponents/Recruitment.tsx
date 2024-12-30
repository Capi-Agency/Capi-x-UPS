import React from 'react';

type Props = {};

const Recruitment = (props: Props) => {
  const lists = [
    {
      title: 'Môi giới chứng khoán',
      description:
        'Kết nối người mua/bán chứng khoán, tư vấn đầu tư, thực hiện giao dịch.',
      request: [
        'Chuyên viên môi giới',
        'Trưởng phòng môi giới',
        'Chuyên viên Phân tích Đầu tư',
      ],
    },
    {
      title: 'Tư vấn đầu tư',
      description: 'Cung cấp lời khuyên và giải pháp đầu tư tài chính.',
      request: [
        'Chuyên viên Tư vấn Đầu tư',
        'Quản lý Danh mục đầu tư',
        'Chuyên gia Hoạch địch Tài chính',
      ],
    },
    {
      title: 'Phân tích tài chính',
      description:
        'Phân tích dữ liệu tài chính, đánh giá tình hình doanh nghiệp, dự đoán thị trường.',
      request: [
        'Chuyên viên phân tích tài chính',
        'Chuyên viên phân tích đầu tư',
        'Chuyên viên phân tích rủi ro',
      ],
    },
    {
      title: 'Công nghệ thông tin',
      description:
        'Phát triển, vận hành và bảo trì hệ thống công nghệ thông tin.',
      request: ['Lập trình viên', 'Kỹ sư hệ thống', 'Chuyên viên an ninh mạng'],
    },
    {
      title: 'Marketing & Truyền thông',
      description: 'Quảng bá thương hiệu, sản phẩm và dịch vụ',
      request: [
        'Chuyên viên Marketing',
        'Chuyên viên Digital Marketing',
        'Chuyên viên Quan hệ công chúng',
      ],
    },
    {
      title: 'Hành chính nhân sự',
      description: 'Quản lý nhân sự và hành chính văn phòng.',
      request: [
        'Chuyên viên Tuyển dụng',
        'Chuyên viên Đào tạo',
        'Chuyên viên Quản lý Nhân sự',
      ],
    },
    {
      title: 'Tài chính kế toán',
      description: 'Quản lý tài chính và kế toán, lập báo cáo',
      request: [
        'Kế toán viên',
        'Kiểm toán viên nội bộ',
        'Chuyên viên Phân tích Tài chính',
      ],
    },
    {
      title: 'Phát triển sản phẩm',
      description: 'Phát triển sản phẩm dịch vụ tài chính mới.',
      request: [
        'Chuyên viên Phát triển Sản phẩm',
        'Quản lý sản phẩm',
        'Chuyên viên Nghiên cứu Thị trường',
      ],
    },
    {
      title: 'Pháp chế và KSNB',
      description: 'Đảm bảo tuân thủ pháp luật và quy định, quản lý rủi ro.',
      request: [
        'Chuyên viên Pháp chế',
        'Chuyên viên Kiếm soát Nội bộ',
        'Chuyên viên Tuân thủ',
      ],
    },
    {
      title: 'Trợ lý, Thư ký',
      description: 'Hỗ trợ quản lý trong công việc hành chính.',
      request: ['Trợ lý Ban Giám Đốc', 'Thư ký Văn phòng'],
    },
  ];
  return (
    <div className="custom-container mt-10 md:mt-16 lg2:mt-[90px] 2xl:mt-[110px] 3xl:mt-[140px]">
      {/* title */}
      <div
        className="flex grid-cols-2 flex-col gap-3 md:grid md:gap-10"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <div className="flex flex-col gap-2">
          <h5 className="text-sm font-medium uppercase leading-[21px] text-[#604D3C]">
            03 // SERVICES
          </h5>
          <h3 className="text-[20px] font-bold text-[#111013] md:text-[24px] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Vị trí tuyển dụng
          </h3>
        </div>
        <div>
          <p className="text-sm font-normal text-[#161519] md:text-base lg:text-[18px] lg:leading-[28px]">
            Mục tiêu của chúng tôi là kiến tạo những mối quan hệ bền vững và
            thành công giữa doanh nghiệp và khách hàng. Chúng tôi tập trung vào
            việc xây dựng các thương hiệu, dịch vụ và chiến dịch tạo ra giá trị
            lâu dài.
          </p>
        </div>
      </div>
      {/* list */}
      <div
        className="mt-6 flex grid-cols-4 flex-col gap-y-6 md:mt-10 md:grid md:gap-x-5 md:gap-y-10 lg:gap-x-6 lg2:gap-x-8 xl:mt-[60px] 2xl:gap-x-10 2xl:gap-y-16 3xl:gap-y-24"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="700"
      >
        {lists.map((item, index) => (
          <div key={index} className="rounded-lg">
            <h4 className="text-[20px] font-semibold text-[#1A1B1F] md:text-[18px] lg:text-[24px] lg2:text-[26px] lg2:leading-[108%]">
              {item.title}
            </h4>
            <p className="pt-1 text-sm font-medium leading-[24px] text-[#161519] md:pt-2 lg:text-[16px] lg2:pt-[10px]">
              {item.description}
            </p>
            <ul className="space-y-2 pt-2 md:pt-6 lg2:pt-[30px]">
              {item.request.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#604D3C]">–</span>
                  <span className="text-sm font-medium text-[#1A1B1F] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
