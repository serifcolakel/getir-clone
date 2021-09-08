import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const links = [
  {
    webUrl: "https://itunes.apple.com/app/id995280265",
    imgUrl:
      "https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg",
  },
  {
    webUrl: "https://play.google.com/store/apps/details?id=com.getir",
    imgUrl:
      "https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg",
  },
  {
    webUrl: "https://appgallery7.huawei.com/#/app/C100954039",
    imgUrl:
      "https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg",
  },
];

const content = [
  {
    title: "Getir'i Keşfedin",
    rows: [
      { title: "Hakkımızda", titleUrl: "https://getir.com/hakkimizda/" },
      { title: "Kariye", titleUrl: "https://getir.breezy.hr/" },
      {
        title: "İletişim ",
        titleUrl: "https://getir.com/hakkimizda/iletisim/",
      },
      { title: "COVID-19 Duyuru", titleUrl: "https://getir.com/duyuru/" },
      {
        title: "Sosyal Sorumluluk Projeleri",
        titleUrl: "https://getir.com/sosyal-sorumluluk-projeleri/",
      },
    ],
  },
  {
    title: "Yardıma mı ihtiyacınız var?",
    rows: [
      {
        title: "Sıkça Sorulan Sorular",
        titleUrl: "https://getir.com/yardim/sss/",
      },
      {
        title: "Kişisel Verilerin Korunması",
        titleUrl: "https://getir.com/yardim/kvkk/",
      },
      {
        title: "Gizlilik Politikası ",
        titleUrl: "https://getir.com/yardim/gizlilik-politikasi/",
      },
      {
        title: "Kullanım Koşulları",
        titleUrl: "https://getir.com/yardim/kullanim-kosullari/",
      },
      {
        title: "Çerez Politikası",
        titleUrl: "https://getir.com/yardim/cerez-politikasi/",
      },
    ],
  },
  {
    title: "İş Ortağımız Olun",
    rows: [
      { title: "Bayimiz Olun", titleUrl: "https://basvuru.getir.com/bayi/" },
      {
        title: "Deponuzu Kiralayın",
        titleUrl: "https://depodukkan.getir.com/",
      },
      {
        title: "Getir Yemek Restoranı Olun ",
        titleUrl: "https://restoran.getiryemek.com/form/on-basvuru/",
      },
      {
        title: "GetirÇarşı İşletmesi Olun",
        titleUrl: "https://panel.getircarsi.com/form/on-basvuru",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <div className="divide-y  pt-6">
        <div className="flex max-w-screen-xl mx-auto">
          <div className="grid grid-flow-col grid-cols-4 w-full pb-6 pt-6">
            <div className="flex flex-col gap-y-4">
              <span className="font-normal text-xl	text-primary-brand-color">
                Getir'i indirin!
              </span>
              {links.map((x, i) => (
                <a href={x.webUrl} rel="noreferrer" key={i} target="_blank">
                  <img alt="img" src={x.imgUrl} />
                </a>
              ))}
            </div>
            {content.map((x, i) => (
              <div className="grid" key={i}>
                <span className="font-normal text-xl	text-primary-brand-color">
                  {x.title}
                </span>
                {x.rows.map((r, j) => (
                  <a href={r.titleUrl} key={j} rel="noreferrer" target="_blank">
                    <p className="text-sm	hover:text-primary-brand-color">
                      {r.title}
                    </p>
                  </a>
                ))}
                <p></p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto pt-6">
          <div className="flex flex-row gap-x-8">
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
          <div className="flex flex-row gap-x-4 pb-6">
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
