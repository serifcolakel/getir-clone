import React, { useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import NormalizePhoneNumber from "../components/NormalizePhoneNumber";
import Campaings from "components/Campaings";
import Favorites from "components/Favorites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import { useSelector } from "react-redux";
import Loading from "components/Loading";

export default function Water() {
  const sliderWidth = useWindowWidth();
  const state = useSelector((state) => state);
  const cards = state.context.cards;
  const getirSu = cards.getirSu;
  const sliderData = state.context.sliderData;
  const suData = sliderData.suData;
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
  useEffect(() => {
    document.title = "GetirSu - Haftanın her günü kapınızda";
  }, []);

  if (!getirSu || !suData) {
    return <Loading />;
  }
  return (
    <>
      <div className="relative h:auto md:h-[500px]  before:bg-gradient-to-r before:from-primary-brand-color before:to-trasnparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {sliderWidth >= 768 && (
          <img
            src="https://getir.com/_next/static/images/water-1-293b9ae905fc9a13bd597a5512813e31.jpg"
            alt="water-"
            className=" w-full h-[500px] object-cover"
          />
        )}

        <div className="container max-w-screen-xl flex justify-between items-center relative md:absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div className="hidden md:block w-[350px] h-[190px]">
            <img
              className="w-[315px] object-cover"
              alt="noreferer"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEwIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMjEwIDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTY5LjM5MTYgMjQuNjYxNUM2OS4zOTE2IDE3LjM3MjggNjMuNDAwOSAxMi41ODAzIDU0LjY4MTIgMTIuNTgwM0M0Ni4zOTQyIDEyLjU4MDMgMzcuNzA3NyAxOC41Mzc3IDM3LjcwNzcgMzEuODE2OUMzNy43MDc3IDQxLjk2NzggNDMuODMxNSA0OS40NTYxIDU0LjQ0ODIgNDkuNDU2MUM2MC40MDU2IDQ5LjQ1NjEgNjYuOTYyIDQ2LjA2MTQgNjguNjI2MSA0My43MzE3QzY4LjYyNjEgNDMuNzMxNyA2Ny40OTQ1IDM5LjM3MTggNjQuMzk5NCAzOS4zNzE4QzYyLjc2ODYgMzkuMzcxOCA2MS41NzA0IDQwLjAwNDIgNjAuMjM5MiA0MC41Njk5QzU4Ljg0MTQgNDEuMTM1NyA1Ny4yMTA2IDQxLjYzNDkgNTUuMDgwNiA0MS42MzQ5QzUyLjExODUgNDEuNjM0OSA0Ny4wMjY1IDQwLjQzNjggNDcuMDI2NSAzNC4wODAxQzQ3LjAyNjUgMzQuMDgwMSA0OS40MjI4IDM0Ljc3OSA1NC44ODA5IDM0Ljc3OUM2Ni41NjI2IDM0Ljc0NTcgNjkuMzkxNiAyOS44MjAxIDY5LjM5MTYgMjQuNjYxNVpNNTUuMDQ3MyAyMC41MDEzQzU5LjA3NDMgMjAuNTAxMyA2MS4wMDQ3IDIyLjY5NzkgNjEuMDA0NyAyNC42OTQ3QzYxLjAwNDcgMjcuMDU3NyA1OC44NzQ3IDI4LjU4ODcgNTUuMDE0IDI4LjU4ODdDNDkuNDIyOCAyOC41ODg3IDQ3LjI5MjggMjcuNzg5OSA0Ny4yOTI4IDI3Ljc4OTlDNDcuMjkyOCAyNC4zOTUyIDQ5Ljk1NTMgMjAuNTAxMyA1NS4wNDczIDIwLjUwMTNaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik05MS4xOTA4IDQxLjY2ODJDODcuMTYzOCA0MS42NjgyIDg1LjA2NzEgMzguMjczNSA4NC43MDEgMzYuODA5MUM4NC4zMDE2IDM1LjM0NDggODQuMDM1NCAzMy4yODEzIDg0LjAzNTQgMzEuMTUxM0w4NC4xMDE5IDIwLjIzNUg4Ny4wMzA3Qzg5LjM5MzYgMjAuMjM1IDkxLjIyNDEgMTkuNTM2MSA5Mi40ODg4IDE4LjE3MTZDOTMuNzg2OCAxNi43NzM4IDk0LjQxOTEgMTQuOTQzMyA5NC40MTkxIDEyLjYxMzZIODQuMTAxOUw4NC4wMzU0IDcuNzU0NTNDODQuMDM1NCA2LjIyMzU5IDg0LjAzNTQgNC45NTg5IDg0LjA2ODYgNC4wMjcwMkM4NC4xMDE5IDMuMDYxODcgODQuMTM1MiAyLjMyOTY4IDg0LjE2ODUgMS43NjM4OUM4NC4yMDE4IDEuMTY0ODMgODQuMjY4MyAwLjY2NTYwOSA4NC4zMzQ5IDAuMjk5NTE1QzgxLjIwNjQgMC4yOTk1MTUgNzguODEwMiAwLjk2NTE0MSA3Ny4xNzk0IDIuMjk2MzlDNzUuNTQ4NiAzLjYyNzY1IDc0LjcxNjYgNS44MjQyMiA3NC43MTY2IDguOTE5MzhMNzQuNjUgMzMuMTQ4MkM3NC42NSA0My4wNjYgNzkuMzc2IDQ5LjU1NTkgODguMzk1MiA0OS41NTU5QzkyLjg1NDkgNDkuNTU1OSA5Ni4xMTY1IDQ3LjE1OTYgOTYuMTE2NSA0My41MzJDOTYuMTE2NSA0Mi4yMzQgOTUuOTUwMSA0MS41Njg0IDk1LjgxNjkgNDEuMTY5Qzk1LjA1MTUgNDEuMzM1NCA5My41ODcxIDQxLjY2ODIgOTEuMTkwOCA0MS42NjgyWiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMTEzLjgyMiA0Mi4xMzQxQzExMS44MjUgNDIuMTM0MSAxMTAuNTI3IDQwLjY2OTggMTEwLjUyNyAzOC4zMDY4VjIwLjgzNDFDMTEwLjUyNyAxOS4zMDMyIDExMC41MjcgMTguMDM4NSAxMTAuNTYxIDE3LjEwNjZDMTEwLjU5NCAxNi4xNDE0IDExMC42MjcgMTUuNDA5MiAxMTAuNjYgMTQuODQzNUMxMTAuNzI3IDE0LjI0NDQgMTEwLjc2IDEzLjc0NTIgMTEwLjgyNyAxMy4zNzkxQzEwNy42MzIgMTMuMzc5MSAxMDUuMjM2IDE0LjA0NDcgMTAzLjYwNSAxNS4zNzZDMTAxLjk3NCAxNi43MDcyIDEwMS4xNDIgMTguOTAzOCAxMDEuMTQyIDIxLjk5ODlMMTAxLjA3NSAzOS44MDQ1QzEwMS4wNzUgNDYuMTYxMiAxMDUuMTY5IDQ5LjY4OSAxMTAuMzI4IDQ5LjQ4OTNDMTEzLjU4OSA0OS4zNTYyIDExNi4zODUgNDcuODI1MyAxMTYuMzg1IDQ0LjM5NzNDMTE2LjM4NSA0Mi45NjYyIDExNi4xNTIgNDEuODM0NiAxMTYuMTUyIDQxLjgzNDZDMTE1LjM4NiA0Mi4wMDEgMTE0Ljg1NCA0Mi4xMzQxIDExMy44MjIgNDIuMTM0MVoiIGZpbGw9IiNGRkQzMDAiLz4KPHBhdGggZD0iTTEwMy40MzggOS44ODQ1NUMxMDQuMTcxIDEwLjI1MDYgMTA0Ljk2OSAxMC40NTAzIDEwNS44MDEgMTAuNDUwM0MxMDcuNzMyIDEwLjQ1MDMgMTA5LjI2MyA5LjUxODQ2IDExMC4zOTQgNy42ODc5OUMxMTAuODYgNi44NTU5NSAxMTEuMDkzIDUuOTU3MzYgMTExLjA5MyA0Ljk5MjJDMTExLjA5MyA0LjA5MzYgMTEwLjg5MyAzLjI2MTU3IDExMC40NjEgMi40NjI4MkMxMTAuMDI4IDEuNjY0MDcgMTA5LjM5NiAxLjA2NSAxMDguNTY0IDAuNjMyMzQ1QzEwNy44MzIgMC4xOTk2ODggMTA3LjA2NiAwIDEwNi4yNjcgMEMxMDUuMzY5IDAgMTA0LjUwMyAwLjI2NjI1MSAxMDMuNjcxIDAuNzY1NDcxQzEwMi44MzkgMS4yNjQ2OSAxMDIuMTc0IDEuOTYzNiAxMDEuNzA4IDIuODYyMTlDMTAxLjI0MiAzLjY2MDk1IDEwMS4wMDkgNC41NTk1NCAxMDEuMDA5IDUuNTU3OThDMTAxLjAwOSA2LjQ1NjU4IDEwMS4yMDkgNy4yODg2MSAxMDEuNjQxIDguMDU0MDhDMTAyLjA0MSA4Ljc4NjI3IDEwMi42NCA5LjQxODYyIDEwMy40MzggOS44ODQ1NVoiIGZpbGw9IiNGRkQzMDAiLz4KPHBhdGggZD0iTTEzNi45NTMgMTMuNDQ1N0MxMzQuOTg5IDEzLjQ0NTcgMTMzLjAyNSAxMy42Nzg2IDEzMS4wNjIgMTQuMTExM0MxMjkuMDk4IDE0LjU0NCAxMjcuMzAxIDE1LjM3NiAxMjUuNzA0IDE2LjYwNzRDMTI0LjEwNiAxNy44Mzg4IDEyMi44MDggMTkuNTM2MiAxMjEuODEgMjEuNzMyN0MxMjAuODExIDIzLjkyOTMgMTIwLjMxMiAyNi43MjQ5IDEyMC4zMTIgMzAuMTUyOVY0MC4xNzA2QzEyMC4zMTIgNDMuMjY1OCAxMjAuNzExIDQ2LjEyNzkgMTIyLjU3NSA0Ny41MjU4QzEyNC42MDUgNDkuMDU2NyAxMjYuOTY4IDQ5LjEyMzMgMTMwLjA5NyA0OS4xMjMzQzEzMC4wMyA0OC44MjM3IDEyOS45OTcgNDcuOTI1MSAxMjkuOTMgNDcuMzI2MUMxMjkuODY0IDQ2Ljc2MDMgMTI5LjgzIDQ1Ljk5NDggMTI5LjgzIDQ1LjA2MjlDMTI5Ljc5NyA0NC4wOTc4IDEyOS43OTcgNDIuODY2NCAxMjkuNzk3IDQxLjMzNTRWMjguNDg4OEMxMjkuNzk3IDI1LjQ2MDIgMTMwLjI5NiAyMS41NjYzIDEzNS42MjEgMjEuMTMzN0MxMzguNjE3IDIwLjg2NzQgMTQxLjI3OSAxOS43MzU5IDE0MS4yNzkgMTYuNDc0M0MxNDEuMjc5IDE1LjcwODggMTQxLjExMyAxNC4yNzc3IDE0MC43NDcgMTMuNDQ1N0gxMzYuOTUzWiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMTYuNjQwNyAxMi41ODAzQzUuNzI0MzkgMTIuNTgwMyAwIDIwLjIzNSAwIDI5LjU1MzhDMCAzOC4xNzM3IDUuMjU4NDUgNDYuMjI3OCAxNC44MTAyIDQ2LjIyNzhDMTkuNzY5MSA0Ni4yMjc4IDIyLjYzMTMgNDQuMTMxIDIzLjM2MzUgNDMuNDk4N1Y0Ny44MjUzQzIzLjM2MzUgNTIuNzg0MiAyMS40MzMyIDU2LjA3OSAxNi40NDEgNTYuMDc5QzE0LjA0NDcgNTYuMDc5IDEyLjI0NzUgNTUuNDEzNCAxMC41ODM1IDU0LjY0NzlDOS4xMTkwOCA1My45NDkgOC4wMjA4IDUzLjExNyA2LjU1NjQyIDUzLjExN0MyLjgyODkxIDUzLjExNyAxLjc5NzE5IDU3LjcwOTggMS44MzA0NyA1Ny43NDMxQzQuNjI2MSA2MS4zMzc1IDExLjAxNjEgNjQgMTYuMzc0NCA2NEMyNi45MjQ2IDY0IDMyLjc0ODggNTcuODQyOSAzMi43NDg4IDQ1LjYyODdDMzIuNzQ4OCA0NS42Mjg3IDMyLjc0ODggMzMuMzE0NiAzMi43NDg4IDMxLjM1MUMzMi43MTU1IDIwLjIwMTggMjcuNzg5OSAxMi41ODAzIDE2LjY0MDcgMTIuNTgwM1pNMTYuNTc0MSAzNy45NzRDMTIuNDgwNSAzNy45NzQgOS4zNTIwNSAzNS4zNzggOS4zNTIwNSAyOS42ODY5QzkuMzUyMDUgMjMuNjI5NyAxMi41NDcxIDIwLjQ2OCAxNi41NzQxIDIwLjQ2OEMyMC41MzQ2IDIwLjQ2OCAyMy40MzAxIDIyLjg2NDMgMjMuNDMwMSAyOS4yMjFDMjMuNDMwMSAzNS43NDQxIDIwLjMwMTYgMzcuOTc0IDE2LjU3NDEgMzcuOTc0WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMTc4LjU4OCAzMi44NDg3VjE5LjYzNkMxNzguNTg4IDE1LjUwOTEgMTgwLjc1MSAxMy4zNzkxIDE4NS44NDMgMTMuMzc5MUgxODcuNDA3VjMzLjE0ODJDMTg3LjQwNyAzOS4xMzg4IDE4OS45MzcgNDEuNjM0OSAxOTMuNTMxIDQxLjYzNDlDMTk3LjUyNSA0MS42MzQ5IDIwMC42NTMgMzkuMDM5IDIwMC42NTMgMzIuNTQ5MVYxOS42MzZDMjAwLjY1MyAxNS41MDkxIDIwMi44ODMgMTMuMzc5MSAyMDcuOTA4IDEzLjM3OTFIMjA5LjUzOVYzMy40MTQ0QzIwOS41MzkgNDMuNjY1MSAyMDIuNjgzIDQ5LjM4OTUgMTkzLjk5NyA0OS4zODk1QzE4My43NDYgNDkuNDIyOCAxNzguNTg4IDQzLjc5ODIgMTc4LjU4OCAzMi44NDg3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE1OC43MTkgNDkuNjg5MUMxNTIuMTk1IDQ5LjY4OTEgMTQ3LjMzNiA0Ni4zMjc3IDE0Ny4zMzYgNDIuN1YzOC42NzI5SDE0Ny42NjlDMTQ5LjU2NiA0MC40MzY5IDE1NC4xMjYgNDIuMDM0NCAxNTguMzE5IDQyLjAzNDRDMTYyLjY3OSA0Mi4wMzQ0IDE2NC43NzYgNDAuNzY5NyAxNjQuNzc2IDM4LjE0MDRDMTY0Ljc3NiAzNi4xMTAzIDE2My41MTEgMzUuMTExOCAxNTcuMzg3IDM0LjI0NjVDMTQ5Ljg5OSAzMy4xODE1IDE0Ni4yNzEgMzAuMjE5NSAxNDYuMjcxIDI0LjgyNzlDMTQ2LjI3MSAxOC4xNzE3IDE1Mi4yNjIgMTIuNTEzOCAxNjEuMzQ4IDEyLjUxMzhDMTY5LjM2OSAxMi41MTM4IDE3Mi42NjQgMTYuNjc0IDE3Mi42NjQgMjAuMDY4N1YyMy40MzAxSDE3Mi4zMzFDMTcwLjUgMjEuNTk5NiAxNjYuNDA3IDIwLjEzNTIgMTYyLjE4IDIwLjEzNTJDMTU2Ljc4OCAyMC4xMzUyIDE1NS4wNTggMjEuNzY2IDE1NS4wNTggMjQuMDk1N0MxNTUuMDU4IDI1Ljg1OTYgMTU2LjEyMyAyNi41OTE4IDE2Mi4xOCAyNy41OTAzQzE2OS41NjggMjguNzg4NCAxNzMuNDk2IDMyLjAxNjcgMTczLjQ5NiAzNy42NzQ1QzE3My41MjkgNDUuMjI5NCAxNjguMjcgNDkuNjg5MSAxNTguNzE5IDQ5LjY4OTFaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjIwOS41MzkiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
            />
            <h3 className="mt-8 text-4xl font-semibold text-white ">
              Market Fiyatına
              <br /> kapınızda
            </h3>
          </div>
          <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
            <h4 className="text-red-800 text-center font-semibold mb-4">
              Giriş yap veya kayıt ol
            </h4>
            <div className="grid gap-y-4 w-full">
              <div className="flex flex-col gap-x-2 w-full">
                <NormalizePhoneNumber />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Campaings settings={settings} name="suCampaings" />
      <Favorites data={suData} isBasket={true} />
      <MobileApp />
      <Cards data={getirSu} />
    </>
  );
}
