export default function Campaings() {
  return (
    <div className="bg-gray-background">
      <div className="container pt-6 pb-6 max-w-screen-xl mx-auto flex flex-col ">
        <span className="text-sm font-semibold pb-1">Kampanyalar</span>
        <div className="grid grid-flow-col grid-cols-3 gap-1">
          <img
            alt="noreferer"
            className="w-100 h-[200px] rounded-lg"
            src="https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg"
          />
          <img
            alt="noreferer"
            className="w-100 h-[200px] rounded-lg"
            src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
