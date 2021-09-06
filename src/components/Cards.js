export default function Cards() {
  const cards = [
    {
      id: 1,
      imgURL:
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
      title: "Her siparişinize bir kampanya",
      describe:
        "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
    },
    {
      id: 2,
      imgURL:
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
      title: "Dakikalar içinde kapınızda",
      describe: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
    },
    {
      id: 3,
      imgURL:
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
      title: "Binlerce çeşit mutluluk",
      describe: "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
    },
  ];
  return (
    <div className="bg-gray-background">
      <div className="container pt-6 pb-6 max-w-screen-xl mx-auto">
        <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4 ">
          {cards.map((item) => (
            <div
              key={item.id}
              className="w-100 h-[350px] gap-y-1 rounded-2xl flex flex-col items-center justify-center bg-primary-white"
            >
              <img
                alt="noreferer"
                className="w-[150px] h-[150px] mb-5 "
                src={item.imgURL}
              />
              <h4 className="text-[18px] font-semibold text-primary-brand-color">
                {item.title}
              </h4>
              <span className="text-[15px] mt-2 text-center font-normal text-gray text-brand-gray">
                {item.describe}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
