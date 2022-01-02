import { useEffect, useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { contextActions } from "store/context";

export default function Header() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const basket = state.context.basket;
  useEffect(() => {
    console.log(open ? "basket is opened" : "basket is closed");
  }, [open]);
  return (
    <div className="sticky top-0 z-50 bg-brand-color md:pt-1">
      <div className="max-w-screen-xl mx-auto h-16 md:h-12 flex items-center justify-center md:justify-between ">
        <div className="flex flex-row items-center w-3/4 gap-x-2 md:gap-x-0">
          <div className="items-center flex md:hover:bg-secondary-brand-color md:h-10 md:rounded-t-xl md:pt-6 md:pb-6 md:pr-2 md:pl-2">
            <a href="/" rel="noreferrer">
              <img
                className="w-auto md:scale-75 "
                alt="noReferer"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjAzODQgOS4yNDAxOUMyNi4wMzg0IDYuNDk5OTkgMjMuODAxMiA0LjcxMjg5IDIwLjUxODIgNC43MTI4OUMxNy40MDc0IDQuNzEyODkgMTQuMTUwOSA2Ljk1MDA3IDE0LjE1MDkgMTEuOTI3NUMxNC4xNTA5IDE1LjcyNjcgMTYuNDU0MiAxOC41MzMxIDIwLjQyNTYgMTguNTMzMUMyMi42NjI3IDE4LjUzMzEgMjUuMTI1IDE3LjI2MjMgMjUuNzQ3MSAxNi4zODg2QzI1Ljc0NzEgMTYuMzg4NiAyNS4zMjM1IDE0Ljc0NzEgMjQuMTU4NiAxNC43NDcxQzIzLjU0OTcgMTQuNzQ3MSAyMy4wOTk2IDE0Ljk4NTQgMjIuNTk2NSAxNS4xODM5QzIyLjA4MDMgMTUuMzk1NyAyMS40NTgxIDE1LjU5NDMgMjAuNjYzOCAxNS41OTQzQzE5LjU1MTkgMTUuNTk0MyAxNy42NDU2IDE1LjE1NzUgMTcuNjQ1NiAxMi43NjE0QzE3LjY0NTYgMTIuNzYxNCAxOC41NDU4IDEzLjAyNjIgMjAuNTg0NCAxMy4wMjYyQzI0Ljk3OTMgMTMuMDM5NCAyNi4wMzg0IDExLjE4NjEgMjYuMDM4NCA5LjI0MDE5Wk0yMC42NTA2IDcuNjc4MTRDMjIuMTU5NyA3LjY3ODE0IDIyLjg4NzggOC40OTg4OCAyMi44ODc4IDkuMjUzNDNDMjIuODg3OCAxMC4xNDA0IDIyLjA5MzUgMTAuNzA5NiAyMC42NTA2IDEwLjcwOTZDMTguNTQ1OCAxMC43MDk2IDE3Ljc1MTUgMTAuNDE4NCAxNy43NTE1IDEwLjQwNTFDMTcuNzM4MyA5LjE0NzUzIDE4Ljc0NDQgNy42NzgxNCAyMC42NTA2IDcuNjc4MTRaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik0zNC4yMDYgMTUuNjIwNkMzMi42OTY5IDE1LjYyMDYgMzEuOTE1OSAxNC4zNDk4IDMxLjc3MDMgMTMuNzkzOEMzMS42MjQ2IDEzLjI1MTEgMzEuNTMyIDEyLjQ3IDMxLjUzMiAxMS42NjI1TDMxLjU1ODUgNy41NTg4NUgzMi42NTcyQzMzLjU0NDEgNy41NTg4NSAzNC4yMTkyIDcuMjk0MSAzNC43MDkgNi43Nzc4M0MzNS4xODU2IDYuMjYxNTUgMzUuNDM3MSA1LjU1OTk1IDM1LjQzNzEgNC42OTk1SDMxLjU3MTdMMzEuNTQ1MiAyLjg4NTkzQzMxLjU0NTIgMi4zMDM0NyAzMS41NDUyIDEuODQwMTUgMzEuNTU4NSAxLjQ4MjczQzMxLjU3MTcgMS4xMjUzMiAzMS41ODQ5IDAuODQ3MzI1IDMxLjU5ODIgMC42MzU1MjFDMzEuNjExNCAwLjQxMDQ4IDMxLjYzNzkgMC4yMjUxNTEgMzEuNjUxMSAwLjA5Mjc3MzRDMzAuNDczIDAuMDkyNzczNCAyOS41ODYgMC4zNDQyOTIgMjguOTYzOSAwLjg0NzMyNkMyOC4zNDE3IDEuMzUwMzYgMjguMDM3MiAyLjE3MTEgMjguMDM3MiAzLjMzNjAyTDI4LjAxMDcgMTIuNDE3MUMyOC4wMTA3IDE2LjEzNjkgMjkuNzg0NiAxOC41NTk0IDMzLjE3MzUgMTguNTU5NEMzNC44NDE0IDE4LjU1OTQgMzYuMDU5MyAxNy42NTkyIDM2LjA1OTMgMTYuMjk1OEMzNi4wNTkzIDE1LjgxOTIgMzUuOTkzMSAxNS41Njc3IDM1Ljk1MzQgMTUuNDA4OEMzNS42NDg5IDE1LjQ4ODMgMzUuMTA2MiAxNS42MjA2IDM0LjIwNiAxNS42MjA2WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNNDIuNjkxNyAxNS43OTIyQzQxLjkzNzIgMTUuNzkyMiA0MS40NjA2IDE1LjI0OTQgNDEuNDYwNiAxNC4zNDkzVjcuNzk2NThDNDEuNDYwNiA3LjIxNDEyIDQxLjQ2MDYgNi43NTA4IDQxLjQ3MzggNi4zOTMzOEM0MS40ODcxIDYuMDM1OTYgNDEuNTAwMyA1Ljc1Nzk3IDQxLjUxMzYgNS41NDYxN0M0MS41MjY4IDUuMzIxMTIgNDEuNTUzMyA1LjEzNTggNDEuNTY2NSA1LjAwMzQyQzQwLjM3NTEgNS4wMDM0MiAzOS40NzQ5IDUuMjU0OTMgMzguODUyOCA1Ljc1Nzk3QzM4LjIzMDYgNi4yNjEgMzcuOTI2MSA3LjA4MTc0IDM3LjkyNjEgOC4yNDY2NkwzNy44OTk3IDE0LjkxODVDMzcuODk5NyAxNy4zMDEzIDM5LjQzNTIgMTguNjI1IDQxLjM2NzkgMTguNTQ1NkM0Mi41ODU4IDE4LjQ5MjcgNDMuNjQ0OCAxNy45MjM0IDQzLjY0NDggMTYuNjM5NEM0My42NDQ4IDE2LjEwOTkgNDMuNTUyMiAxNS42NzMgNDMuNTUyMiAxNS42NzNDNDMuMjg3NCAxNS43MzkyIDQzLjA4ODggMTUuNzkyMiA0Mi42OTE3IDE1Ljc5MjJaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik01MS4zNjI1IDUuMDMwMjdDNTAuNjM0NCA1LjAzMDI3IDQ5Ljg5MzEgNS4xMDk3IDQ5LjE1MTggNS4yODE3OUM0OC40MTA1IDUuNDQwNjUgNDcuNzM1MyA1Ljc1ODM1IDQ3LjEzOTYgNi4yMjE2N0M0Ni41NDM5IDYuNjg0OTkgNDYuMDU0MSA3LjMyMDQgNDUuNjgzNSA4LjE0MTE0QzQ1LjMxMjggOC45NjE4OCA0NS4xMTQzIDEwLjAwNzcgNDUuMTE0MyAxMS4zMDVWMTUuMDUxMkM0NS4xMTQzIDE2LjIwMjkgNDUuMjU5OSAxNy4yNzUyIDQ1Ljk2MTUgMTcuODA0N0M0Ni43MTYgMTguMzg3MSA0Ny42MDMgMTguNDEzNiA0OC43ODExIDE4LjQxMzZDNDguNzY3OSAxOC4yOTQ1IDQ4Ljc0MTQgMTcuOTYzNSA0OC43MjgyIDE3LjczODVDNDguNzE0OSAxNy41MjY3IDQ4LjY4ODQgMTcuMjQ4NyA0OC42ODg0IDE2Ljg5MTNDNDguNjc1MiAxNi41MzM5IDQ4LjY3NTIgMTYuMDcwNSA0OC42NzUyIDE1LjQ4ODFWMTAuNjgyOEM0OC42NzUyIDkuNTQ0MzQgNDguODYwNSA4LjA4ODE5IDUwLjg1OTQgNy45MTYxQzUxLjk4NDYgNy44MjM0NCA1Mi45Nzc1IDcuMzg2NTkgNTIuOTc3NSA2LjE2ODcyQzUyLjk3NzUgNS44OTA3MyA1Mi45MTEzIDUuMzQ3OTggNTIuNzY1NyA1LjAzMDI3SDUxLjM2MjVaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik02LjI0ODIxIDQuNzEyODlDMi4xNDQ1MSA0LjcxMjg5IDAgNy41ODU0OCAwIDExLjA4MDJDMCAxNC4zMTAyIDEuOTcyNDIgMTcuMzQxNyA1LjU1OTg1IDE3LjM0MTdDNy40MTMxMyAxNy4zNDE3IDguNDk4NjIgMTYuNTQ3NCA4Ljc2MzM4IDE2LjMyMjRWMTcuOTM3NEM4Ljc2MzM4IDE5Ljc5MDcgOC4wMzUzIDIxLjAzNSA2LjE2ODc4IDIxLjAzNUM1LjI2ODYyIDIxLjAzNSA0LjU5MzQ5IDIwLjc4MzUgMy45ODQ1NiAyMC40OTIzQzMuNDI4NTcgMjAuMjI3NSAzLjAxODIgMTkuOTIzIDIuNDc1NDYgMTkuOTIzQzEuMDg1NDkgMTkuOTIzIDAuNzAxNiAyMS42NDM5IDAuNzAxNiAyMS42NTcyQzEuNzQ3MzggMjMuMDA3NCA0LjE0MzQxIDI0LjAwMDMgNi4xNTU1NCAyNC4wMDAzQzEwLjExMzYgMjQuMDAwMyAxMi4yOTc4IDIxLjY5NjkgMTIuMjk3OCAxNy4xMTY2QzEyLjI5NzggMTcuMTE2NiAxMi4yOTc4IDEyLjUwOTkgMTIuMjk3OCAxMS43NTU0QzEyLjI4NDYgNy41NzIyNCAxMC40MzEzIDQuNzEyODkgNi4yNDgyMSA0LjcxMjg5Wk02LjIzNDk3IDE0LjIzMDhDNC42OTkzOSAxNC4yMzA4IDMuNTIxMjQgMTMuMjY0NSAzLjUyMTI0IDExLjEzMzJDMy41MjEyNCA4Ljg1NjMgNC43MjU4NyA3LjY3ODE0IDYuMjM0OTcgNy42NzgxNEM3LjcxNzYgNy42NzgxNCA4LjgwMzA5IDguNTc4MzEgOC44MDMwOSAxMC45NjExQzguODAzMDkgMTMuMzk2OCA3LjYyNDkzIDE0LjIzMDggNi4yMzQ5NyAxNC4yMzA4WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMzguNzk5NyAzLjY5MzMzQzM5LjA3NzcgMy44MjU3MSAzOS4zNjg5IDMuOTA1MTMgMzkuNjg2NiAzLjkwNTEzQzQwLjQxNDcgMy45MDUxMyA0MC45ODM5IDMuNTYwOTUgNDEuNDA3NSAyLjg3MjU5QzQxLjU3OTYgMi41NTQ4OCA0MS42NzIzIDIuMjIzOTQgNDEuNjcyMyAxLjg2NjUyQzQxLjY3MjMgMS41MzU1OCA0MS41OTI5IDEuMjE3ODcgNDEuNDM0IDAuOTEzNDA2QzQxLjI3NTEgMC42MjIxNzYgNDEuMDM2OSAwLjM5NzEzNCA0MC43MTkyIDAuMjM4MjgyQzQwLjQ0MTIgMC4wNzk0Mjg4IDQwLjE2MzIgMCAzOS44NTg3IDBDMzkuNTI3OCAwIDM5LjE5NjggMC4wOTI2NjQ5IDM4Ljg3OTEgMC4yNzc5OTNDMzguNTYxNCAwLjQ2MzMyMSAzOC4zMjMxIDAuNzI4MDc1IDM4LjEzNzggMS4wNTkwMkMzNy45NjU3IDEuMzUwMjUgMzcuODczIDEuNjk0NDMgMzcuODczIDIuMDY1MDlDMzcuODczIDIuMzk2MDMgMzcuOTUyNSAyLjcxMzc0IDM4LjExMTMgMi45OTE3M0MzOC4yNzAyIDMuMjgyOTYgMzguNTA4NSAzLjUyMTI0IDM4Ljc5OTcgMy42OTMzM1oiIGZpbGw9IiNGRkQzMDAiLz4KPC9zdmc+Cg=="
              />
            </a>
          </div>
          <div className="md:flex items-center md:hover:bg-secondary-brand-color md:h-8 md:rounded-t-xl md:pt-6 md:pb-6 md:pr-2 md:pl-2">
            <a href="/yemek" rel="noreferrer">
              <img
                className="w-auto h-5 md:scale-75 "
                alt="noReferer"
                src="https://getir.com/_next/static/images/getir-food-logo-2dcee4ade7ab424ae39e8602503ab31f.svg"
              />
            </a>
          </div>
          <div className="md:flex items-center md:hover:bg-secondary-brand-color md:h-8 md:rounded-t-xl md:pt-6 md:pb-6 md:pr-2 md:pl-2">
            <a href="/buyuk" rel="noreferrer">
              <img
                className="w-auto h-5 md:scale-75"
                alt="noReferer"
                src="https://getir.com/_next/static/images/getir-more-logo-43b84c4381edcbda2c1d686d826034de.svg"
              />
            </a>
          </div>
          <div className=" md:flex items-center md:hover:bg-secondary-brand-color md:h-8 md:rounded-t-xl md:pt-6 md:pb-6 md:pr-2 md:pl-2">
            <a href="/su" rel="noreferrer">
              <img
                className="w-auto h-5 md:scale-75"
                alt="noReferer"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEwIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMjEwIDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTY5LjM5MTYgMjQuNjYxNUM2OS4zOTE2IDE3LjM3MjggNjMuNDAwOSAxMi41ODAzIDU0LjY4MTIgMTIuNTgwM0M0Ni4zOTQyIDEyLjU4MDMgMzcuNzA3NyAxOC41Mzc3IDM3LjcwNzcgMzEuODE2OUMzNy43MDc3IDQxLjk2NzggNDMuODMxNSA0OS40NTYxIDU0LjQ0ODIgNDkuNDU2MUM2MC40MDU2IDQ5LjQ1NjEgNjYuOTYyIDQ2LjA2MTQgNjguNjI2MSA0My43MzE3QzY4LjYyNjEgNDMuNzMxNyA2Ny40OTQ1IDM5LjM3MTggNjQuMzk5NCAzOS4zNzE4QzYyLjc2ODYgMzkuMzcxOCA2MS41NzA0IDQwLjAwNDIgNjAuMjM5MiA0MC41Njk5QzU4Ljg0MTQgNDEuMTM1NyA1Ny4yMTA2IDQxLjYzNDkgNTUuMDgwNiA0MS42MzQ5QzUyLjExODUgNDEuNjM0OSA0Ny4wMjY1IDQwLjQzNjggNDcuMDI2NSAzNC4wODAxQzQ3LjAyNjUgMzQuMDgwMSA0OS40MjI4IDM0Ljc3OSA1NC44ODA5IDM0Ljc3OUM2Ni41NjI2IDM0Ljc0NTcgNjkuMzkxNiAyOS44MjAxIDY5LjM5MTYgMjQuNjYxNVpNNTUuMDQ3MyAyMC41MDEzQzU5LjA3NDMgMjAuNTAxMyA2MS4wMDQ3IDIyLjY5NzkgNjEuMDA0NyAyNC42OTQ3QzYxLjAwNDcgMjcuMDU3NyA1OC44NzQ3IDI4LjU4ODcgNTUuMDE0IDI4LjU4ODdDNDkuNDIyOCAyOC41ODg3IDQ3LjI5MjggMjcuNzg5OSA0Ny4yOTI4IDI3Ljc4OTlDNDcuMjkyOCAyNC4zOTUyIDQ5Ljk1NTMgMjAuNTAxMyA1NS4wNDczIDIwLjUwMTNaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik05MS4xOTA4IDQxLjY2ODJDODcuMTYzOCA0MS42NjgyIDg1LjA2NzEgMzguMjczNSA4NC43MDEgMzYuODA5MUM4NC4zMDE2IDM1LjM0NDggODQuMDM1NCAzMy4yODEzIDg0LjAzNTQgMzEuMTUxM0w4NC4xMDE5IDIwLjIzNUg4Ny4wMzA3Qzg5LjM5MzYgMjAuMjM1IDkxLjIyNDEgMTkuNTM2MSA5Mi40ODg4IDE4LjE3MTZDOTMuNzg2OCAxNi43NzM4IDk0LjQxOTEgMTQuOTQzMyA5NC40MTkxIDEyLjYxMzZIODQuMTAxOUw4NC4wMzU0IDcuNzU0NTNDODQuMDM1NCA2LjIyMzU5IDg0LjAzNTQgNC45NTg5IDg0LjA2ODYgNC4wMjcwMkM4NC4xMDE5IDMuMDYxODcgODQuMTM1MiAyLjMyOTY4IDg0LjE2ODUgMS43NjM4OUM4NC4yMDE4IDEuMTY0ODMgODQuMjY4MyAwLjY2NTYwOSA4NC4zMzQ5IDAuMjk5NTE1QzgxLjIwNjQgMC4yOTk1MTUgNzguODEwMiAwLjk2NTE0MSA3Ny4xNzk0IDIuMjk2MzlDNzUuNTQ4NiAzLjYyNzY1IDc0LjcxNjYgNS44MjQyMiA3NC43MTY2IDguOTE5MzhMNzQuNjUgMzMuMTQ4MkM3NC42NSA0My4wNjYgNzkuMzc2IDQ5LjU1NTkgODguMzk1MiA0OS41NTU5QzkyLjg1NDkgNDkuNTU1OSA5Ni4xMTY1IDQ3LjE1OTYgOTYuMTE2NSA0My41MzJDOTYuMTE2NSA0Mi4yMzQgOTUuOTUwMSA0MS41Njg0IDk1LjgxNjkgNDEuMTY5Qzk1LjA1MTUgNDEuMzM1NCA5My41ODcxIDQxLjY2ODIgOTEuMTkwOCA0MS42NjgyWiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMTEzLjgyMiA0Mi4xMzQxQzExMS44MjUgNDIuMTM0MSAxMTAuNTI3IDQwLjY2OTggMTEwLjUyNyAzOC4zMDY4VjIwLjgzNDFDMTEwLjUyNyAxOS4zMDMyIDExMC41MjcgMTguMDM4NSAxMTAuNTYxIDE3LjEwNjZDMTEwLjU5NCAxNi4xNDE0IDExMC42MjcgMTUuNDA5MiAxMTAuNjYgMTQuODQzNUMxMTAuNzI3IDE0LjI0NDQgMTEwLjc2IDEzLjc0NTIgMTEwLjgyNyAxMy4zNzkxQzEwNy42MzIgMTMuMzc5MSAxMDUuMjM2IDE0LjA0NDcgMTAzLjYwNSAxNS4zNzZDMTAxLjk3NCAxNi43MDcyIDEwMS4xNDIgMTguOTAzOCAxMDEuMTQyIDIxLjk5ODlMMTAxLjA3NSAzOS44MDQ1QzEwMS4wNzUgNDYuMTYxMiAxMDUuMTY5IDQ5LjY4OSAxMTAuMzI4IDQ5LjQ4OTNDMTEzLjU4OSA0OS4zNTYyIDExNi4zODUgNDcuODI1MyAxMTYuMzg1IDQ0LjM5NzNDMTE2LjM4NSA0Mi45NjYyIDExNi4xNTIgNDEuODM0NiAxMTYuMTUyIDQxLjgzNDZDMTE1LjM4NiA0Mi4wMDEgMTE0Ljg1NCA0Mi4xMzQxIDExMy44MjIgNDIuMTM0MVoiIGZpbGw9IiNGRkQzMDAiLz4KPHBhdGggZD0iTTEwMy40MzggOS44ODQ1NUMxMDQuMTcxIDEwLjI1MDYgMTA0Ljk2OSAxMC40NTAzIDEwNS44MDEgMTAuNDUwM0MxMDcuNzMyIDEwLjQ1MDMgMTA5LjI2MyA5LjUxODQ2IDExMC4zOTQgNy42ODc5OUMxMTAuODYgNi44NTU5NSAxMTEuMDkzIDUuOTU3MzYgMTExLjA5MyA0Ljk5MjJDMTExLjA5MyA0LjA5MzYgMTEwLjg5MyAzLjI2MTU3IDExMC40NjEgMi40NjI4MkMxMTAuMDI4IDEuNjY0MDcgMTA5LjM5NiAxLjA2NSAxMDguNTY0IDAuNjMyMzQ1QzEwNy44MzIgMC4xOTk2ODggMTA3LjA2NiAwIDEwNi4yNjcgMEMxMDUuMzY5IDAgMTA0LjUwMyAwLjI2NjI1MSAxMDMuNjcxIDAuNzY1NDcxQzEwMi44MzkgMS4yNjQ2OSAxMDIuMTc0IDEuOTYzNiAxMDEuNzA4IDIuODYyMTlDMTAxLjI0MiAzLjY2MDk1IDEwMS4wMDkgNC41NTk1NCAxMDEuMDA5IDUuNTU3OThDMTAxLjAwOSA2LjQ1NjU4IDEwMS4yMDkgNy4yODg2MSAxMDEuNjQxIDguMDU0MDhDMTAyLjA0MSA4Ljc4NjI3IDEwMi42NCA5LjQxODYyIDEwMy40MzggOS44ODQ1NVoiIGZpbGw9IiNGRkQzMDAiLz4KPHBhdGggZD0iTTEzNi45NTMgMTMuNDQ1N0MxMzQuOTg5IDEzLjQ0NTcgMTMzLjAyNSAxMy42Nzg2IDEzMS4wNjIgMTQuMTExM0MxMjkuMDk4IDE0LjU0NCAxMjcuMzAxIDE1LjM3NiAxMjUuNzA0IDE2LjYwNzRDMTI0LjEwNiAxNy44Mzg4IDEyMi44MDggMTkuNTM2MiAxMjEuODEgMjEuNzMyN0MxMjAuODExIDIzLjkyOTMgMTIwLjMxMiAyNi43MjQ5IDEyMC4zMTIgMzAuMTUyOVY0MC4xNzA2QzEyMC4zMTIgNDMuMjY1OCAxMjAuNzExIDQ2LjEyNzkgMTIyLjU3NSA0Ny41MjU4QzEyNC42MDUgNDkuMDU2NyAxMjYuOTY4IDQ5LjEyMzMgMTMwLjA5NyA0OS4xMjMzQzEzMC4wMyA0OC44MjM3IDEyOS45OTcgNDcuOTI1MSAxMjkuOTMgNDcuMzI2MUMxMjkuODY0IDQ2Ljc2MDMgMTI5LjgzIDQ1Ljk5NDggMTI5LjgzIDQ1LjA2MjlDMTI5Ljc5NyA0NC4wOTc4IDEyOS43OTcgNDIuODY2NCAxMjkuNzk3IDQxLjMzNTRWMjguNDg4OEMxMjkuNzk3IDI1LjQ2MDIgMTMwLjI5NiAyMS41NjYzIDEzNS42MjEgMjEuMTMzN0MxMzguNjE3IDIwLjg2NzQgMTQxLjI3OSAxOS43MzU5IDE0MS4yNzkgMTYuNDc0M0MxNDEuMjc5IDE1LjcwODggMTQxLjExMyAxNC4yNzc3IDE0MC43NDcgMTMuNDQ1N0gxMzYuOTUzWiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMTYuNjQwNyAxMi41ODAzQzUuNzI0MzkgMTIuNTgwMyAwIDIwLjIzNSAwIDI5LjU1MzhDMCAzOC4xNzM3IDUuMjU4NDUgNDYuMjI3OCAxNC44MTAyIDQ2LjIyNzhDMTkuNzY5MSA0Ni4yMjc4IDIyLjYzMTMgNDQuMTMxIDIzLjM2MzUgNDMuNDk4N1Y0Ny44MjUzQzIzLjM2MzUgNTIuNzg0MiAyMS40MzMyIDU2LjA3OSAxNi40NDEgNTYuMDc5QzE0LjA0NDcgNTYuMDc5IDEyLjI0NzUgNTUuNDEzNCAxMC41ODM1IDU0LjY0NzlDOS4xMTkwOCA1My45NDkgOC4wMjA4IDUzLjExNyA2LjU1NjQyIDUzLjExN0MyLjgyODkxIDUzLjExNyAxLjc5NzE5IDU3LjcwOTggMS44MzA0NyA1Ny43NDMxQzQuNjI2MSA2MS4zMzc1IDExLjAxNjEgNjQgMTYuMzc0NCA2NEMyNi45MjQ2IDY0IDMyLjc0ODggNTcuODQyOSAzMi43NDg4IDQ1LjYyODdDMzIuNzQ4OCA0NS42Mjg3IDMyLjc0ODggMzMuMzE0NiAzMi43NDg4IDMxLjM1MUMzMi43MTU1IDIwLjIwMTggMjcuNzg5OSAxMi41ODAzIDE2LjY0MDcgMTIuNTgwM1pNMTYuNTc0MSAzNy45NzRDMTIuNDgwNSAzNy45NzQgOS4zNTIwNSAzNS4zNzggOS4zNTIwNSAyOS42ODY5QzkuMzUyMDUgMjMuNjI5NyAxMi41NDcxIDIwLjQ2OCAxNi41NzQxIDIwLjQ2OEMyMC41MzQ2IDIwLjQ2OCAyMy40MzAxIDIyLjg2NDMgMjMuNDMwMSAyOS4yMjFDMjMuNDMwMSAzNS43NDQxIDIwLjMwMTYgMzcuOTc0IDE2LjU3NDEgMzcuOTc0WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMTc4LjU4OCAzMi44NDg3VjE5LjYzNkMxNzguNTg4IDE1LjUwOTEgMTgwLjc1MSAxMy4zNzkxIDE4NS44NDMgMTMuMzc5MUgxODcuNDA3VjMzLjE0ODJDMTg3LjQwNyAzOS4xMzg4IDE4OS45MzcgNDEuNjM0OSAxOTMuNTMxIDQxLjYzNDlDMTk3LjUyNSA0MS42MzQ5IDIwMC42NTMgMzkuMDM5IDIwMC42NTMgMzIuNTQ5MVYxOS42MzZDMjAwLjY1MyAxNS41MDkxIDIwMi44ODMgMTMuMzc5MSAyMDcuOTA4IDEzLjM3OTFIMjA5LjUzOVYzMy40MTQ0QzIwOS41MzkgNDMuNjY1MSAyMDIuNjgzIDQ5LjM4OTUgMTkzLjk5NyA0OS4zODk1QzE4My43NDYgNDkuNDIyOCAxNzguNTg4IDQzLjc5ODIgMTc4LjU4OCAzMi44NDg3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE1OC43MTkgNDkuNjg5MUMxNTIuMTk1IDQ5LjY4OTEgMTQ3LjMzNiA0Ni4zMjc3IDE0Ny4zMzYgNDIuN1YzOC42NzI5SDE0Ny42NjlDMTQ5LjU2NiA0MC40MzY5IDE1NC4xMjYgNDIuMDM0NCAxNTguMzE5IDQyLjAzNDRDMTYyLjY3OSA0Mi4wMzQ0IDE2NC43NzYgNDAuNzY5NyAxNjQuNzc2IDM4LjE0MDRDMTY0Ljc3NiAzNi4xMTAzIDE2My41MTEgMzUuMTExOCAxNTcuMzg3IDM0LjI0NjVDMTQ5Ljg5OSAzMy4xODE1IDE0Ni4yNzEgMzAuMjE5NSAxNDYuMjcxIDI0LjgyNzlDMTQ2LjI3MSAxOC4xNzE3IDE1Mi4yNjIgMTIuNTEzOCAxNjEuMzQ4IDEyLjUxMzhDMTY5LjM2OSAxMi41MTM4IDE3Mi42NjQgMTYuNjc0IDE3Mi42NjQgMjAuMDY4N1YyMy40MzAxSDE3Mi4zMzFDMTcwLjUgMjEuNTk5NiAxNjYuNDA3IDIwLjEzNTIgMTYyLjE4IDIwLjEzNTJDMTU2Ljc4OCAyMC4xMzUyIDE1NS4wNTggMjEuNzY2IDE1NS4wNTggMjQuMDk1N0MxNTUuMDU4IDI1Ljg1OTYgMTU2LjEyMyAyNi41OTE4IDE2Mi4xOCAyNy41OTAzQzE2OS41NjggMjguNzg4NCAxNzMuNDk2IDMyLjAxNjcgMTczLjQ5NiAzNy42NzQ1QzE3My41MjkgNDUuMjI5NCAxNjguMjcgNDkuNjg5MSAxNTguNzE5IDQ5LjY4OTFaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjIwOS41MzkiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
              />
            </a>
          </div>
        </div>

        <nav className="hidden md:flex gap-x-8 text-sm font-semibold items-center justify-end truncate w-full h-full relative">
          <div
            className="flex gap-x-2 text-white text-opacity-80 transition-all hover:text-opacity-100 cursor-pointer "
            onClick={() => {
              setOpen(!open);
            }}
          >
            <RiShoppingBasketFill size={20} />
            Sepetim ({basket.reduce((a, b) => a + b.count, 0)})
          </div>

          <a
            href="/"
            className="flex gap-x-2 text-white text-opacity-80 transition-all hover:text-opacity-100"
          >
            <BiGlobe size={20} />
            Türkçe(TR)
          </a>
          <a
            href="/"
            className="flex gap-x-2 text-white text-opacity-80 transition-all hover:text-opacity-100"
          >
            <FaUserAlt size={20} />
            Giriş Yap
          </a>
          <a
            href="/"
            className="flex gap-x-2 text-white text-opacity-80 transition-all hover:text-opacity-100"
          >
            <FaUserPlus size={20} />
            Kayıt Ol
          </a>
        </nav>
        {!open ? null : (
          <div className="md:flex md:absolute md:top-12 md:right-1/4 w-auto md:p-8 mx-auto bg-red-50  md:z-50 items-center justify-center">
            <div className="container max-w-screen-xl mx-auto flex flex-col pt-8 md:z-50 ">
              <span className="text-sm font-semibold pb-1 pt-2">Sepetim</span>
              {basket.length <= 0 ? (
                <div className="flex flex-col justify-center items-center w-full p-4 md:w-[500px] mx-auto border-2 rounded-lg border-sepet-border-renk">
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
                    basket.length > 20
                      ? "grid grid-cols-3 md:grid-cols-5 gap-6 xl:grid-cols-8 grid-rows-2 border-2 border-sepet-border-renk rounded-lg"
                      : "grid grid-cols-2 md:grid-cols-4 xl:grid:cols-10 grid-row-2 border-2 border-sepet-border-renk rounded-lg"
                  }
                >
                  {basket.map((items) => {
                    return (
                      <div
                        key={items.id}
                        className="relative flex flex-col bg-primary-white justify-center items-center border-b border-r border-opacity-30  md:p-3 w-full md:w-30"
                      >
                        <div className="flex flex-row gap-x-2 absolute top-5 right-5 justify-end">
                          <div
                            onClick={() =>
                              dispatch(
                                contextActions.deleteFromBasket({
                                  id: items.id,
                                })
                              )
                            }
                            className="flex w-7 h-7 font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white cursor-pointer"
                          >
                            <button>
                              <FiMinus />
                            </button>
                          </div>
                          <div className="flex w-7 h-7 justify-center items-center   text-primary-brand-color  rounded-lg border z-10 bg-primary-white">
                            {items.count}
                          </div>
                          <div
                            onClick={() =>
                              dispatch(
                                contextActions.addToBasket({
                                  id: items.id,
                                })
                              )
                            }
                            className="flex  w-7 h-7  font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white cursor-pointer"
                          >
                            <button>
                              <FiPlus />
                            </button>
                          </div>
                        </div>
                        <a
                          href="https://github.com/serifcolakel"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            alt="noreferer"
                            className="w-30 h-[120px] cursor-pointer "
                            src={
                              items.squareThumbnailURL ||
                              "https://via.placeholder.com/150"
                            }
                          />
                        </a>
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
                    );
                  })}
                </div>
              )}

              <div className="flex justify-center items-center mt-4 text-xl">
                <p className=" text-primary-brand-color font-semibold">
                  {"₺" +
                    parseFloat(
                      basket.reduce((a, b) => a + b.price * b.count, 0)
                    ).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
