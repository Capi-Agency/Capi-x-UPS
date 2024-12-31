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
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-all duration-300 ease-in-out group-data-[state=open]:-rotate-180"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22.2806 8.5828V14.6052C22.2806 18.207 20.2225 19.7505 17.1353 19.7505H6.85628C6.33005 19.7505 5.82721 19.7038 5.35945 19.5986C5.0671 19.5518 4.78646 19.4699 4.52919 19.3764C2.77509 18.7215 1.71094 17.2013 1.71094 14.6052V8.5828C1.71094 4.98106 3.76907 3.4375 6.85628 3.4375H17.1353C19.7547 3.4375 21.6375 4.54842 22.1403 7.08601C22.2222 7.55377 22.2806 8.03319 22.2806 8.5828Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.36133 19.5985C5.82909 19.7037 6.33193 19.7505 6.85815 19.7505H17.1372C20.2244 19.7505 22.2825 18.2069 22.2825 14.6052V8.58273C22.2825 8.03311 22.2357 7.542 22.1422 7.08594"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9876 14.6862C13.6926 14.6862 15.0748 13.304 15.0748 11.5989C15.0748 9.89393 13.6926 8.51172 11.9876 8.51172C10.2826 8.51172 8.90039 9.89393 8.90039 11.5989C8.90039 13.304 10.2826 14.6862 11.9876 14.6862Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.30078 9.02734V14.1727"
                      stroke="#02E56A"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.6816 9.02734V14.1727"
                      stroke="#02E56A"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
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
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 4H17C19.2091 4 21 5.79086 21 8V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V8C3 5.79086 4.79086 4 7 4H8M16 4C16 5.10457 15.1046 6 14 6H10C8.89543 6 8 5.10457 8 4M16 4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 11.2852H16M8 15.3737H12"
                      stroke="#02E56A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </i>
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
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.84 13.5392H9.34C8.19 13.5392 7.26 12.5792 7.26 11.3892C7.26 10.9792 7.6 10.6392 8.01 10.6392C8.42 10.6392 8.76 10.9792 8.76 11.3892C8.76 11.7492 9.02 12.0392 9.34 12.0392H10.84C11.07 12.0392 11.25 11.8292 11.25 11.5692C11.25 11.2192 11.19 11.1992 10.96 11.1192L8.55 10.2792C7.68 9.97922 7.25 9.36922 7.25 8.41922C7.25 7.33922 8.11 6.44922 9.16 6.44922H10.66C11.81 6.44922 12.74 7.40922 12.74 8.59922C12.74 9.00922 12.4 9.34922 11.99 9.34922C11.58 9.34922 11.24 9.00922 11.24 8.59922C11.24 8.23922 10.98 7.94922 10.66 7.94922H9.16C8.93 7.94922 8.75 8.15922 8.75 8.41922C8.75 8.76922 8.81 8.78922 9.04 8.86922L11.45 9.70922C12.32 10.0192 12.74 10.6292 12.74 11.5692C12.75 12.6592 11.89 13.5392 10.84 13.5392Z"
                          fill="#02E56A"
                        />
                        <path
                          d="M10 14.3396C9.59 14.3396 9.25 13.9996 9.25 13.5896V12.8496C9.25 12.4396 9.59 12.0996 10 12.0996C10.41 12.0996 10.75 12.4396 10.75 12.8496V13.5896C10.75 14.0096 10.41 14.3396 10 14.3396Z"
                          fill="#02E56A"
                        />
                        <path
                          d="M10 7.94016C9.59 7.94016 9.25 7.60016 9.25 7.19016V6.41016C9.25 6.00016 9.59 5.66016 10 5.66016C10.41 5.66016 10.75 6.00016 10.75 6.41016V7.19016C10.75 7.60016 10.41 7.94016 10 7.94016Z"
                          fill="#02E56A"
                        />
                        <path
                          d="M9.99 18.7202C5.17 18.7202 1.25 14.8002 1.25 9.98023C1.25 5.16023 5.17 1.24023 9.99 1.24023C14.81 1.24023 18.73 5.16023 18.73 9.98023C18.73 14.8002 14.8 18.7202 9.99 18.7202ZM9.99 2.75023C6 2.75023 2.75 6.00023 2.75 9.99023C2.75 13.9802 6 17.2202 9.99 17.2202C13.98 17.2202 17.23 13.9702 17.23 9.98023C17.23 5.99023 13.98 2.75023 9.99 2.75023Z"
                          fill="white"
                        />
                        <path
                          d="M17.019 22.7203C15.169 22.7203 13.429 21.8203 12.359 20.3003C12.119 19.9603 12.199 19.4903 12.539 19.2503C12.879 19.0103 13.349 19.0903 13.589 19.4303C14.379 20.5503 15.659 21.2103 17.019 21.2103C19.339 21.2103 21.219 19.3303 21.219 17.0103C21.219 15.6603 20.559 14.3803 19.459 13.5903C19.119 13.3503 19.049 12.8803 19.289 12.5403C19.529 12.2003 19.999 12.1303 20.339 12.3703C21.829 13.4403 22.719 15.1703 22.719 17.0103C22.719 20.1703 20.169 22.7203 17.019 22.7203Z"
                          fill="#02E56A"
                        />
                      </svg>
                    </i>

                    <div className="ml-5">
                      <p className="text-sm font-semibold text-gray-100">
                        Tư vấn tài chính
                      </p>
                      <p className="text-sm font-medium text-gray-100">
                        Cùng doanh nghiệp phát triển bền vững
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
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-all duration-300 ease-in-out group-data-[state=open]:-rotate-180"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
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
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.87891 18.1501V16.0801"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 18.1498V14.0098"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.1211 18.1497V11.9297"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.1189 5.84961L16.6589 6.38961C14.1089 9.36961 10.6889 11.4796 6.87891 12.4296"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.1914 5.84961H17.1214V8.76961"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="white"
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
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 18.8491V5C20 3.34315 18.6569 2 17 2H7C5.34315 2 4 3.34315 4 5V18.8491"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 19C4 17.3431 5.34315 16 7 16H17C18.6569 16 20 17.3431 20 19V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.02539 6.92578C8.02539 6.51157 8.36118 6.17578 8.77539 6.17578L15.2116 6.17578C15.6258 6.17578 15.9616 6.51157 15.9616 6.92578C15.9616 7.34 15.6258 7.67578 15.2116 7.67578L8.77539 7.67578C8.36118 7.67578 8.02539 7.33999 8.02539 6.92578Z"
                    fill="#02E56A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.02539 10.9707C8.02539 10.5565 8.36118 10.2207 8.77539 10.2207H11.3918C11.806 10.2207 12.1418 10.5565 12.1418 10.9707C12.1418 11.3849 11.806 11.7207 11.3918 11.7207H8.77539C8.36118 11.7207 8.02539 11.3849 8.02539 10.9707Z"
                    fill="#02E56A"
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
      <AccordionItem value="item-3">
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
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-all duration-300 ease-in-out group-data-[state=open]:-rotate-180"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
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
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0003 7.90977C17.9703 7.90977 17.9503 7.90977 17.9203 7.90977H17.8703C15.9803 7.84977 14.5703 6.38977 14.5703 4.58977C14.5703 2.74977 16.0703 1.25977 17.9003 1.25977C19.7303 1.25977 21.2303 2.75977 21.2303 4.58977C21.2203 6.39977 19.8103 7.85977 18.0103 7.91977C18.0103 7.90977 18.0103 7.90977 18.0003 7.90977ZM17.9003 2.74977C16.8903 2.74977 16.0703 3.56977 16.0703 4.57977C16.0703 5.56977 16.8403 6.36977 17.8303 6.40977C17.8403 6.39977 17.9203 6.39977 18.0103 6.40977C18.9803 6.35977 19.7303 5.55977 19.7403 4.57977C19.7403 3.56977 18.9203 2.74977 17.9003 2.74977Z"
                    fill="#02E56A"
                  />
                  <path
                    d="M18.0105 15.2806C17.6205 15.2806 17.2305 15.2506 16.8405 15.1806C16.4305 15.1106 16.1605 14.7206 16.2305 14.3106C16.3005 13.9006 16.6905 13.6306 17.1005 13.7006C18.3305 13.9106 19.6305 13.6806 20.5005 13.1006C20.9705 12.7906 21.2205 12.4006 21.2205 12.0106C21.2205 11.6206 20.9605 11.2406 20.5005 10.9306C19.6305 10.3506 18.3105 10.1206 17.0705 10.3406C16.6605 10.4206 16.2705 10.1406 16.2005 9.73063C16.1305 9.32063 16.4005 8.93064 16.8105 8.86064C18.4405 8.57064 20.1305 8.88063 21.3305 9.68063C22.2105 10.2706 22.7205 11.1106 22.7205 12.0106C22.7205 12.9006 22.2205 13.7506 21.3305 14.3506C20.4205 14.9506 19.2405 15.2806 18.0105 15.2806Z"
                    fill="#02E56A"
                  />
                  <path
                    d="M5.97047 7.91C5.96047 7.91 5.95047 7.91 5.95047 7.91C4.15047 7.85 2.74047 6.39 2.73047 4.59C2.73047 2.75 4.23047 1.25 6.06047 1.25C7.89047 1.25 9.39047 2.75 9.39047 4.58C9.39047 6.39 7.98047 7.85 6.18047 7.91L5.97047 7.16L6.04047 7.91C6.02047 7.91 5.99047 7.91 5.97047 7.91ZM6.07047 6.41C6.13047 6.41 6.18047 6.41 6.24047 6.42C7.13047 6.38 7.91047 5.58 7.91047 4.59C7.91047 3.58 7.09047 2.75999 6.08047 2.75999C5.07047 2.75999 4.25047 3.58 4.25047 4.59C4.25047 5.57 5.01047 6.36 5.98047 6.42C5.99047 6.41 6.03047 6.41 6.07047 6.41Z"
                    fill="#02E56A"
                  />
                  <path
                    d="M5.96 15.2806C4.73 15.2806 3.55 14.9506 2.64 14.3506C1.76 13.7606 1.25 12.9106 1.25 12.0106C1.25 11.1206 1.76 10.2706 2.64 9.68063C3.84 8.88063 5.53 8.57064 7.16 8.86064C7.57 8.93064 7.84 9.32063 7.77 9.73063C7.7 10.1406 7.31 10.4206 6.9 10.3406C5.66 10.1206 4.35 10.3506 3.47 10.9306C3 11.2406 2.75 11.6206 2.75 12.0106C2.75 12.4006 3.01 12.7906 3.47 13.1006C4.34 13.6806 5.64 13.9106 6.87 13.7006C7.28 13.6306 7.67 13.9106 7.74 14.3106C7.81 14.7206 7.54 15.1106 7.13 15.1806C6.74 15.2506 6.35 15.2806 5.96 15.2806Z"
                    fill="#02E56A"
                  />
                  <path
                    d="M12.0003 15.3805C11.9703 15.3805 11.9503 15.3805 11.9203 15.3805H11.8703C9.98031 15.3205 8.57031 13.8605 8.57031 12.0605C8.57031 10.2205 10.0703 8.73047 11.9003 8.73047C13.7303 8.73047 15.2303 10.2305 15.2303 12.0605C15.2203 13.8705 13.8103 15.3305 12.0103 15.3905C12.0103 15.3805 12.0103 15.3805 12.0003 15.3805ZM11.9003 10.2205C10.8903 10.2205 10.0703 11.0405 10.0703 12.0505C10.0703 13.0405 10.8403 13.8405 11.8303 13.8805C11.8403 13.8705 11.9203 13.8705 12.0103 13.8805C12.9803 13.8305 13.7303 13.0305 13.7403 12.0505C13.7403 11.0505 12.9203 10.2205 11.9003 10.2205Z"
                    fill="white"
                  />
                  <path
                    d="M11.9993 22.7607C10.7993 22.7607 9.5993 22.4507 8.6693 21.8207C7.7893 21.2307 7.2793 20.3907 7.2793 19.4907C7.2793 18.6007 7.7793 17.7407 8.6693 17.1507C10.5393 15.9107 13.4693 15.9107 15.3293 17.1507C16.2093 17.7407 16.7193 18.5807 16.7193 19.4807C16.7193 20.3707 16.2193 21.2307 15.3293 21.8207C14.3993 22.4407 13.1993 22.7607 11.9993 22.7607ZM9.4993 18.4107C9.0293 18.7207 8.7793 19.1107 8.7793 19.5007C8.7793 19.8907 9.0393 20.2707 9.4993 20.5807C10.8493 21.4907 13.1393 21.4907 14.4893 20.5807C14.9593 20.2707 15.2093 19.8807 15.2093 19.4907C15.2093 19.1007 14.9493 18.7207 14.4893 18.4107C13.1493 17.5007 10.8593 17.5107 9.4993 18.4107Z"
                    fill="white"
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
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.0795C11.7 22.0795 11.4 22.0095 11.15 21.8695C9.28 20.8495 5.99 19.7695 3.93 19.4995L3.64 19.4595C2.33 19.2995 1.25 18.0695 1.25 16.7395V4.65952C1.25 3.86952 1.56 3.14952 2.13 2.62952C2.7 2.10952 3.44 1.85952 4.22 1.92952C6.42 2.09952 9.74 3.19952 11.62 4.37952L11.86 4.51952C11.93 4.55952 12.08 4.55952 12.14 4.52952L12.3 4.42952C14.18 3.24952 17.5 2.12952 19.71 1.93952C19.73 1.93952 19.81 1.93952 19.83 1.93952C20.56 1.86952 21.31 2.12952 21.87 2.64952C22.44 3.16952 22.75 3.88952 22.75 4.67952V16.7495C22.75 18.0895 21.67 19.3095 20.35 19.4695L20.02 19.5095C17.96 19.7795 14.66 20.8695 12.83 21.8795C12.59 22.0195 12.3 22.0795 12 22.0795ZM3.98 3.41952C3.66 3.41952 3.37 3.52952 3.14 3.73952C2.89 3.96952 2.75 4.29952 2.75 4.65952V16.7395C2.75 17.3295 3.26 17.8995 3.83 17.9795L4.13 18.0195C6.38 18.3195 9.83 19.4495 11.83 20.5395C11.92 20.5795 12.05 20.5895 12.1 20.5695C14.1 19.4595 17.57 18.3195 19.83 18.0195L20.17 17.9795C20.74 17.9095 21.25 17.3295 21.25 16.7395V4.66952C21.25 4.29952 21.11 3.97952 20.86 3.73952C20.6 3.50952 20.27 3.39952 19.9 3.41952C19.88 3.41952 19.8 3.41952 19.78 3.41952C17.87 3.58952 14.79 4.61952 13.11 5.66952L12.95 5.77952C12.4 6.11952 11.62 6.11952 11.09 5.78952L10.85 5.64952C9.14 4.59952 6.06 3.57952 4.1 3.41952C4.06 3.41952 4.02 3.41952 3.98 3.41952Z"
                      fill="white"
                    />
                    <path
                      d="M12 21.2402C11.59 21.2402 11.25 20.9002 11.25 20.4902V5.49023C11.25 5.08023 11.59 4.74023 12 4.74023C12.41 4.74023 12.75 5.08023 12.75 5.49023V20.4902C12.75 20.9102 12.41 21.2402 12 21.2402Z"
                      fill="#02E56A"
                    />
                    <path
                      d="M7.75 9.24023H5.5C5.09 9.24023 4.75 8.90023 4.75 8.49023C4.75 8.08023 5.09 7.74023 5.5 7.74023H7.75C8.16 7.74023 8.5 8.08023 8.5 8.49023C8.5 8.90023 8.16 9.24023 7.75 9.24023Z"
                      fill="#02E56A"
                    />
                    <path
                      d="M8.5 12.2402H5.5C5.09 12.2402 4.75 11.9002 4.75 11.4902C4.75 11.0802 5.09 10.7402 5.5 10.7402H8.5C8.91 10.7402 9.25 11.0802 9.25 11.4902C9.25 11.9002 8.91 12.2402 8.5 12.2402Z"
                      fill="#02E56A"
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
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.2228 5.04303L16.6651 7.92756C16.8618 8.3291 17.3862 8.71425 17.8287 8.788L20.4428 9.22232C22.1145 9.50094 22.5079 10.7137 21.3033 11.9102L19.271 13.9425C18.9268 14.2866 18.7383 14.9504 18.8449 15.4257L19.4267 17.9415C19.8856 19.9328 18.8285 20.7031 17.0666 19.6623L14.6164 18.2119C14.1739 17.9497 13.4446 17.9497 12.9939 18.2119L10.5437 19.6623C8.78999 20.7031 7.72468 19.9246 8.18358 17.9415L8.76541 15.4257C8.87194 14.9504 8.68346 14.2866 8.33928 13.9425L6.307 11.9102C5.11058 10.7137 5.49573 9.50094 7.16744 9.22232L9.78155 8.788C10.2159 8.71425 10.7403 8.3291 10.937 7.92756L12.3793 5.04303C13.166 3.47784 14.4443 3.47784 15.2228 5.04303Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.21494 5.23047H8.7168"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.21483 12.1934L4.47656 12.1934"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.21392 19.252H5.46484"
                    stroke="#02E56A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
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
      <AccordionItem value="item-5">
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
    <Accordion.Header className="flex w-full">
      <Accordion.Trigger
        className={cn('group flex w-full justify-between', className)}
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
