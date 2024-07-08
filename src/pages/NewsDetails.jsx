import { Link, useParams } from "react-router-dom";
import equal from "deep-equal";
import { useNewsDetails } from "../features/news/useNewsDetails";
import { formatDate } from "../utils/helpers";
import Spinner from "../ui/Spinner";
import ButtonGroup from "../ui/ButtonGroup";
import { useUser } from "../features/authentication/useUser";

import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";
import { useEffect, useRef, useState } from "react";

const NewsDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const { id } = useParams();
  const { user } = useUser();
  const { isLoading, newsDetails } = useNewsDetails(id);

  useEffect(() => console.log(equal(newsDetails, newsDetails)));

  if (isLoading && !newsDetails) return <Spinner />;

  return (
    <section className="flex justify-center bg-white px-5 py-20 lg:py-[120px]">
      <div className="container">
        {newsDetails.coverImage?.url && (
          <div className="pb-10">
            <img
              src={newsDetails.coverImage?.url}
              alt="image"
              className="rounded-t-2xl w-full"
            />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-8 mx-auto pb-4 max-w-[90%]">
          <div className="flex items-center">
            <div className="mr-4 rounded-full w-10 h-10 overflow-hidden">
              <img
                src={newsDetails.author.photo?.url || "/default-user.jpg"}
                alt="image"
                className="w-full"
              />
            </div>
            <p className="font-medium text-base text-body-color">
              <span className="pr-0.5">By </span>
              <Link to="" className="text-body-color hover:text-primary">
                {newsDetails.author.name}
              </Link>
            </p>
          </div>
          <div className="flex items-center">
            <p className="flex items-center mr-5 md:mr-8 font-medium text-body-color text-sm">
              <span className="mr-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2.6499H12.7V2.0999C12.7 1.7999 12.45 1.5249 12.125 1.5249C11.8 1.5249 11.55 1.7749 11.55 2.0999V2.6499H4.42505V2.0999C4.42505 1.7999 4.17505 1.5249 3.85005 1.5249C3.52505 1.5249 3.27505 1.7749 3.27505 2.0999V2.6499H2.00005C1.15005 2.6499 0.425049 3.3499 0.425049 4.2249V12.9249C0.425049 13.7749 1.12505 14.4999 2.00005 14.4999H14C14.85 14.4999 15.575 13.7999 15.575 12.9249V4.1999C15.575 3.3499 14.85 2.6499 14 2.6499ZM1.57505 7.2999H3.70005V9.7749H1.57505V7.2999ZM4.82505 7.2999H7.45005V9.7749H4.82505V7.2999ZM7.45005 10.8999V13.3499H4.82505V10.8999H7.45005ZM8.57505 10.8999H11.2V13.3499H8.57505V10.8999ZM8.57505 9.7749V7.2999H11.2V9.7749H8.57505ZM12.3 7.2999H14.425V9.7749H12.3V7.2999ZM2.00005 3.7749H3.30005V4.2999C3.30005 4.5999 3.55005 4.8749 3.87505 4.8749C4.20005 4.8749 4.45005 4.6249 4.45005 4.2999V3.7749H11.6V4.2999C11.6 4.5999 11.85 4.8749 12.175 4.8749C12.5 4.8749 12.75 4.6249 12.75 4.2999V3.7749H14C14.25 3.7749 14.45 3.9749 14.45 4.2249V6.1749H1.57505V4.2249C1.57505 3.9749 1.75005 3.7749 2.00005 3.7749ZM1.57505 12.8999V10.8749H3.70005V13.3249H2.00005C1.75005 13.3499 1.57505 13.1499 1.57505 12.8999ZM14 13.3499H12.3V10.8999H14.425V12.9249C14.45 13.1499 14.25 13.3499 14 13.3499Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>{formatDate(newsDetails.publicationDate)}</span>
            </p>

            <p className="flex items-center mr-5 md:mr-8 font-medium text-body-color text-sm">
              <span className="mr-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1001 4.875H4.65007C4.35007 4.875 4.07507 5.125 4.07507 5.45C4.07507 5.775 4.32507 6.025 4.65007 6.025H11.1251C11.4251 6.025 11.7001 5.775 11.7001 5.45C11.7001 5.125 11.4251 4.875 11.1001 4.875Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.80007 7.92505H4.65007C4.35007 7.92505 4.07507 8.17505 4.07507 8.50005C4.07507 8.82505 4.32507 9.07505 4.65007 9.07505H9.80007C10.1001 9.07505 10.3751 8.82505 10.3751 8.50005C10.3751 8.17505 10.1001 7.92505 9.80007 7.92505Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14 1.9751H2.00005C1.15005 1.9751 0.425049 2.6751 0.425049 3.5501V12.9751C0.425049 13.3751 0.650049 13.7501 1.02505 13.9251C1.17505 14.0001 1.32505 14.0251 1.47505 14.0251C1.72505 14.0251 1.95005 13.9501 2.15005 13.7751L4.27505 12.0251H14C14.85 12.0251 15.575 11.3251 15.575 10.4501V3.5501C15.575 2.6751 14.85 1.9751 14 1.9751ZM14.45 10.4501C14.45 10.7001 14.25 10.9001 14 10.9001H4.07505C3.95005 10.9001 3.82505 10.9501 3.72505 11.0251L1.57505 12.8001V3.5501C1.57505 3.3001 1.77505 3.1001 2.02505 3.1001H14.025C14.275 3.1001 14.475 3.3001 14.475 3.5501V10.4501H14.45Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>05</span>
            </p>
            <p className="flex items-center font-medium text-body-color text-sm">
              <span className="mr-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00005 5.92505C6.85005 5.92505 5.92505 6.85005 5.92505 8.00005C5.92505 9.15005 6.85005 10.075 8.00005 10.075C9.15005 10.075 10.075 9.15005 10.075 8.00005C10.075 6.85005 9.15005 5.92505 8.00005 5.92505ZM8.00005 8.95005C7.47505 8.95005 7.05005 8.52505 7.05005 8.00005C7.05005 7.47505 7.47505 7.05005 8.00005 7.05005C8.52505 7.05005 8.95005 7.47505 8.95005 8.00005C8.95005 8.52505 8.52505 8.95005 8.00005 8.95005Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.3 7.1251C13.875 5.0001 11.9 2.8501 8 2.8501C4.1 2.8501 2.125 5.0001 0.7 7.1251C0.35 7.6501 0.35 8.3501 0.7 8.8751C2.125 10.9751 4.1 13.1501 8 13.1501C11.9 13.1501 13.875 10.9751 15.3 8.8751C15.65 8.3251 15.65 7.6501 15.3 7.1251ZM14.375 8.2501C12.55 10.9251 10.725 12.0251 8 12.0251C5.275 12.0251 3.45 10.9251 1.625 8.2501C1.525 8.1001 1.525 7.9001 1.625 7.7501C3.45 5.0751 5.275 3.9751 8 3.9751C10.725 3.9751 12.55 5.0751 14.375 7.7501C14.45 7.9001 14.45 8.1001 14.375 8.2501Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>05</span>
            </p>
          </div>
          {user?._id === newsDetails?.author?._id && (
            <ButtonGroup
              trigger={trigger}
              id={id}
              onHandleDelete={setModalOpen}
            />
          )}
        </div>

        <h1 className="mx-auto mb-6 max-w-[90%] font-bold text-3xl text-dark sm:text-5xl md:text-6xl leading-normal sm:leading-snug">
          {newsDetails.title}
        </h1>

        {/* <p className="text-base text-body-color leading-relaxed">
                {newsDetails.summary}
                w-full max-w-[600px] md:max-w-[1480px]
              </p> */}
        {/* <div className=""></div> */}

        <div
          className="mx-auto mb-8 md:mb-10 lg:mb-14 max-w-[90%] news-content"
          dangerouslySetInnerHTML={{ __html: newsDetails.content }}
        ></div>

        <div className="flex flex-wrap items-center mx-auto mb-10 md:mb-12 lg:mb-16 max-w-[90%]">
          <div className="-ml-4 px-4 w-full md:w-1/2">
            <div className="flex flex-wrap items-center mb-8 md:mb-0">
              {newsDetails.tags.map((tag) => (
                <MetaTagItem key={tag} link="#" name={tag} />
              ))}
            </div>
          </div>

          <div className="-mr-4 px-4 w-full md:w-1/2">
            <div className="flex md:justify-end items-center">
              <span className="mr-5 font-medium text-body-color text-sm">
                Share This Post
              </span>
              <div className="flex items-center gap-x-4 gap-y-2">
                <SocialLinkItem link="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                      fill="#4064AC"
                    />
                    <path
                      d="M19.439 14.4H18.1992H17.7564V13.8839V12.2839V11.7677H18.1992H19.1291C19.3726 11.7677 19.5719 11.5613 19.5719 11.2516V8.51613C19.5719 8.23226 19.3947 8 19.1291 8H17.5128C15.7638 8 14.5461 9.44516 14.5461 11.5871V13.8323V14.3484H14.1033H12.5978C12.2878 14.3484 12 14.6323 12 15.0452V16.9032C12 17.2645 12.2435 17.6 12.5978 17.6H14.059H14.5018V18.1161V23.3032C14.5018 23.6645 14.7454 24 15.0996 24H17.1807C17.3136 24 17.4243 23.9226 17.5128 23.8194C17.6014 23.7161 17.6678 23.5355 17.6678 23.3806V18.1419V17.6258H18.1328H19.1291C19.4169 17.6258 19.6383 17.4194 19.6826 17.1097V17.0839V17.0581L19.9925 15.2774C20.0147 15.0968 19.9925 14.8903 19.8597 14.6839C19.8154 14.5548 19.6161 14.4258 19.439 14.4Z"
                      fill="white"
                    />
                  </svg>
                </SocialLinkItem>
                <SocialLinkItem link="#">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32 16.7347C32 25.5713 24.8366 32.7347 16 32.7347C7.16344 32.7347 0 25.5713 0 16.7347C0 7.89818 7.16344 0.734741 16 0.734741C24.8366 0.734741 32 7.89818 32 16.7347ZM23.6036 12.8349C24.3771 12.7431 25.1147 12.5375 25.8004 12.2334C25.2878 13.0004 24.6395 13.6738 23.8917 14.2128C23.8991 14.3765 23.9028 14.5417 23.9028 14.7074C23.9028 19.7617 20.0558 25.5892 13.0213 25.5892C10.8616 25.5892 8.85088 24.9563 7.15927 23.8708C7.45789 23.9064 7.76307 23.9244 8.07111 23.9244C9.8634 23.9244 11.5122 23.3132 12.8214 22.2873C11.1474 22.2562 9.73534 21.1504 9.24876 19.6313C9.48206 19.6758 9.72136 19.6995 9.96836 19.6995C10.3166 19.6995 10.6552 19.653 10.9757 19.5652C9.22651 19.2141 7.90768 17.6685 7.90768 15.8154C7.90768 15.7995 7.90768 15.7832 7.90796 15.767C8.42335 16.0542 9.01346 16.2262 9.64007 16.2458C8.61444 15.5602 7.93876 14.3891 7.93876 13.0625C7.93876 12.3618 8.12758 11.7044 8.45672 11.1396C10.3431 13.4541 13.1613 14.9766 16.3398 15.1361C16.2742 14.856 16.2402 14.5642 16.2402 14.2644C16.2402 12.1527 17.953 10.44 20.0647 10.44C21.1653 10.44 22.1593 10.9043 22.8569 11.6473C23.7277 11.4759 24.5466 11.1579 25.2856 10.7195C24.9995 11.6131 24.3934 12.3618 23.6036 12.8349Z"
                      fill="#55ACEE"
                    />
                  </svg>
                </SocialLinkItem>
                <SocialLinkItem link="#">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.7861 16C32.7861 24.8366 25.6227 32 16.7861 32C7.94958 32 0.786133 24.8366 0.786133 16C0.786133 7.16344 7.94958 0 16.7861 0C25.6227 0 32.7861 7.16344 32.7861 16ZM8.50669 8.82376C8.50669 7.69545 9.36262 6.83666 10.6709 6.83666C11.9795 6.83666 12.7835 7.69545 12.8089 8.82376C12.8089 9.92811 11.9795 10.8117 10.6455 10.8117H10.6207C9.33781 10.8117 8.50669 9.92811 8.50669 8.82376ZM26.3457 23.884V17.2875C26.3457 13.7551 24.4593 12.1112 21.9431 12.1112C19.9109 12.1112 19.0045 13.2292 18.4963 14.0113V12.3813H14.6712C14.7226 13.4602 14.6712 23.8837 14.6712 23.8837H18.496V17.4595C18.496 17.1147 18.5219 16.7733 18.6226 16.5274C18.8998 15.8395 19.5276 15.129 20.5843 15.129C21.969 15.129 22.5212 16.1843 22.5212 17.7296V23.884H26.3457ZM18.4963 14.0113V14.0489H18.4709C18.4745 14.0424 18.4793 14.0358 18.4841 14.0292L18.4841 14.0291C18.4883 14.0232 18.4926 14.0173 18.4963 14.0113ZM8.73421 23.8839H12.5575V12.3812H8.73421V23.8839Z"
                      fill="#007AB9"
                    />
                  </svg>
                </SocialLinkItem>
              </div>
            </div>
          </div>
        </div>

        <BlogWriter
          authorImg={newsDetails.author.photo.url || "/default-user.jpg"}
          authorName={newsDetails.author.name}
          authorDetails={newsDetails.author.about}
          facebookLink="#"
          twitterLink="#"
          instagramLink="#"
        />

        {/* <Comments /> */}

        {/* <CommentForm /> */}
      </div>
      <ConfirmDeleteModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        id={id}
        trigger={trigger}
      />
    </section>
  );
};

export default NewsDetails;

const MetaTagItem = ({ link, name }) => {
  return (
    <a
      href={link}
      className="block bg-primary/5 hover:bg-primary mr-2 md:mr-4 lg:mr-2 xl:mr-4 mb-2 px-5 py-2 rounded font-medium text-primary text-xs hover:text-white"
    >
      {name}
    </a>
  );
};

const SocialLinkItem = ({ link, children }) => {
  return <a href={link}>{children}</a>;
};

const BlogWriter = ({
  authorImg,
  authorName,
  authorDetails,
  facebookLink,
  twitterLink,
  instagramLink,
}) => {
  return (
    <div className="flex mb-16">
      <div className="mr-5 sm:mr-8 rounded-full w-full max-w-[80px] sm:max-w-[100px] h-20 sm:h-[100px] overflow-hidden">
        <img src={authorImg} alt={authorName} className="w-full" />
      </div>
      <div className="lg:mr-20 w-full">
        <span className="block font-medium text-body-color text-xs">
          Written By
        </span>
        <h4 className="mb-3 font-semibold text-base text-dark">{authorName}</h4>
        <p className="mb-5 text-base text-body-color leading-relaxed">
          {authorDetails}
        </p>
        <div className="flex items-center">
          <a
            href={facebookLink}
            className="mr-6 text-dark-8 hover:text-primary"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              className="fill-current"
            >
              <path d="M6.91729 5.35603H5.76441H5.35266V4.92409V3.58508V3.15314H5.76441H6.62907C6.85553 3.15314 7.04081 2.98037 7.04081 2.72121V0.431938C7.04081 0.194372 6.87611 0 6.62907 0H5.12621C3.49982 0 2.36752 1.20942 2.36752 3.00197V4.88089V5.31283H1.95578H0.555854C0.267633 5.31283 0 5.5504 0 5.89595V7.45092C0 7.75328 0.226459 8.03404 0.555854 8.03404H1.91461H2.32635V8.46598V12.8069C2.32635 13.1093 2.55281 13.3901 2.8822 13.3901H4.8174C4.94092 13.3901 5.04386 13.3253 5.12621 13.2389C5.20855 13.1525 5.27032 13.0013 5.27032 12.8717V8.48757V8.05563H5.70265H6.62907C6.8967 8.05563 7.10257 7.88286 7.14375 7.6237V7.6021V7.5805L7.43197 6.09032C7.45256 5.93914 7.43197 5.76637 7.30845 5.59359C7.26727 5.48561 7.08199 5.37762 6.91729 5.35603Z" />
            </svg>
          </a>
          <a href={twitterLink} className="mr-6 text-dark-8 hover:text-primary">
            <svg
              width={14}
              height={11}
              viewBox="0 0 14 11"
              className="fill-current"
            >
              <path d="M12.3393 2.28129L13.16 1.30302C13.3976 1.03807 13.4624 0.834263 13.484 0.73236C12.8361 1.09921 12.2313 1.2215 11.8426 1.2215H11.6914L11.605 1.13997C11.0867 0.71198 10.4388 0.487793 9.74771 0.487793C8.23593 0.487793 7.0481 1.66987 7.0481 3.03537C7.0481 3.11689 7.0481 3.23918 7.06969 3.3207L7.13449 3.72831L6.68095 3.70793C3.91655 3.62641 1.64888 1.38454 1.28173 0.997308C0.677019 2.01634 1.02257 2.99461 1.38972 3.60603L2.12401 4.74734L0.957778 4.13592C0.979375 4.99191 1.32493 5.66447 1.99443 6.1536L2.57754 6.56122L1.99443 6.7854C2.36158 7.82481 3.18226 8.25281 3.78697 8.41585L4.58605 8.61966L3.83016 9.10879C2.62074 9.92402 1.10896 9.86288 0.439453 9.80173C1.80006 10.6985 3.41982 10.9023 4.54286 10.9023C5.38514 10.9023 6.01145 10.8208 6.16263 10.7596C12.2098 9.4145 12.4905 4.31935 12.4905 3.30032V3.15765L12.6201 3.07613C13.3544 2.42395 13.6567 2.07748 13.8295 1.87367C13.7647 1.89406 13.6783 1.93482 13.592 1.9552L12.3393 2.28129Z" />
            </svg>
          </a>
          <a
            href={instagramLink}
            className="mr-6 text-dark-8 hover:text-primary"
          >
            <svg
              width={15}
              height={14}
              viewBox="0 0 15 14"
              className="fill-current"
            >
              <path d="M7.45148 9.81482C8.81564 9.81482 9.92151 8.70895 9.92151 7.34479C9.92151 5.98063 8.81564 4.87476 7.45148 4.87476C6.08732 4.87476 4.98145 5.98063 4.98145 7.34479C4.98145 8.70895 6.08732 9.81482 7.45148 9.81482Z" />
              <path d="M10.1343 0.743896H4.72579C2.57516 0.743896 0.829102 2.48995 0.829102 4.64059V10.0065C0.829102 12.1997 2.57516 13.9458 4.72579 13.9458H10.0917C12.2849 13.9458 14.031 12.1997 14.031 10.0491V4.64059C14.031 2.48995 12.2849 0.743896 10.1343 0.743896ZM7.45134 10.5814C5.64141 10.5814 4.21475 9.1122 4.21475 7.34485C4.21475 5.5775 5.6627 4.10825 7.45134 4.10825C9.2187 4.10825 10.6666 5.5775 10.6666 7.34485C10.6666 9.1122 9.23999 10.5814 7.45134 10.5814ZM11.923 4.40636C11.71 4.64059 11.3906 4.76835 11.0286 4.76835C10.7092 4.76835 10.3898 4.64059 10.1343 4.40636C9.90009 4.17213 9.77232 3.87402 9.77232 3.51204C9.77232 3.15005 9.90009 2.87324 10.1343 2.61771C10.3685 2.36219 10.6666 2.23443 11.0286 2.23443C11.348 2.23443 11.6887 2.36219 11.923 2.59642C12.1359 2.87324 12.2849 3.19264 12.2849 3.53333C12.2637 3.87402 12.1359 4.17213 11.923 4.40636Z" />
              <path d="M11.0501 3.00098C10.7733 3.00098 10.5391 3.2352 10.5391 3.51202C10.5391 3.78883 10.7733 4.02306 11.0501 4.02306C11.3269 4.02306 11.5611 3.78883 11.5611 3.51202C11.5611 3.2352 11.3482 3.00098 11.0501 3.00098Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// const Comments = () => {
//   return (
//     <div className="w-full">
//       <h3 className="mb-12 font-bold text-[28px] text-dark dark:text-white">
//         4 Comments
//       </h3>

//       <CommentsItem
//         authorImg="https://cdn.tailgrids.com/2.0/image/application/images/blog-details/blog-details-01/author-03.png"
//         authorName="Alisha Williams"
//         commentDate="March 15, 2023 at 2:15 pm"
//         comments="Eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non."
//       />

//       <CommentsItem
//         isReply
//         authorImg="https://cdn.tailgrids.com/2.0/image/application/images/blog-details/blog-details-01/author-04.png"
//         authorName="Zecika Farnades"
//         commentDate="August 5, 2023 at 1:51 pm"
//         comments="Eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non."
//       />

//       <CommentsItem
//         authorImg="https://cdn.tailgrids.com/2.0/image/application/images/blog-details/blog-details-01/author-05.png"
//         authorName="Naimur Rahman"
//         commentDate="November 25, 2023 at 5:50 am"
//         comments="Eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non."
//       />
//     </div>
//   );
// };

// const CommentsItem = ({
//   isReply,
//   authorImg,
//   authorName,
//   commentDate,
//   comments,
// }) => {
//   return (
//     <div
//       className={`${
//         isReply
//           ? "ml-16 flex pb-11 md:ml-[110px]"
//           : "flex pb-11 lg:mr-16 xl:mr-[80px]"
//       }`}
//     >
//       <div className="mr-5 sm:mr-8 rounded-full w-full max-w-[56px] sm:max-w-[80px] h-14 sm:h-20 overflow-hidden">
//         <img src={authorImg} alt={authorName} className="w-full" />
//       </div>
//       <div className="w-full">
//         <h4 className="font-semibold text-base text-dark dark:text-white">
//           {authorName}
//         </h4>
//         <span className="inline-block mb-3 text-body-color text-xs">
//           {commentDate}
//         </span>
//         <p className="mb-6 text-base text-body-color">{comments}</p>
//         <button className="bg-primary/5 hover:bg-primary px-5 py-2 rounded font-medium text-primary text-xs hover:text-white">
//           Reply
//         </button>
//       </div>
//     </div>
//   );
// };

// const CommentForm = () => {
//   return (
//     <div className="pt-9 w-full">
//       <h3 className="mb-10 font-bold text-[28px] text-dark dark:text-white">
//         Leave a comment
//       </h3>
//       <form>
//         <div className="flex flex-wrap -mx-4">
//           <div className="px-4 w-full md:w-1/2">
//             <FormInput
//               label="Your Name"
//               type="text"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="px-4 w-full md:w-1/2">
//             <FormInput
//               label="Your Email"
//               type="email"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="px-4 w-full">
//             <FormTextarea label="Comment" placeholder="Enter your comment" />
//           </div>
//           <div className="px-4 w-full">
//             <button className="bg-primary px-11 py-3 rounded-md font-semibold text-base text-white">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// const FormInput = ({ label, type, placeholder }) => {
//   return (
//     <div className="mb-9">
//       <label className="block mb-4 text-base text-body-color">
//         {label} <span className="text-red">*</span>
//       </label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="border-stroke focus:border-primary dark:border-dark-3 bg-white dark:bg-dark px-[14px] py-3 border rounded w-full text-body-color outline-none"
//       />
//     </div>
//   );
// };

// const FormTextarea = ({ label, placeholder }) => {
//   return (
//     <div className="mb-12">
//       <label className="block mb-4 text-base text-body-color">
//         {label} <span className="text-red">*</span>
//       </label>
//       <textarea
//         rows="7"
//         placeholder={placeholder}
//         className="border-stroke focus:border-primary dark:border-dark-3 bg-white dark:bg-dark px-[14px] py-3 border rounded w-full text-body-color outline-none resize-none"
//       ></textarea>
//     </div>
//   );
// };
