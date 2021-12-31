import Slider from "react-slick";

export default function Campaings(props) {
  const { settings1, camps1 } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  const camps = [
    {
      imgUrl:
        "https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg",
      webUrl: "11",
    },
    {
      imgUrl:
        "https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg",
      webUrl: "1",
    },
    {
      imgUrl:
        "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
      webUrl: "1",
    },
    {
      imgUrl:
        "https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg",
      webUrl: "1",
    },
    {
      imgUrl:
        "https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg",
      webUrl: "1",
    },
    {
      imgUrl:
        "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
      webUrl: "1",
    },
  ];
  return (
    <div className="bg-gray-background">
      <div className=" max-w-screen-xl mx-auto flex flex-col overflow-x-hidden">
        <span className="hidden md:block text-sm font-semibold pb-4">
          Kampanyalar
        </span>
        <Slider className="-mx-2" {...settings}>
          {camps.map((x, i) => (
            <div
              key={i}
              className="md:pr-6 cursor-pointer"
              onClick={() => {
                console.log(x.webUrl);
              }}
            >
              <img alt="noreferer" className="md:rounded-lg" src={x.imgUrl} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
