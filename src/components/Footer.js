import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import React from "react";
import { isMobile } from "react-device-detect";
import { Transition } from "@tailwindui/react";
import { useSelector } from "react-redux";

export default function Footer() {
  const state = useSelector((state) => state);
  const data = state.context.footerLink;
  const content = data.content;
  if (!content) {
    return null;
  }
  return (
    <>
      <div className="divide-y  pt-6">
        <div className="flex max-w-screen-xl mx-auto">
          <div className="grid grid-flow-row md:grid-cols-4 w-full pb-6 pt-6 gap-y-4 p-4">
            <div className="flex flex-col gap-y-4">
              <span className="font-normal text-xl	text-primary-brand-color">
                Getir'i indirin!
              </span>
              {data.links.map((x, i) => (
                <a href={x.webUrl} rel="noreferrer" key={i} target="_blank">
                  <img alt="img" src={x.imgUrl} />
                </a>
              ))}
            </div>
            {isMobile ? (
              <Mobile data={content} />
            ) : (
              <NotMobile data={content} />
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center max-w-screen-xl mx-auto md:pt-6 md:pb-6 md:bg-primary-white bg-gray-background">
          <div className="flex flex-col md:flex-row items-center md:gap-x-8">
            <span>© 2021 Getir </span>
            <ul className="list-disc">
              <li>
                <a
                  href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-normal text-sm text-primary-brand-color">
                    Bilgi Toplumu Hizmetleri
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row md:gap-x-4 ">
            <a
              className="hover:bg-primary-brand-color-lights hover:text-primary-brand-color p-2"
              href="https://www.instagram.com/getir"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="w-6 h-6 md:w-full" />
            </a>
            <a
              className="hover:bg-primary-brand-color-lights hover:text-primary-brand-color p-2"
              href="https://www.facebook.com/getir"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              className="hover:bg-primary-brand-color-lights hover:text-primary-brand-color p-2"
              href="https://twitter.com/getir"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <button className="flex flex-row hover:bg-primary-brand-color-lights hover:text-primary-brand-color p-2">
              <div className="flex flex-row gap-x-2">
                <FiGlobe className="w-6 h-6" />
                Türkçe (TR)
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function Mobile(props) {
  const [openedTab, setOpenedTab] = React.useState(0);
  const datas = props.data;
  return (
    <>
      {datas.map((x, i) => (
        <div className="grid" key={i}>
          <div className="flex justify-between" onClick={() => setOpenedTab(i)}>
            <span className="font-normal text-xl	text-primary-brand-color">
              {x.title}
            </span>
            <div className="bg-purple-100 rounded-lg flex items-center px-2">
              {i === openedTab ? <BsChevronDown /> : <BsChevronUp />}
            </div>
          </div>
          <Transition
            show={i === openedTab}
            enter="transition duration-1000 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {i === openedTab &&
              x.rows.map((r, j) => (
                <a href={r.titleUrl} key={j} rel="noreferrer" target="_blank">
                  <p className="text-sm	hover:text-primary-brand-color">
                    {r.title}
                  </p>
                </a>
              ))}
          </Transition>
        </div>
      ))}
    </>
  );
}
function NotMobile(props) {
  const datas = props.data;
  return (
    <>
      {datas.map((x, i) => (
        <div className="grid" key={i}>
          <span className="font-normal text-xl	text-primary-brand-color">
            {x.title}
          </span>
          {x.rows.map((r, j) => (
            <a href={r.titleUrl} key={j} rel="noreferrer" target="_blank">
              <p className="text-sm	hover:text-primary-brand-color">{r.title}</p>
            </a>
          ))}
        </div>
      ))}
    </>
  );
}
