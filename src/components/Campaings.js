import { useSelector } from "react-redux";
import Slider from "react-slick";
import Loading from "./Loading";

export default function Campaings({ settings, name, title = false }) {
  const state = useSelector((state) => state);

  const campaings = state.context.campaings;
  const camps = campaings[name];

  if (!camps) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-background">
      <div className=" max-w-screen-xl mx-auto flex flex-col overflow-x-hidden">
        {title && (
          <span className="hidden md:block text-sm font-semibold">
            Kampanyalar
          </span>
        )}

        <Slider className="-mx-2 px-2" {...settings}>
          {camps.map((x, i) => (
            <div key={i} className="md:pr-4 md:pt-4 cursor-pointer">
              <img alt="noreferer" className="md:rounded-lg" src={x.imgUrl} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
