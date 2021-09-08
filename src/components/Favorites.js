import { FiPlus } from "react-icons/fi";

export default function Favorites() {
  const favs = [
    {
      id: 1,
      price: "₺2,95",
      name: "Kuzeyden",
      unit: "1.5 L",
      url: "https://cdn.getir.com/product/5a7b20fd8e19da0004bb27f8_tr_1615375864268.jpeg",
    },
    {
      id: 2,
      price: "₺5,90",
      name: "Kızılay Erzincan",
      unit: "6 x 200 mL",
      url: "https://cdn.getir.com/product/60018c5bca2126d84459c47f_tr_1610788125046.jpeg",
    },
    {
      id: 3,
      price: "₺6,39",
      name: "Lay's Mevsim Yeşillikli",
      unit: "96 g",
      url: "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
    },
    {
      id: 4,
      price: "₺2,85",
      name: "Eti Canga",
      unit: "45 g",
      url: "https://cdn.getir.com/product/5f3538dc71a71226677fba17_tr_1624437105104.jpeg",
    },
    {
      id: 5,
      price: "₺3,30",
      name: "Ülker Napoliten",
      unit: "33 g",
      url: "https://cdn.getir.com/product/574b2219dee8a90300f18d24_tr_1599938278519.jpeg",
    },
    {
      id: 6,
      price: "₺10,95",
      name: "Kavrulmuş Siyah Ay Çekirdeği",
      unit: "180 g",
      url: "https://cdn.getir.com/product/5ccaf4ff1a1763000175a869_tr_1580904995656.jpeg",
    },
    {
      id: 7,
      price: "₺7,50",
      name: "Magnum Badem",
      unit: "100 mL",
      url: "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
    },
    {
      id: 8,
      price: "₺7,95",
      name: "İçin %3 Yağlı Süt",
      unit: "1 L",
      url: "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
    },
    {
      id: 9,
      price: "₺20,75",
      name: "Bahçıvan Süzme Peynir",
      unit: "500 g",
      url: "https://cdn.getir.com/product/5ce65823a72a950001cc88c0_tr_1609902381949.jpeg",
    },
    {
      id: 10,
      price: "₺7,95",
      name: "İçin %3 Yağlı Süt",
      unit: "1 L",
      url: "https://cdn.getir.com/product/5f36a28b29d3b131b9d95548_tr_1602251256220.jpeg",
    },

    {
      id: 11,
      price: "₺5,75",
      name: "Kokteyl Domates",
      unit: "500 g",
      url: "https://cdn.getir.com/product/5cac8bffec184600019a371d_tr_1609123369165.jpeg",
    },
    {
      id: 12,
      price: "₺14,95",
      name: "İthal Muz",
      unit: "600 g",
      url: "https://cdn.getir.com/product/5fc26ef5f86ca13ef0fdae59_tr_1606836221080.jpeg",
    },
    {
      id: 13,
      price: "₺7,35",
      name: "Barilla Spagetti",
      unit: "500 g",
      url: "https://cdn.getir.com/product/5ca77244d1b0a8000103d13c_tr_1609121717343.jpeg",
    },
    {
      id: 14,
      price: "₺18,25",
      name: "Colgate Üçlü Etki",
      unit: "150 mL",
      url: "https://cdn.getir.com/product/5c3f4ee999f6570001f27a73_tr_1585136793449.jpeg",
    },
    {
      id: 15,
      price: "₺57,90",
      name: "Selpak Tuvalet Kağıdı",
      unit: "16'lı",
      url: "https://cdn.getir.com/product/595b8c52fca4ec0004417ee8_tr_1601369369934.jpeg",
    },
    {
      id: 16,
      price: "₺8,35",
      name: "Domestos Dağ Esintisi",
      unit: "750 mL",
      url: "https://cdn.getir.com/product/5d7f8dd10ed2c200010d5152_tr_1580804550544.jpeg",
    },
  ];
  return (
    <div className="bg-gray-background">
      <div className="container max-w-screen-xl mx-auto flex flex-col">
        <span className="text-sm font-semibold pb-1">Kategoriler</span>
        <div className="grid grid-cols-8 grid-rows-2">
          {favs.map((items) => (
            <div
              key={items.id}
              className="relative flex flex-col bg-primary-white border-b border-r border-opacity-30  p-3 w-30"
            >
              <div className="flex absolute w-9 h-9 top-5 right-5 font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white">
                <a href="https://getir.com/">
                  <FiPlus />
                </a>
              </div>
              <a href="https://getir.com/" target="_blank" rel="noreferrer">
                <img
                  alt="noreferer"
                  className="w-30 h-[120px] cursor-pointer "
                  src={items.url}
                />
              </a>
              <div className="flex flex-col items-center bg-primary-white w-[120px]">
                <p className="text-sm text-primary-brand-color font-semibold">
                  {items.price}
                </p>
                <p className="text-sm  text-center font-semibold">
                  {items.name}
                </p>
                <p className="text-sm text-brand-gray text-center font-semibold">
                  {items.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
