export default function Cards(props) {
  const { data } = props;

  return (
    <div className="bg-gray-background">
      <div className="container pt-6 pb-6 max-w-screen-xl mx-auto">
        <div className="grid grid-flow-row md:grid-cols-3 md:grid-rows-1 gap-4 overflow-visible">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-100 h-[350px] gap-y-1 p-4 rounded-2xl flex flex-col items-center justify-center bg-primary-white"
            >
              <img
                alt="noreferer"
                className="w-full md:w-[150px] h-[150px] mb-5 "
                src={item.imgURL}
              />
              <h4 className="text-[18px] font-semibold text-primary-brand-color  text-center">
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
