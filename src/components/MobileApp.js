const content = [
  {
    imgUrl:
      "https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg",
    webUrl: "https://itunes.apple.com/app/id995280265",
  },
  {
    imgUrl:
      "https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg",
    webUrl: "https://play.google.com/store/apps/details?id=com.getir",
  },
  {
    imgUrl:
      "https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg",
    webUrl: "https://appgallery7.huawei.com/#/app/C100954039",
  },
];
export default function MobileApp() {
  return (
    <div className="pt-10 pb-6 bg-gray-background">
      <div className="container max-w-screen-xl mx-auto flex flex-col bg-primary-brand-color rounded-xl bg-mobile-app">
        <div className="flex justify-between items-center">
          <div className="pl-8 pb-6 pt-8 flex flex-col justify-start items-start">
            <h2 className="font-bold text-3xl pb-4 text-white font-sans leading-8">
              Getir'i indirin!
            </h2>
            <span className="font-semibold text-white font-sans">
              İstediğiniz ürünleri dakikalar içinde kapınıza <br />
              getirelim.
            </span>
            <div className="grid pt-6 grid-flow-col grid-cols-3 gap-2">
              {content.map((x, i) => (
                <div key={i}>
                  <a href={x.webUrl} rel="noreferrer" target="_blank">
                    <img alt="img" src={x.imgUrl} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <img
            className="pt-6"
            alt="noreferrer"
            src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          />
        </div>
      </div>
    </div>
  );
}
