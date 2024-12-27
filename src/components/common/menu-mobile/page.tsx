import React from 'react';
import { cn } from '@/lib/utils';
import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';
import NextImg from '@/components/common/next-img';

type Props = {
  handleClose: any;
};
const MenuMobile = ({ handleClose }: Props) => (
  <Accordion.Root type="single" collapsible>
    <ul className="mt-7 flex flex-col gap-8">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p
            title="Sản phẩm"
            className="flex items-center gap-[10px] text-sm font-bold text-gray-100"
          >
            Sản phẩm - Dịch vụ
            <span className="me-2 rounded-[10px] bg-[#AD02C9] px-2 py-1 text-xs font-bold uppercase text-gray-100">
              NEW
            </span>
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-5 p-3">
            <ul className="flex flex-col gap-4">
              <li>
                <h3 className="text-sm font-semibold text-gray-100">
                  Khách hàng cá nhân
                </h3>
              </li>
              <Link
                href="/co-phieu"
                className="flex items-center gap-5"
                onClick={handleClose}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.66699 9.5C6.66699 10.1417 7.16699 10.6667 7.77533 10.6667H9.02533C9.55866 10.6667 9.99199 10.2083 9.99199 9.65C9.99199 9.04167 9.72533 8.825 9.33366 8.68334L7.33366 7.98334C6.93366 7.84167 6.66699 7.625 6.66699 7.01667C6.66699 6.45833 7.10033 6 7.63366 6H8.88366C9.50033 6.00833 10.0003 6.525 10.0003 7.16667"
                      stroke="#00BF52"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33398 10.708V11.3247"
                      stroke="#00BF52"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33398 5.3418V5.9918"
                      stroke="#00BF52"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.32533 14.9837C12.0026 14.9837 14.9837 12.0026 14.9837 8.32533C14.9837 4.64803 12.0026 1.66699 8.32533 1.66699C4.64803 1.66699 1.66699 4.64803 1.66699 8.32533C1.66699 12.0026 4.64803 14.9837 8.32533 14.9837Z"
                      stroke="#111111"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.8164 16.5663C11.5664 17.6247 12.7914 18.3163 14.1914 18.3163C16.4664 18.3163 18.3164 16.4663 18.3164 14.1913C18.3164 12.808 17.6331 11.583 16.5914 10.833"
                      stroke="#00BF52"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-100">
                    Cổ phiếu
                  </span>
                  <span className="text-sm font-medium text-gray-100">
                    Đầu tư đơn giản và hiệu quả
                  </span>
                </div>
              </Link>
              <Link
                href="/bieu-phi"
                className="flex items-center gap-5"
                onClick={handleClose}
              >
                <div className="relative h-6 w-6">
                  <NextImg
                    src="/assets/icons/icon-nav5.svg"
                    alt="UPS"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-100">
                    Biểu phí giao dịch
                  </span>
                  <span className="text-sm font-medium text-gray-100">
                    Cập nhật biểu phí từ UPS
                  </span>
                </div>
              </Link>
            </ul>
            <div>
              <div className="w-full">
                <p className="text-left text-sm font-semibold text-gray-100">
                  Khách hàng doanh nghiệp
                </p>

                <div className="flex flex-col gap-5 py-5">
                  <Link
                    href="#"
                    className="flex items-center"
                    onClick={handleClose}
                  >
                    <div className="relative h-6 w-6">
                      <NextImg
                        src="/assets/icons/icon-nav6.svg"
                        alt="UPS"
                        objectFit="cover"
                      />
                    </div>

                    <div className="ml-5">
                      <p className="text-sm font-semibold text-gray-100">
                        Tư vấn tài chính
                      </p>
                      <p className="text-sm font-medium text-gray-100">
                        Cùng doanh nghiệp phát triển bền vững
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/nen-tang-cong-nghe"
                    className="flex items-center"
                    onClick={handleClose}
                  >
                    <div className="relative h-6 w-6">
                      <NextImg
                        src="/assets/icons/icon-nav8.svg"
                        alt="UPS"
                        objectFit="cover"
                      />
                    </div>

                    <div className="ml-5">
                      <p className="text-sm font-semibold text-gray-100">
                        Nền tảng công nghệ
                      </p>
                      <p className="text-sm font-medium text-gray-100">
                        Vượt trội, nhanh chóng, dễ dàng
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="w-full">
                  <p className="text-left text-sm font-semibold text-gray-100">
                    Nền tảng
                  </p>

                  <div className="mt-4 flex gap-4">
                    <Link
                      href="https://trade.upstock.com.vn/#/price/bang-gia/vn30"
                      target="_blank"
                      className="flex h-[38px] w-full items-center rounded-[10px] bg-[#F1F1F1] px-3 text-sm font-semibold text-[rgba(0,0,0,0.79)]"
                      onClick={handleClose}
                    >
                      Web Trading
                    </Link>
                    <Link
                      href="#"
                      className="flex h-[38px] w-full items-center rounded-[10px] bg-[#F1F1F1] px-3 text-sm font-semibold text-[rgba(0,0,0,0.79)]"
                      onClick={handleClose}
                    >
                      App Trading
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p
            title="Đầu tư cùng UPS"
            className="text-sm font-bold text-gray-100"
          >
            Đầu tư cùng UPS
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-5 p-3">
            <Link
              href="/khoa-hoc"
              className="flex items-center"
              onClick={handleClose}
            >
              <i className="inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M6.87988 18.6501V16.5801"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 18.6498V14.5098"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.1201 18.6502V12.4302"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.1199 6.34961L16.6599 6.88961C14.1099 9.86961 10.6899 11.9796 6.87988 12.9296"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.1904 6.34961H17.1204V9.26961"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>

              <div className="ml-5">
                <p className="text-sm font-semibold text-gray-100">
                  Trung tâm đào tạo
                </p>
                <p className="text-sm font-medium text-gray-100">
                  Trung tâm đào tạo và chia sẻ kiến thức
                </p>
              </div>
            </Link>

            <Link href="#" className="flex items-center" onClick={handleClose}>
              <i className="inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M3.5 18.5V7.5C3.5 3.5 4.5 2.5 8.5 2.5H15.5C19.5 2.5 20.5 3.5 20.5 7.5V17.5C20.5 17.64 20.5 17.78 20.49 17.92"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.35 15.5H20.5V19C20.5 20.93 18.93 22.5 17 22.5H7C5.07 22.5 3.5 20.93 3.5 19V18.35C3.5 16.78 4.78 15.5 6.35 15.5Z"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7.5H16"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 11H13"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>

              <div className="ml-5">
                <p className="text-sm font-semibold text-gray-100">
                  Hỗ trợ khách hàng
                </p>
                <p className="text-sm font-medium text-gray-100">
                  Khám phá kho tàng kiến thức đỉnh cấp cùng UPS
                </p>
              </div>
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <Link
            href="/nen-tang-cong-nghe"
            className="text-sm font-bold text-gray-100"
            onClick={handleClose}
          >
            Nền tảng công nghệ
          </Link>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <p title="Giới thiệu" className="text-sm font-bold text-gray-100">
            Về UPS
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-5 p-3">
            <Link
              href="/gioi-thieu"
              className="flex items-center"
              onClick={handleClose}
            >
              <i className="inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17.9976 7.66C17.9376 7.65 17.8676 7.65 17.8076 7.66C16.4276 7.61 15.3276 6.48 15.3276 5.08C15.3276 3.65 16.4776 2.5 17.9076 2.5C19.3376 2.5 20.4876 3.66 20.4876 5.08C20.4776 6.48 19.3776 7.61 17.9976 7.66Z"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9675 14.9402C18.3375 15.1702 19.8475 14.9302 20.9075 14.2202C22.3175 13.2802 22.3175 11.7402 20.9075 10.8002C19.8375 10.0902 18.3075 9.85016 16.9375 10.0902"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.96754 7.66C6.02754 7.65 6.09754 7.65 6.15754 7.66C7.53754 7.61 8.63754 6.48 8.63754 5.08C8.63754 3.65 7.48754 2.5 6.05754 2.5C4.62754 2.5 3.47754 3.66 3.47754 5.08C3.48754 6.48 4.58754 7.61 5.96754 7.66Z"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.9975 14.9402C5.6275 15.1702 4.1175 14.9302 3.0575 14.2202C1.6475 13.2802 1.6475 11.7402 3.0575 10.8002C4.1275 10.0902 5.6575 9.85016 7.0275 10.0902"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0001 15.1302C11.9401 15.1202 11.8701 15.1202 11.8101 15.1302C10.4301 15.0802 9.33008 13.9502 9.33008 12.5502C9.33008 11.1202 10.4801 9.97021 11.9101 9.97021C13.3401 9.97021 14.4901 11.1302 14.4901 12.5502C14.4801 13.9502 13.3801 15.0902 12.0001 15.1302Z"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.09021 18.2804C7.68021 19.2204 7.68021 20.7603 9.09021 21.7003C10.6902 22.7703 13.3102 22.7703 14.9102 21.7003C16.3202 20.7603 16.3202 19.2204 14.9102 18.2804C13.3202 17.2204 10.6902 17.2204 9.09021 18.2804Z"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>

              <div className="ml-5">
                <p className="text-sm font-semibold text-gray-100">
                  Về chúng tôi
                </p>
                <p className="text-sm font-medium text-gray-100">
                  Giới thiệu về UPS
                </p>
              </div>
            </Link>

            <Link
              href="/tin-tuc"
              className="flex items-center hover:no-underline"
              onClick={handleClose}
            >
              <div className="flex">
                <i className="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M22 17.2402V5.17019C22 3.97019 21.02 3.08019 19.83 3.18019H19.77C17.67 3.36019 14.48 4.43019 12.7 5.55019L12.53 5.66019C12.24 5.84019 11.76 5.84019 11.47 5.66019L11.22 5.51019C9.44 4.40019 6.26 3.34019 4.16 3.17019C2.97 3.07019 2 3.97019 2 5.16019V17.2402C2 18.2002 2.78 19.1002 3.74 19.2202L4.03 19.2602C6.2 19.5502 9.55 20.6502 11.47 21.7002L11.51 21.7202C11.78 21.8702 12.21 21.8702 12.47 21.7202C14.39 20.6602 17.75 19.5502 19.93 19.2602L20.26 19.2202C21.22 19.1002 22 18.2002 22 17.2402Z"
                      stroke="black"
                      strokeOpacity="0.79"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5.99023V20.9902"
                      stroke="#00BF52"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 8.99023H5.5"
                      stroke="#00BF52"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 11.9902H5.5"
                      stroke="#00BF52"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>

                <div className="ml-5">
                  <p className="text-sm font-semibold text-gray-100">Tin UPS</p>
                  <p className="text-left text-sm font-medium text-gray-100">
                    Các thông tin công bố từ UPS
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/tuyen-dung"
              className="flex items-center"
              onClick={handleClose}
            >
              <i className="inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M15.39 5.71L16.7999 8.52999C16.9899 8.91999 17.4999 9.28999 17.9299 9.36999L20.48 9.78999C22.11 10.06 22.49 11.24 21.32 12.42L19.3299 14.41C18.9999 14.74 18.81 15.39 18.92 15.86L19.4899 18.32C19.9399 20.26 18.9 21.02 17.19 20L14.7999 18.58C14.3699 18.32 13.65 18.32 13.22 18.58L10.8299 20C9.11994 21.01 8.07995 20.26 8.52995 18.32L9.09996 15.86C9.20996 15.4 9.01995 14.75 8.68995 14.41L6.69996 12.42C5.52996 11.25 5.90996 10.07 7.53996 9.78999L10.0899 9.36999C10.5199 9.29999 11.03 8.91999 11.22 8.52999L12.63 5.71C13.38 4.18 14.62 4.18 15.39 5.71Z"
                    stroke="black"
                    strokeOpacity="0.79"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.5H2"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 19.5H2"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12.5H2"
                    stroke="#00BF52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>

              <div className="ml-5">
                <p className="text-sm font-semibold text-gray-100">
                  Gia nhập UPS
                </p>
                <p className="text-sm font-medium text-gray-100">
                  Phát triển sự nghiệp cùng UPS
                </p>
              </div>
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <Link
            href="#"
            title="Bảng giá"
            className="text-sm font-bold text-gray-100"
            onClick={handleClose}
          >
            Bảng giá
          </Link>
        </AccordionTrigger>
      </AccordionItem>
      <li>
        <Link
          href="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info"
          className=""
          title="Mở tài khoản ngay"
        >
          <button className="btn active">
            Mở tài khoản ngay
            <div className="relative h-4 w-4 lg:h-6 lg:w-6">
              <NextImg
                src="/assets/icons/UPs.svg"
                alt="Capi"
                objectFit="cover"
              />
            </div>
          </button>
        </Link>
      </li>
    </ul>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={cn(
        'mt-px overflow-hidden first:mt-0 focus-within:relative focus-within:z-10',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn('group', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={cn(
        'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="">{children}</div>
    </Accordion.Content>
  ),
);

export default MenuMobile;
