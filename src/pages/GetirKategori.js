import Campaings from "components/Campaings";
import Loading from "components/Loading";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { contextActions } from "store/context";

export default function GetirKategori() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const basket = state.context.basket;
  const [choice, setChoice] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let newChoice = [...choice];
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

  const categoriesItem = state.context.categories;
  const newItem = state.context.newItem;
  const indirim = state.context.indirim;
  const suIcecek = state.context.suIcecek;
  const meyveSebze = state.context.MeyveSebze;
  const Firindan = state.context.Firindan;
  const temelGida = state.context.temelGida;
  const atistirmalik = state.context.atistirmalik;
  const dondurma = state.context.dondurma;
  const yiyecek = state.context.yiyecek;
  const sutUrunleri = state.context.sutUrunleri;
  const fitForm = state.context.fitForm;
  const kisiselBakim = state.context.kisiselBakim;
  const evBakim = state.context.evBakim;
  const evYasam = state.context.evYasam;
  const teknoloji = state.context.teknoloji;
  const evcilHayvan = state.context.evcilHayvan;
  const bebek = state.context.bebek;
  const cinselSaglik = state.context.cinselSaglik;
  const Urunler = state.context.Urunler;

  if (
    !categoriesItem &&
    !newItem &&
    !indirim &&
    !suIcecek &&
    !dondurma &&
    !yiyecek &&
    !sutUrunleri &&
    !fitForm &&
    !kisiselBakim & !evBakim &&
    !evYasam &&
    !teknoloji &&
    !evcilHayvan &&
    !bebek &&
    !cinselSaglik &&
    !Urunler
  )
    return <Loading />;

  return (
    <div className="bg-primary-brand-color z-50 ">
      <div className=" max-w-screen-xl mx-auto flex flex-col">
        <div className="flex flex-row items-center justify-between h-20 md:mx-4 mx-4 gap-x-2  ">
          <a href="/kategori" rel="noreferrer">
            <img
              className="w-auto md:scale-[115%] "
              loading="lazy"
              alt="noReferer"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjAzODQgOS4yNDAxOUMyNi4wMzg0IDYuNDk5OTkgMjMuODAxMiA0LjcxMjg5IDIwLjUxODIgNC43MTI4OUMxNy40MDc0IDQuNzEyODkgMTQuMTUwOSA2Ljk1MDA3IDE0LjE1MDkgMTEuOTI3NUMxNC4xNTA5IDE1LjcyNjcgMTYuNDU0MiAxOC41MzMxIDIwLjQyNTYgMTguNTMzMUMyMi42NjI3IDE4LjUzMzEgMjUuMTI1IDE3LjI2MjMgMjUuNzQ3MSAxNi4zODg2QzI1Ljc0NzEgMTYuMzg4NiAyNS4zMjM1IDE0Ljc0NzEgMjQuMTU4NiAxNC43NDcxQzIzLjU0OTcgMTQuNzQ3MSAyMy4wOTk2IDE0Ljk4NTQgMjIuNTk2NSAxNS4xODM5QzIyLjA4MDMgMTUuMzk1NyAyMS40NTgxIDE1LjU5NDMgMjAuNjYzOCAxNS41OTQzQzE5LjU1MTkgMTUuNTk0MyAxNy42NDU2IDE1LjE1NzUgMTcuNjQ1NiAxMi43NjE0QzE3LjY0NTYgMTIuNzYxNCAxOC41NDU4IDEzLjAyNjIgMjAuNTg0NCAxMy4wMjYyQzI0Ljk3OTMgMTMuMDM5NCAyNi4wMzg0IDExLjE4NjEgMjYuMDM4NCA5LjI0MDE5Wk0yMC42NTA2IDcuNjc4MTRDMjIuMTU5NyA3LjY3ODE0IDIyLjg4NzggOC40OTg4OCAyMi44ODc4IDkuMjUzNDNDMjIuODg3OCAxMC4xNDA0IDIyLjA5MzUgMTAuNzA5NiAyMC42NTA2IDEwLjcwOTZDMTguNTQ1OCAxMC43MDk2IDE3Ljc1MTUgMTAuNDE4NCAxNy43NTE1IDEwLjQwNTFDMTcuNzM4MyA5LjE0NzUzIDE4Ljc0NDQgNy42NzgxNCAyMC42NTA2IDcuNjc4MTRaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik0zNC4yMDYgMTUuNjIwNkMzMi42OTY5IDE1LjYyMDYgMzEuOTE1OSAxNC4zNDk4IDMxLjc3MDMgMTMuNzkzOEMzMS42MjQ2IDEzLjI1MTEgMzEuNTMyIDEyLjQ3IDMxLjUzMiAxMS42NjI1TDMxLjU1ODUgNy41NTg4NUgzMi42NTcyQzMzLjU0NDEgNy41NTg4NSAzNC4yMTkyIDcuMjk0MSAzNC43MDkgNi43Nzc4M0MzNS4xODU2IDYuMjYxNTUgMzUuNDM3MSA1LjU1OTk1IDM1LjQzNzEgNC42OTk1SDMxLjU3MTdMMzEuNTQ1MiAyLjg4NTkzQzMxLjU0NTIgMi4zMDM0NyAzMS41NDUyIDEuODQwMTUgMzEuNTU4NSAxLjQ4MjczQzMxLjU3MTcgMS4xMjUzMiAzMS41ODQ5IDAuODQ3MzI1IDMxLjU5ODIgMC42MzU1MjFDMzEuNjExNCAwLjQxMDQ4IDMxLjYzNzkgMC4yMjUxNTEgMzEuNjUxMSAwLjA5Mjc3MzRDMzAuNDczIDAuMDkyNzczNCAyOS41ODYgMC4zNDQyOTIgMjguOTYzOSAwLjg0NzMyNkMyOC4zNDE3IDEuMzUwMzYgMjguMDM3MiAyLjE3MTEgMjguMDM3MiAzLjMzNjAyTDI4LjAxMDcgMTIuNDE3MUMyOC4wMTA3IDE2LjEzNjkgMjkuNzg0NiAxOC41NTk0IDMzLjE3MzUgMTguNTU5NEMzNC44NDE0IDE4LjU1OTQgMzYuMDU5MyAxNy42NTkyIDM2LjA1OTMgMTYuMjk1OEMzNi4wNTkzIDE1LjgxOTIgMzUuOTkzMSAxNS41Njc3IDM1Ljk1MzQgMTUuNDA4OEMzNS42NDg5IDE1LjQ4ODMgMzUuMTA2MiAxNS42MjA2IDM0LjIwNiAxNS42MjA2WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNNDIuNjkxNyAxNS43OTIyQzQxLjkzNzIgMTUuNzkyMiA0MS40NjA2IDE1LjI0OTQgNDEuNDYwNiAxNC4zNDkzVjcuNzk2NThDNDEuNDYwNiA3LjIxNDEyIDQxLjQ2MDYgNi43NTA4IDQxLjQ3MzggNi4zOTMzOEM0MS40ODcxIDYuMDM1OTYgNDEuNTAwMyA1Ljc1Nzk3IDQxLjUxMzYgNS41NDYxN0M0MS41MjY4IDUuMzIxMTIgNDEuNTUzMyA1LjEzNTggNDEuNTY2NSA1LjAwMzQyQzQwLjM3NTEgNS4wMDM0MiAzOS40NzQ5IDUuMjU0OTMgMzguODUyOCA1Ljc1Nzk3QzM4LjIzMDYgNi4yNjEgMzcuOTI2MSA3LjA4MTc0IDM3LjkyNjEgOC4yNDY2NkwzNy44OTk3IDE0LjkxODVDMzcuODk5NyAxNy4zMDEzIDM5LjQzNTIgMTguNjI1IDQxLjM2NzkgMTguNTQ1NkM0Mi41ODU4IDE4LjQ5MjcgNDMuNjQ0OCAxNy45MjM0IDQzLjY0NDggMTYuNjM5NEM0My42NDQ4IDE2LjEwOTkgNDMuNTUyMiAxNS42NzMgNDMuNTUyMiAxNS42NzNDNDMuMjg3NCAxNS43MzkyIDQzLjA4ODggMTUuNzkyMiA0Mi42OTE3IDE1Ljc5MjJaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik01MS4zNjI1IDUuMDMwMjdDNTAuNjM0NCA1LjAzMDI3IDQ5Ljg5MzEgNS4xMDk3IDQ5LjE1MTggNS4yODE3OUM0OC40MTA1IDUuNDQwNjUgNDcuNzM1MyA1Ljc1ODM1IDQ3LjEzOTYgNi4yMjE2N0M0Ni41NDM5IDYuNjg0OTkgNDYuMDU0MSA3LjMyMDQgNDUuNjgzNSA4LjE0MTE0QzQ1LjMxMjggOC45NjE4OCA0NS4xMTQzIDEwLjAwNzcgNDUuMTE0MyAxMS4zMDVWMTUuMDUxMkM0NS4xMTQzIDE2LjIwMjkgNDUuMjU5OSAxNy4yNzUyIDQ1Ljk2MTUgMTcuODA0N0M0Ni43MTYgMTguMzg3MSA0Ny42MDMgMTguNDEzNiA0OC43ODExIDE4LjQxMzZDNDguNzY3OSAxOC4yOTQ1IDQ4Ljc0MTQgMTcuOTYzNSA0OC43MjgyIDE3LjczODVDNDguNzE0OSAxNy41MjY3IDQ4LjY4ODQgMTcuMjQ4NyA0OC42ODg0IDE2Ljg5MTNDNDguNjc1MiAxNi41MzM5IDQ4LjY3NTIgMTYuMDcwNSA0OC42NzUyIDE1LjQ4ODFWMTAuNjgyOEM0OC42NzUyIDkuNTQ0MzQgNDguODYwNSA4LjA4ODE5IDUwLjg1OTQgNy45MTYxQzUxLjk4NDYgNy44MjM0NCA1Mi45Nzc1IDcuMzg2NTkgNTIuOTc3NSA2LjE2ODcyQzUyLjk3NzUgNS44OTA3MyA1Mi45MTEzIDUuMzQ3OTggNTIuNzY1NyA1LjAzMDI3SDUxLjM2MjVaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik02LjI0ODIxIDQuNzEyODlDMi4xNDQ1MSA0LjcxMjg5IDAgNy41ODU0OCAwIDExLjA4MDJDMCAxNC4zMTAyIDEuOTcyNDIgMTcuMzQxNyA1LjU1OTg1IDE3LjM0MTdDNy40MTMxMyAxNy4zNDE3IDguNDk4NjIgMTYuNTQ3NCA4Ljc2MzM4IDE2LjMyMjRWMTcuOTM3NEM4Ljc2MzM4IDE5Ljc5MDcgOC4wMzUzIDIxLjAzNSA2LjE2ODc4IDIxLjAzNUM1LjI2ODYyIDIxLjAzNSA0LjU5MzQ5IDIwLjc4MzUgMy45ODQ1NiAyMC40OTIzQzMuNDI4NTcgMjAuMjI3NSAzLjAxODIgMTkuOTIzIDIuNDc1NDYgMTkuOTIzQzEuMDg1NDkgMTkuOTIzIDAuNzAxNiAyMS42NDM5IDAuNzAxNiAyMS42NTcyQzEuNzQ3MzggMjMuMDA3NCA0LjE0MzQxIDI0LjAwMDMgNi4xNTU1NCAyNC4wMDAzQzEwLjExMzYgMjQuMDAwMyAxMi4yOTc4IDIxLjY5NjkgMTIuMjk3OCAxNy4xMTY2QzEyLjI5NzggMTcuMTE2NiAxMi4yOTc4IDEyLjUwOTkgMTIuMjk3OCAxMS43NTU0QzEyLjI4NDYgNy41NzIyNCAxMC40MzEzIDQuNzEyODkgNi4yNDgyMSA0LjcxMjg5Wk02LjIzNDk3IDE0LjIzMDhDNC42OTkzOSAxNC4yMzA4IDMuNTIxMjQgMTMuMjY0NSAzLjUyMTI0IDExLjEzMzJDMy41MjEyNCA4Ljg1NjMgNC43MjU4NyA3LjY3ODE0IDYuMjM0OTcgNy42NzgxNEM3LjcxNzYgNy42NzgxNCA4LjgwMzA5IDguNTc4MzEgOC44MDMwOSAxMC45NjExQzguODAzMDkgMTMuMzk2OCA3LjYyNDkzIDE0LjIzMDggNi4yMzQ5NyAxNC4yMzA4WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMzguNzk5NyAzLjY5MzMzQzM5LjA3NzcgMy44MjU3MSAzOS4zNjg5IDMuOTA1MTMgMzkuNjg2NiAzLjkwNTEzQzQwLjQxNDcgMy45MDUxMyA0MC45ODM5IDMuNTYwOTUgNDEuNDA3NSAyLjg3MjU5QzQxLjU3OTYgMi41NTQ4OCA0MS42NzIzIDIuMjIzOTQgNDEuNjcyMyAxLjg2NjUyQzQxLjY3MjMgMS41MzU1OCA0MS41OTI5IDEuMjE3ODcgNDEuNDM0IDAuOTEzNDA2QzQxLjI3NTEgMC42MjIxNzYgNDEuMDM2OSAwLjM5NzEzNCA0MC43MTkyIDAuMjM4MjgyQzQwLjQ0MTIgMC4wNzk0Mjg4IDQwLjE2MzIgMCAzOS44NTg3IDBDMzkuNTI3OCAwIDM5LjE5NjggMC4wOTI2NjQ5IDM4Ljg3OTEgMC4yNzc5OTNDMzguNTYxNCAwLjQ2MzMyMSAzOC4zMjMxIDAuNzI4MDc1IDM4LjEzNzggMS4wNTkwMkMzNy45NjU3IDEuMzUwMjUgMzcuODczIDEuNjk0NDMgMzcuODczIDIuMDY1MDlDMzcuODczIDIuMzk2MDMgMzcuOTUyNSAyLjcxMzc0IDM4LjExMTMgMi45OTE3M0MzOC4yNzAyIDMuMjgyOTYgMzguNTA4NSAzLjUyMTI0IDM4Ljc5OTcgMy42OTMzM1oiIGZpbGw9IiNGRkQzMDAiLz4KPC9zdmc+Cg=="
            />
          </a>
          <div className="w-[508px] h-10 flex flex-row pl-4 pr-2 items-center text-brand-color  bg-white rounded-lg">
            <BiSearch size={25} />
            <input
              type="text"
              placeholder="Ürün ara"
              className="w-full md:w-[484px] md:h-10 px-4 py-2 text-[14px] text-gray-600 focus:outline-none"
            />
            <button className="flex flex-row items-center ">
              <img
                src="https://cdn.getir.com/address-emojies/House.svg"
                loading="lazy"
                alt="home-search-icon"
              />

              <span className="text-sm text-[#525252] font-semibold ml-2 px-2">
                Ev
              </span>
              <MdKeyboardArrowRight size={50} />
            </button>
          </div>
          <div className=" bg-white w-30 h-10 flex rounded-md">
            <img
              alt="noReferer"
              loading="lazy"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy44MDY4IDEyLjcwMDFDMjMuNjY2OCAxMi41NTU1IDIzLjQ2OTMgMTIuNDczOSAyMy4yNjIzIDEyLjQ3MzlIMjMuMjYwOEwxMC43MzYzIDEyLjQ5ODlDMTAuNTI4NSAxMi40OTk2IDEwLjMzMTEgMTIuNTgyIDEwLjE5MTggMTIuNzI3M0MxMC4wNTE4IDEyLjg3MTkgOS45ODQwMyAxMy4wNjU4IDEwLjAwMzIgMTMuMjYxMkwxMC45NDA0IDIyLjQ1NTZDMTAuOTYyNSAyMy42NjQ1IDEyLjA3NTEgMjUuMDAwMiAxMy41NTgzIDI1LjAwMDJIMjAuNDUyQzIxLjg1NzkgMjUuMDAwMiAyMy4wNDc4IDIzLjkyNDQgMjMuMDY5OSAyMi42NDMxTDIzLjk5NjkgMTMuMjMzM0MyNC4wMTYgMTMuMDM3OSAyMy45NDY4IDEyLjg0NDcgMjMuODA2OCAxMi43MDAxWiIgZmlsbD0iIzVEM0VCQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjEgMTQuNDk5MVYxMS41MjcxQzE5LjEgMTAuMjg4IDE4LjE3ODEgOS4zMTgwNiAxNyA5LjMxODA2QzE1LjgyMTkgOS4zMTgwNiAxNC45IDEwLjI4OCAxNC45IDExLjUyNzFWMTQuNDk5MUMxNC45IDE0Ljg2MjkgMTQuNTg3MSAxNS4xNTgxIDE0LjIgMTUuMTU4MUMxMy44MTI5IDE1LjE1ODEgMTMuNSAxNC44NjI5IDEzLjUgMTQuNDk5MVYxMS41MjcxQzEzLjUgOS41NDk1OCAxNS4wMzU4IDguMDAwMTggMTcgOC4wMDAxOEMxOC45NjQyIDguMDAwMTggMjAuNSA5LjU0OTU4IDIwLjUgMTEuNTI3MVYxNC40OTkxQzIwLjUgMTQuODYyOSAyMC4xODcxIDE1LjE1ODEgMTkuOCAxNS4xNTgxQzE5LjQxMjkgMTUuMTU4MSAxOS4xIDE0Ljg2MjkgMTkuMSAxNC40OTkxWiIgZmlsbD0iI0ZGRDMwMCIvPgo8L3N2Zz4K"
            />
            <span className="bg-[#f3f0fe] w-[82px] h-full rounded-r-md flex items-center justify-center text-primary-brand-color font-bold text-[14px] pl-1 pr-1 ">
              {"₺" +
                parseFloat(
                  basket.reduce((a, b) => a + b.price * b.count, 0)
                ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between bg-white">
        <div className="w-full md:w-1/2 md:max-w-screen-xl flex flex-row items-center justify-center h-20 md:ml-4 ">
          <div className="flex flex-row items-center mx-4 bg-[#fafafa] ">
            <img
              src="https://getir.com/_next/static/images/bag-c43c3b2588349bace63586b13e84ee05.svg"
              loading="lazy"
              alt="canta-getir"
            />
            <div className="flex flex-col pl-4">
              <span className="text-[#697488] text-[12px] uppercase font-semibold ml-2">
                Minimum
              </span>
              <span className="text-[#191919] text-[16px] uppercase font-bold ml-2">
                ₺30,00
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center mx-4 bg-[#fafafa] ">
            <img
              src="https://getir.com/_next/static/images/courier-pin-d5fe30611fa28465f3cb9840e7807bcc.svg"
              loading="lazy"
              alt="motor-getir"
            />
            <div className="flex flex-col pl-4">
              <span className="text-[#697488] text-[12px] uppercase font-semibold ml-2">
                Minimum
              </span>
              <span className="text-[#191919] text-[16px] uppercase font-bold ml-2">
                ₺30,00
              </span>
            </div>
          </div>
        </div>
        <div className=" md:block relative h-20 before:bg-gradient-to-r before:from-[#fafafa] before:to-trasnparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <img
            className="h-20 w-full object-cover"
            loading="lazy"
            src="https://cdn.getir.com/getirweb-images/common/static-map.png"
            alt="map"
          />
        </div>
      </div>
      <div className=" bg-[#fafafa]  ">
        <div className=" max-w-screen-xl mx-auto flex flex-col ">
          <Campaings settings={settings} name="categoriCampaings" />
        </div>
      </div>
      <div className="  bg-[#fafafa] py-6 pt-8  ">
        <div className=" max-w-screen-xl mx-auto flex flex-row  gap-x-4 ">
          <div className="sticky top-[60px] w-full md:w-[240px] overflow-auto h-[80vh] no-scrollbar bg-white rounded-lg flex flex-col">
            <span className=" text-sm font-semibold bg-[#fafafa] pb-4">
              Kategoriler
            </span>
            {categoriesItem.map((item, index) => (
              <a
                href={`#${item.name}`}
                key={`#${item.name}+${index}`}
                className="text-[#525252] text-[8px] md:text-[14px] font-semibold bg-white "
              >
                <div
                  className={
                    choice[index]
                      ? "flex flex-row justify-between items-center w-full bg-primary-brand-color bg-opacity-10  hover:bg-opacity-10 cursor-pointer"
                      : "flex flex-row justify-between items-center w-full hover:bg-primary-brand-color hover:bg-opacity-10 cursor-pointer"
                  }
                  onClick={() => {
                    newChoice = [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                    ];
                    newChoice[index] = !newChoice[index];
                    setChoice(newChoice);
                  }}
                >
                  <div className="flex flex-row items-center gap-x-4 h-10 px-4 ">
                    <img
                      src={item.picURL}
                      loading="lazy"
                      alt="noreferer"
                      className="w-8 h-8 object-cover border-[1px] rounded-md hidden md:block"
                    />
                    <p>{item.name}</p>
                  </div>
                  {choice[index] ? (
                    <MdKeyboardArrowUp size={20} />
                  ) : (
                    <MdKeyboardArrowDown size={20} />
                  )}
                </div>
                <div className="flex flex-col gap-y-2 bg-[#fafafa]">
                  {choice[index] &&
                    item.subCategories.map((subItem, index) => (
                      <a
                        href={`#${subItem.name}`}
                        className="w-full gap-y-4 pl-8 md:pl-16 hover:bg-white p-2 cursor-pointer"
                        key={`#${subItem.name}+${index}`}
                      >
                        <p>{subItem.name}</p>
                      </a>
                    ))}
                </div>
              </a>
            ))}
          </div>
          <div className="md:w-[663px] h-full">
            {(choice[0]
              ? newItem
              : choice[1]
              ? indirim
              : choice[2]
              ? suIcecek
              : choice[3]
              ? meyveSebze
              : choice[4]
              ? Firindan
              : choice[5]
              ? temelGida
              : choice[6]
              ? atistirmalik
              : choice[7]
              ? dondurma
              : choice[8]
              ? yiyecek
              : choice[9]
              ? sutUrunleri
              : choice[10]
              ? fitForm
              : choice[11]
              ? kisiselBakim
              : choice[12]
              ? evBakim
              : choice[13]
              ? evYasam
              : choice[14]
              ? teknoloji
              : choice[15]
              ? evcilHayvan
              : choice[16]
              ? bebek
              : choice[17]
              ? cinselSaglik
              : newItem
            ).map((items, index) => (
              <div key={index}>
                <span
                  id={items.name}
                  key={`#${items.name}+${index}`}
                  className=" text-sm font-semibold bg-[#fafafa] md:pt-12 pt-16 "
                >
                  {items.name}
                </span>
                <div className="grid md:grid-cols-3 grid-cols-2 pt-3">
                  {items.products.map((items, index) => (
                    <div
                      key={`#${items.name}+${index}`}
                      className="relative flex flex-col bg-primary-white justify-center items-center border-b border-r border-opacity-30  md:p-3 w-full md:w-30"
                    >
                      <div
                        onClick={() => {
                          dispatch(
                            contextActions.addToBasket({
                              id: items.id,
                            })
                          );
                        }}
                        className="flex absolute w-9 h-9 top-5 right-5 font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white cursor-pointer"
                      >
                        <button>
                          <FiPlus />
                        </button>
                      </div>

                      <img
                        alt="noreferer"
                        loading="lazy"
                        className="w-30 h-[120px] cursor-pointer "
                        src={items.squareThumbnailURL}
                      />

                      <div className="flex flex-col items-center bg-primary-white w-full md:w-[120px]">
                        <p className="text-sm text-primary-brand-color font-semibold">
                          {"₺" + items.price}
                        </p>
                        <p className="text-sm  text-center font-semibold">
                          {items.name}
                        </p>
                        <p className="text-sm text-brand-gray text-center font-semibold">
                          {items.shortDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-[330px] hidden md:block sticky top-[60px]  h-[80vh] ">
            <span className="text-sm font-semibold pl-4 pt-8">Sepetim</span>
            <div className="container max-w-screen-xl mx-auto flex flex-col pt-3  md:z-50 w-[300px] ">
              {basket.length <= 0 ? (
                <div className="flex flex-col justify-center items-center w-full p-4 md:w-[300px] mx-auto border-2 rounded-lg border-sepet-border-renk">
                  <img
                    alt="noreferer"
                    className="w-30 h-[120px] cursor-pointer "
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                  />
                  <p className="p-4 text-primary-brand-color">
                    Sepetiniz şu an boş
                  </p>
                  <p className="p-2 text-brand-gray">
                    Sipariş vermek için sepetinize ürün ekleyin
                  </p>
                </div>
              ) : (
                <div
                  className={
                    basket.length > 7
                      ? "grid grid-cols-1  border-2 border-sepet-border-renk rounded-lg overflow-scroll  no-scrollbar h-[70vh] "
                      : "grid grid-cols-1  border-2 border-sepet-border-renk rounded-lg overflow-scroll  no-scrollbar h-auto"
                  }
                >
                  {basket.map((items) => {
                    return (
                      <div
                        key={items.id}
                        className="relative flex flex-col bg-primary-white justify-start items-start border-b border-r border-opacity-30  md:p-3 w-full md:w-30"
                      >
                        <div className="flex flex-row absolute top-5 right-5 justify-end">
                          <div
                            onClick={() =>
                              dispatch(
                                contextActions.deleteFromBasket({
                                  id: items.id,
                                })
                              )
                            }
                            className="flex  w-9 h-9 font-xl justify-center text-primary-brand-color items-center rounded-l-lg border z-10 bg-primary-white cursor-pointer"
                          >
                            <button>
                              {items.count > 1 ? (
                                <FiMinus />
                              ) : (
                                <RiDeleteBin6Line />
                              )}
                            </button>
                          </div>
                          <div className="flex w-8 h-8 justify-center items-center font-extrabold  bg-primary-brand-color mt-[1px]  text-white border z-10  cursor-pointer">
                            {items.count}
                          </div>
                          <div
                            onClick={() =>
                              dispatch(
                                contextActions.addToBasket({ id: items.id })
                              )
                            }
                            className="flex  w-9 h-9  font-xl justify-center text-primary-brand-color items-center rounded-r-lg border z-10 bg-primary-white cursor-pointer"
                          >
                            <button>
                              <FiPlus />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col items-start bg-primary-white w-[140px] overflow-visible ">
                          <p className="text-sm  font-semibold">{items.name}</p>
                          <p className="text-sm text-primary-brand-color font-semibold">
                            {"₺" + items.price}
                          </p>
                          <p className="text-sm text-brand-gray  font-semibold">
                            {items.shortDescription}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {basket.length >= 1 && (
                <div className="flex justify-between items-center mx-auto w-[248px] h-12 mt-4 text-xl hover:border-l-[#7849f7] rounded-lg border-2 border-primary-brand-color ">
                  <button className="w-[155px] h-[48px] bg-primary-brand-color hover:bg-[#7849f7] rounded-l-md text-white">
                    Sepete Git
                  </button>
                  <p className=" text-primary-brand-color w-[93px] font-semibold text-center">
                    {"₺" +
                      parseFloat(
                        basket.reduce((a, b) => a + b.price * b.count, 0)
                      ).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
