import { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import { RiDeleteBin6Line, RiShoppingBasketFill } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { contextActions } from "store/context";

export default function Header() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const basket = state.context.basket;
  return (
    <div className="sticky top-0 z-50 bg-brand-color md:pt-1">
      <div className="max-w-screen-xl mx-auto h-16 md:h-12 flex items-center justify-center md:justify-between ">
        <div className="flex flex-row items-center w-3/4 gap-x-2 md:gap-x-0">
          <div className="items-center flex md:hover:bg-secondary-brand-color md:h-10 md:rounded-t-xl md:pt-6 md:pb-6 md:pr-2 md:pl-2">
            <a href="/" rel="noreferrer">
              <img
                alt="noReferer"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjAzODQgOS4yNDAxOUMyNi4wMzg0IDYuNDk5OTkgMjMuODAxMiA0LjcxMjg5IDIwLjUxODIgNC43MTI4OUMxNy40MDc0IDQuNzEyODkgMTQuMTUwOSA2Ljk1MDA3IDE0LjE1MDkgMTEuOTI3NUMxNC4xNTA5IDE1LjcyNjcgMTYuNDU0MiAxOC41MzMxIDIwLjQyNTYgMTguNTMzMUMyMi42NjI3IDE4LjUzMzEgMjUuMTI1IDE3LjI2MjMgMjUuNzQ3MSAxNi4zODg2QzI1Ljc0NzEgMTYuMzg4NiAyNS4zMjM1IDE0Ljc0NzEgMjQuMTU4NiAxNC43NDcxQzIzLjU0OTcgMTQuNzQ3MSAyMy4wOTk2IDE0Ljk4NTQgMjIuNTk2NSAxNS4xODM5QzIyLjA4MDMgMTUuMzk1NyAyMS40NTgxIDE1LjU5NDMgMjAuNjYzOCAxNS41OTQzQzE5LjU1MTkgMTUuNTk0MyAxNy42NDU2IDE1LjE1NzUgMTcuNjQ1NiAxMi43NjE0QzE3LjY0NTYgMTIuNzYxNCAxOC41NDU4IDEzLjAyNjIgMjAuNTg0NCAxMy4wMjYyQzI0Ljk3OTMgMTMuMDM5NCAyNi4wMzg0IDExLjE4NjEgMjYuMDM4NCA5LjI0MDE5Wk0yMC42NTA2IDcuNjc4MTRDMjIuMTU5NyA3LjY3ODE0IDIyLjg4NzggOC40OTg4OCAyMi44ODc4IDkuMjUzNDNDMjIuODg3OCAxMC4xNDA0IDIyLjA5MzUgMTAuNzA5NiAyMC42NTA2IDEwLjcwOTZDMTguNTQ1OCAxMC43MDk2IDE3Ljc1MTUgMTAuNDE4NCAxNy43NTE1IDEwLjQwNTFDMTcuNzM4MyA5LjE0NzUzIDE4Ljc0NDQgNy42NzgxNCAyMC42NTA2IDcuNjc4MTRaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik0zNC4yMDYgMTUuNjIwNkMzMi42OTY5IDE1LjYyMDYgMzEuOTE1OSAxNC4zNDk4IDMxLjc3MDMgMTMuNzkzOEMzMS42MjQ2IDEzLjI1MTEgMzEuNTMyIDEyLjQ3IDMxLjUzMiAxMS42NjI1TDMxLjU1ODUgNy41NTg4NUgzMi42NTcyQzMzLjU0NDEgNy41NTg4NSAzNC4yMTkyIDcuMjk0MSAzNC43MDkgNi43Nzc4M0MzNS4xODU2IDYuMjYxNTUgMzUuNDM3MSA1LjU1OTk1IDM1LjQzNzEgNC42OTk1SDMxLjU3MTdMMzEuNTQ1MiAyLjg4NTkzQzMxLjU0NTIgMi4zMDM0NyAzMS41NDUyIDEuODQwMTUgMzEuNTU4NSAxLjQ4MjczQzMxLjU3MTcgMS4xMjUzMiAzMS41ODQ5IDAuODQ3MzI1IDMxLjU5ODIgMC42MzU1MjFDMzEuNjExNCAwLjQxMDQ4IDMxLjYzNzkgMC4yMjUxNTEgMzEuNjUxMSAwLjA5Mjc3MzRDMzAuNDczIDAuMDkyNzczNCAyOS41ODYgMC4zNDQyOTIgMjguOTYzOSAwLjg0NzMyNkMyOC4zNDE3IDEuMzUwMzYgMjguMDM3MiAyLjE3MTEgMjguMDM3MiAzLjMzNjAyTDI4LjAxMDcgMTIuNDE3MUMyOC4wMTA3IDE2LjEzNjkgMjkuNzg0NiAxOC41NTk0IDMzLjE3MzUgMTguNTU5NEMzNC44NDE0IDE4LjU1OTQgMzYuMDU5MyAxNy42NTkyIDM2LjA1OTMgMTYuMjk1OEMzNi4wNTkzIDE1LjgxOTIgMzUuOTkzMSAxNS41Njc3IDM1Ljk1MzQgMTUuNDA4OEMzNS42NDg5IDE1LjQ4ODMgMzUuMTA2MiAxNS42MjA2IDM0LjIwNiAxNS42MjA2WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNNDIuNjkxNyAxNS43OTIyQzQxLjkzNzIgMTUuNzkyMiA0MS40NjA2IDE1LjI0OTQgNDEuNDYwNiAxNC4zNDkzVjcuNzk2NThDNDEuNDYwNiA3LjIxNDEyIDQxLjQ2MDYgNi43NTA4IDQxLjQ3MzggNi4zOTMzOEM0MS40ODcxIDYuMDM1OTYgNDEuNTAwMyA1Ljc1Nzk3IDQxLjUxMzYgNS41NDYxN0M0MS41MjY4IDUuMzIxMTIgNDEuNTUzMyA1LjEzNTggNDEuNTY2NSA1LjAwMzQyQzQwLjM3NTEgNS4wMDM0MiAzOS40NzQ5IDUuMjU0OTMgMzguODUyOCA1Ljc1Nzk3QzM4LjIzMDYgNi4yNjEgMzcuOTI2MSA3LjA4MTc0IDM3LjkyNjEgOC4yNDY2NkwzNy44OTk3IDE0LjkxODVDMzcuODk5NyAxNy4zMDEzIDM5LjQzNTIgMTguNjI1IDQxLjM2NzkgMTguNTQ1NkM0Mi41ODU4IDE4LjQ5MjcgNDMuNjQ0OCAxNy45MjM0IDQzLjY0NDggMTYuNjM5NEM0My42NDQ4IDE2LjEwOTkgNDMuNTUyMiAxNS42NzMgNDMuNTUyMiAxNS42NzNDNDMuMjg3NCAxNS43MzkyIDQzLjA4ODggMTUuNzkyMiA0Mi42OTE3IDE1Ljc5MjJaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik01MS4zNjI1IDUuMDMwMjdDNTAuNjM0NCA1LjAzMDI3IDQ5Ljg5MzEgNS4xMDk3IDQ5LjE1MTggNS4yODE3OUM0OC40MTA1IDUuNDQwNjUgNDcuNzM1MyA1Ljc1ODM1IDQ3LjEzOTYgNi4yMjE2N0M0Ni41NDM5IDYuNjg0OTkgNDYuMDU0MSA3LjMyMDQgNDUuNjgzNSA4LjE0MTE0QzQ1LjMxMjggOC45NjE4OCA0NS4xMTQzIDEwLjAwNzcgNDUuMTE0MyAxMS4zMDVWMTUuMDUxMkM0NS4xMTQzIDE2LjIwMjkgNDUuMjU5OSAxNy4yNzUyIDQ1Ljk2MTUgMTcuODA0N0M0Ni43MTYgMTguMzg3MSA0Ny42MDMgMTguNDEzNiA0OC43ODExIDE4LjQxMzZDNDguNzY3OSAxOC4yOTQ1IDQ4Ljc0MTQgMTcuOTYzNSA0OC43MjgyIDE3LjczODVDNDguNzE0OSAxNy41MjY3IDQ4LjY4ODQgMTcuMjQ4NyA0OC42ODg0IDE2Ljg5MTNDNDguNjc1MiAxNi41MzM5IDQ4LjY3NTIgMTYuMDcwNSA0OC42NzUyIDE1LjQ4ODFWMTAuNjgyOEM0OC42NzUyIDkuNTQ0MzQgNDguODYwNSA4LjA4ODE5IDUwLjg1OTQgNy45MTYxQzUxLjk4NDYgNy44MjM0NCA1Mi45Nzc1IDcuMzg2NTkgNTIuOTc3NSA2LjE2ODcyQzUyLjk3NzUgNS44OTA3MyA1Mi45MTEzIDUuMzQ3OTggNTIuNzY1NyA1LjAzMDI3SDUxLjM2MjVaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik02LjI0ODIxIDQuNzEyODlDMi4xNDQ1MSA0LjcxMjg5IDAgNy41ODU0OCAwIDExLjA4MDJDMCAxNC4zMTAyIDEuOTcyNDIgMTcuMzQxNyA1LjU1OTg1IDE3LjM0MTdDNy40MTMxMyAxNy4zNDE3IDguNDk4NjIgMTYuNTQ3NCA4Ljc2MzM4IDE2LjMyMjRWMTcuOTM3NEM4Ljc2MzM4IDE5Ljc5MDcgOC4wMzUzIDIxLjAzNSA2LjE2ODc4IDIxLjAzNUM1LjI2ODYyIDIxLjAzNSA0LjU5MzQ5IDIwLjc4MzUgMy45ODQ1NiAyMC40OTIzQzMuNDI4NTcgMjAuMjI3NSAzLjAxODIgMTkuOTIzIDIuNDc1NDYgMTkuOTIzQzEuMDg1NDkgMTkuOTIzIDAuNzAxNiAyMS42NDM5IDAuNzAxNiAyMS42NTcyQzEuNzQ3MzggMjMuMDA3NCA0LjE0MzQxIDI0LjAwMDMgNi4xNTU1NCAyNC4wMDAzQzEwLjExMzYgMjQuMDAwMyAxMi4yOTc4IDIxLjY5NjkgMTIuMjk3OCAxNy4xMTY2QzEyLjI5NzggMTcuMTE2NiAxMi4yOTc4IDEyLjUwOTkgMTIuMjk3OCAxMS43NTU0QzEyLjI4NDYgNy41NzIyNCAxMC40MzEzIDQuNzEyODkgNi4yNDgyMSA0LjcxMjg5Wk02LjIzNDk3IDE0LjIzMDhDNC42OTkzOSAxNC4yMzA4IDMuNTIxMjQgMTMuMjY0NSAzLjUyMTI0IDExLjEzMzJDMy41MjEyNCA4Ljg1NjMgNC43MjU4NyA3LjY3ODE0IDYuMjM0OTcgNy42NzgxNEM3LjcxNzYgNy42NzgxNCA4LjgwMzA5IDguNTc4MzEgOC44MDMwOSAxMC45NjExQzguODAzMDkgMTMuMzk2OCA3LjYyNDkzIDE0LjIzMDggNi4yMzQ5NyAxNC4yMzA4WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMzguNzk5NyAzLjY5MzMzQzM5LjA3NzcgMy44MjU3MSAzOS4zNjg5IDMuOTA1MTMgMzkuNjg2NiAzLjkwNTEzQzQwLjQxNDcgMy45MDUxMyA0MC45ODM5IDMuNTYwOTUgNDEuNDA3NSAyLjg3MjU5QzQxLjU3OTYgMi41NTQ4OCA0MS42NzIzIDIuMjIzOTQgNDEuNjcyMyAxLjg2NjUyQzQxLjY3MjMgMS41MzU1OCA0MS41OTI5IDEuMjE3ODcgNDEuNDM0IDAuOTEzNDA2QzQxLjI3NTEgMC42MjIxNzYgNDEuMDM2OSAwLjM5NzEzNCA0MC43MTkyIDAuMjM4MjgyQzQwLjQ0MTIgMC4wNzk0Mjg4IDQwLjE2MzIgMCAzOS44NTg3IDBDMzkuNTI3OCAwIDM5LjE5NjggMC4wOTI2NjQ5IDM4Ljg3OTEgMC4yNzc5OTNDMzguNTYxNCAwLjQ2MzMyMSAzOC4zMjMxIDAuNzI4MDc1IDM4LjEzNzggMS4wNTkwMkMzNy45NjU3IDEuMzUwMjUgMzcuODczIDEuNjk0NDMgMzcuODczIDIuMDY1MDlDMzcuODczIDIuMzk2MDMgMzcuOTUyNSAyLjcxMzc0IDM4LjExMTMgMi45OTE3M0MzOC4yNzAyIDMuMjgyOTYgMzguNTA4NSAzLjUyMTI0IDM4Ljc5OTcgMy42OTMzM1oiIGZpbGw9IiNGRkQzMDAiLz4KPC9zdmc+Cg=="
              />
            </a>
          </div>
          <div className="md:flex items-center md:hover:bg-secondary-brand-color md:h-8 md:rounded-t-xl md:pt-6 md:pb-6 md:pr-2 md:pl-2">
            <a href="/yemek" rel="noreferrer">
              <svg
                className="w-auto md:scale-75 "
                xmlns="http://www.w3.org/2000/svg"
                width="131"
                height="24"
                fill="none"
              >
                <path
                  d="M26.038 9.24c0-2.74-2.237-4.527-5.52-4.527-3.111 0-6.367 2.237-6.367 7.215 0 3.799 2.303 6.606 6.275 6.606 2.237 0 4.699-1.271 5.322-2.145 0 0-.424-1.642-1.588-1.642-.609 0-1.059.238-1.562.437-.516.212-1.138.41-1.933.41-1.112 0-3.018-.437-3.018-2.833 0 0 .9.265 2.939.265 4.395.013 5.454-1.84 5.454-3.786zM20.65 7.678c1.509 0 2.237.821 2.237 1.575 0 .887-.794 1.456-2.237 1.456-2.105 0-2.899-.291-2.899-.305-.013-1.258.993-2.727 2.899-2.727zm13.556 7.943c-1.509 0-2.29-1.271-2.436-1.827-.146-.543-.238-1.324-.238-2.131l.026-4.104h1.099c.887 0 1.562-.265 2.052-.781.477-.516.728-1.218.728-2.078h-3.865l-.026-1.814.013-1.403.04-.847.053-.543c-1.178 0-2.065.252-2.687.755s-.927 1.324-.927 2.489l-.026 9.081c0 3.72 1.774 6.142 5.163 6.142 1.668 0 2.886-.9 2.886-2.264 0-.477-.066-.728-.106-.887-.305.08-.847.212-1.747.212zm8.486.171c-.755 0-1.231-.543-1.231-1.443V7.797l.013-1.403.04-.847.053-.543c-1.191 0-2.092.252-2.714.755s-.927 1.324-.927 2.489L37.9 14.92c0 2.383 1.535 3.707 3.468 3.627 1.218-.053 2.277-.622 2.277-1.906 0-.529-.093-.966-.093-.966-.265.066-.463.119-.861.119zM51.363 5.03c-.728 0-1.469.079-2.211.252-.741.159-1.416.477-2.012.94s-1.086 1.099-1.456 1.919-.569 1.867-.569 3.164v3.746c0 1.152.146 2.224.847 2.754.755.582 1.642.609 2.82.609l-.053-.675-.04-.847-.013-1.403v-4.805c0-1.138.185-2.595 2.184-2.767 1.125-.093 2.118-.53 2.118-1.747 0-.278-.066-.821-.212-1.138h-1.403zM6.248 4.713C2.145 4.713 0 7.585 0 11.08c0 3.23 1.972 6.262 5.56 6.262 1.853 0 2.939-.794 3.204-1.019v1.615c0 1.853-.728 3.098-2.595 3.098-.9 0-1.575-.252-2.184-.543-.556-.265-.966-.569-1.509-.569-1.39 0-1.774 1.721-1.774 1.734C1.747 23.007 4.143 24 6.156 24c3.958 0 6.142-2.303 6.142-6.884v-5.361c-.013-4.183-1.867-7.043-6.05-7.043zm-.013 9.518c-1.536 0-2.714-.966-2.714-3.098 0-2.277 1.205-3.455 2.714-3.455 1.483 0 2.568.9 2.568 3.283 0 2.436-1.178 3.27-2.568 3.27zM38.8 3.693a2.04 2.04 0 0 0 .887.212c.728 0 1.297-.344 1.721-1.033a2.08 2.08 0 0 0 .265-1.006 2.03 2.03 0 0 0-.238-.953 1.61 1.61 0 0 0-.715-.675A1.69 1.69 0 0 0 39.859 0c-.331 0-.662.093-.98.278s-.556.45-.741.781c-.172.291-.265.635-.265 1.006a1.86 1.86 0 0 0 .238.927c.159.291.397.53.688.702z"
                  fill="#ffd300"
                />
                <g fill="#f4f2fd">
                  <path d="M81.942 9.429c0-2.767-2.264-4.567-5.56-4.567-3.137 0-6.42 2.25-6.42 7.281 0 3.839 2.317 6.672 6.328 6.672 2.264 0 4.739-1.284 5.361-2.171 0 0-.424-1.655-1.602-1.655-.622 0-1.072.238-1.575.45-.529.212-1.152.41-1.959.41-1.125 0-3.045-.45-3.045-2.859 0 0 .9.265 2.965.265 4.435 0 5.507-1.88 5.507-3.826zm-5.427-1.575c1.522 0 2.25.834 2.25 1.589 0 .9-.807 1.469-2.264 1.469-2.118 0-2.925-.291-2.925-.304 0-1.284 1.006-2.753 2.939-2.753zm-9.214.08a25.31 25.31 0 0 1-.953 2.992l-1.165 2.793-1.099 2.33-.781 1.575-1.456 2.714c-.437.728-.86 1.297-1.258 1.734-.41.437-.821.741-1.231.94-.41.185-.86.291-1.337.291-.516 0-.94-.119-1.244-.357-.318-.238-.477-.503-.477-.781v-.847h1.072c.265 0 .516-.026.741-.093.225-.053.463-.185.715-.397s.516-.53.807-.953.622-1.006 1.006-1.734c-.516-.794-1.033-1.708-1.562-2.714l-1.483-3.164L56.354 8.9a25.52 25.52 0 0 1-.847-3.362h1.297c.463 0 .794.146.993.437a3.13 3.13 0 0 1 .41.913l.582 2.158.821 2.356 1.019 2.37c.371.781.768 1.522 1.191 2.197l1.125-2.264 1.138-2.793.953-2.873c.278-.953.477-1.787.583-2.528h.9c.305 0 .556.066.755.212s.305.41.305.808c0 .132-.04.357-.106.662l-.172.741z" />
                  <path d="M58.021 23.951c-.675 0-1.218-.172-1.641-.49-.596-.45-.728-.94-.728-1.284v-1.483h1.708a2.13 2.13 0 0 0 .556-.066l.04-.013c.093-.026.238-.079.45-.265.199-.159.424-.437.688-.821a15.54 15.54 0 0 0 .794-1.337l-1.39-2.449c-.516-.966-1.006-2.025-1.509-3.217l-1.271-3.415c-.371-1.112-.662-2.277-.861-3.442l-.132-.755h2.065c.86 0 1.297.384 1.522.715l.013.013c.238.371.397.741.49 1.099v.013c.132.622.331 1.337.569 2.105l.807 2.317 1.006 2.33.583 1.152.569-1.205 1.125-2.753.94-2.833c.278-.966.463-1.774.569-2.436l.079-.556h1.456c.45 0 .834.119 1.138.331.371.278.569.715.569 1.324 0 .172-.04.41-.119.794l-.185.768a25.57 25.57 0 0 1-.98 3.058l-1.178 2.833-.119.252-.993 2.105-.265.516-.516 1.046-1.483 2.78c-.437.715-.887 1.337-1.337 1.84-.45.49-.927.847-1.43 1.085l-.013.013c-.49.212-1.033.331-1.589.331zm-1.072-1.986v.212c0 .053.053.146.225.265.199.159.49.225.861.225s.728-.079 1.072-.225c.344-.172.702-.437 1.033-.794.384-.424.781-.98 1.178-1.628.463-.768.94-1.668 1.43-2.661l.53-1.072.252-.516.98-2.065.119-.238 1.152-2.753c.384-.98.688-1.933.927-2.912v-.026a9.71 9.71 0 0 0 .159-.702l.093-.53c0-.225-.053-.291-.053-.291-.079-.053-.199-.079-.371-.079h-.357a20.38 20.38 0 0 1-.516 2.065l-.966 2.912-1.152 2.833L62.39 16.3l-.529.953-.582-.913c-.424-.662-.834-1.43-1.231-2.264l-1.032-2.409-.834-2.396-.596-2.197c-.053-.225-.159-.45-.318-.702-.026-.04-.119-.146-.463-.146h-.516l.675 2.528a34.31 34.31 0 0 0 1.231 3.309l1.456 3.111 1.536 2.661.199.318-.172.331-1.046 1.8c-.344.49-.636.834-.927 1.086-.331.278-.635.45-.966.529-.265.079-.569.119-.9.119h-.424v-.053zm44.121-3.666c-.41 0-.754-.132-1.019-.41s-.397-.662-.397-1.165v-5.586c0-1.324-.238-2.277-.715-2.846s-1.138-.847-2.012-.847c-1.046 0-1.8.278-2.264.847s-.702 1.496-.702 2.767V18.3h-.728c-.516 0-.887-.132-1.112-.41s-.331-.662-.331-1.165v-5.586c0-1.152-.238-2.052-.728-2.714-.49-.649-1.191-.98-2.105-.98-.953 0-1.655.291-2.131.874s-.715 1.522-.715 2.82v7.175h-.688c-.463 0-.821-.132-1.085-.384-.265-.265-.397-.662-.397-1.191v-5.864c0-.728.119-1.416.344-2.078s.556-1.244.993-1.734c.437-.503.98-.887 1.615-1.178.649-.291 1.377-.437 2.197-.437.953 0 1.734.199 2.383.596.635.397 1.152.966 1.549 1.708A4.79 4.79 0 0 1 94.69 6.08c.702-.424 1.469-.622 2.303-.622 1.575 0 2.78.463 3.601 1.403s1.231 2.356 1.231 4.249v7.241h-.755v-.053z" />
                  <path d="M102.433 18.961h-1.972v-.132a1.76 1.76 0 0 1-.847-.516c-.371-.397-.569-.927-.569-1.588v-5.586c0-1.165-.199-2.012-.569-2.462-.357-.424-.847-.635-1.549-.635-.86 0-1.456.199-1.787.622-.371.45-.569 1.284-.569 2.383v7.85h-1.337c-.715 0-1.244-.212-1.588-.635-.318-.384-.463-.887-.463-1.549v-5.586c0-1.033-.199-1.8-.609-2.356-.371-.49-.9-.728-1.615-.728-.755 0-1.297.212-1.668.649-.384.463-.583 1.284-.583 2.436v7.784h-1.284c-.609 0-1.112-.185-1.509-.556l-.013-.013c-.384-.384-.569-.927-.569-1.615v-5.864a7.43 7.43 0 0 1 .371-2.277c.251-.741.622-1.403 1.112-1.946.477-.543 1.086-.993 1.814-1.324s1.549-.49 2.449-.49c1.059 0 1.946.225 2.701.688a4.94 4.94 0 0 1 1.258 1.152 5.37 5.37 0 0 1 1.324-1.112c.781-.477 1.655-.715 2.621-.715 1.761 0 3.124.543 4.05 1.615.914 1.046 1.377 2.608 1.377 4.646v7.863h.026zm-17.672-1.456c.159.146.371.212.662.212h.079V11.15c0-1.456.278-2.502.847-3.203.596-.728 1.469-1.099 2.595-1.099 1.112 0 1.972.41 2.595 1.218.569.781.847 1.774.847 3.084v5.586c0 .357.066.622.199.781.119.159.41.185.635.185h.119V11.07c0-1.403.278-2.462.834-3.151.582-.715 1.496-1.072 2.74-1.072 1.046 0 1.88.357 2.475 1.059.582.688.86 1.747.86 3.23v5.586c0 .344.08.582.225.741a.75.75 0 0 0 .583.225h.145v-6.579c0-1.734-.357-3.031-1.085-3.852-.702-.808-1.734-1.191-3.151-1.191-.741 0-1.39.172-1.986.53-.609.371-1.099.86-1.456 1.456l-.543.927-.503-.94c-.344-.649-.794-1.138-1.337-1.483-.556-.344-1.231-.503-2.065-.503-.741 0-1.377.119-1.946.384-.583.265-1.033.596-1.403 1.019a4.27 4.27 0 0 0-.874 1.536 5.72 5.72 0 0 0-.318 1.88v5.864c.013.357.093.622.225.768zm31.453-8.076c0-2.767-2.263-4.567-5.559-4.567-3.138 0-6.421 2.25-6.421 7.281 0 3.839 2.317 6.672 6.328 6.672 2.264 0 4.739-1.284 5.361-2.171 0 0-.423-1.655-1.602-1.655-.622 0-1.072.238-1.575.45-.529.212-1.152.41-1.959.41-1.125 0-3.045-.45-3.045-2.859 0 0 .9.265 2.966.265 4.447 0 5.506-1.88 5.506-3.826zm-5.427-1.575c1.522 0 2.25.834 2.25 1.589 0 .9-.807 1.469-2.263 1.469-2.118 0-2.926-.291-2.926-.305.013-1.284 1.019-2.753 2.939-2.753zm10.735-4.782v7.874c1.273-1.66 2.52-3.344 4.03-4.792.787-.736 1.573-.861 2.621-.861h1.884v.125c-.936.786-3.993 4.255-5.353 5.99l3.257 3.843c1.198 1.198 1.734 1.448 2.545 1.71-.337 1.048-.886 1.61-2.221 1.61-.736 0-1.585-.337-2.159-.911-1.684-1.735-3.157-3.694-4.604-5.628v6.439l-1.048.025c-1.523.025-2.247-.786-2.247-2.321V.888h1.049c1.584 0 2.246.911 2.246 2.184z" />
                </g>
              </svg>
            </a>
          </div>
          <div className="md:flex items-center md:hover:bg-secondary-brand-color md:h-8 md:rounded-t-xl md:pt-6 md:pb-6 md:pr-2 md:pl-2">
            <a href="/buyuk" rel="noreferrer">
              <svg
                className="w-auto md:scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="122"
                height="24"
                fill="none"
              >
                <path
                  d="M20.643 7.688c1.51 0 2.234.824 2.234 1.573 0 .886-.799 1.46-2.247 1.46-2.097 0-2.895-.3-2.895-.3 0-1.273.999-2.733 2.908-2.733zm5.379 1.56c0-2.733-2.246-4.53-5.516-4.53-3.108 0-6.365 2.234-6.365 7.214 0 3.807 2.297 6.615 6.278 6.615 2.234 0 4.693-1.273 5.317-2.147 0 0-.424-1.635-1.585-1.635-.611 0-1.061.237-1.56.449a4.95 4.95 0 0 1-1.934.399c-1.111 0-3.02-.449-3.02-2.833 0 0 .899.262 2.945.262 4.381-.012 5.441-1.86 5.441-3.794zm8.175 6.378c-1.51 0-2.296-1.273-2.434-1.822-.172-.694-.256-1.407-.25-2.122l.025-4.094h1.098c.886 0 1.573-.262 2.047-.774s.724-1.211.724-2.084h-3.869l-.025-1.822.012-1.398.037-.849a4.52 4.52 0 0 1 .062-.549c-1.173 0-2.072.25-2.683.749s-.924 1.323-.924 2.484l-.025 9.086c0 3.719 1.772 6.153 5.154 6.153 1.672 0 2.895-.899 2.895-2.259a2.71 2.71 0 0 0-.112-.886 7.45 7.45 0 0 1-1.735.187zm8.486.174c-.749 0-1.236-.549-1.236-1.435V7.813l.013-1.398.037-.849a5.21 5.21 0 0 1 .062-.549c-1.198 0-2.097.25-2.708.749s-.924 1.323-.924 2.484l-.025 6.677c0 2.384 1.535 3.707 3.469 3.632 1.223-.05 2.272-.624 2.272-1.909a5.34 5.34 0 0 0-.087-.961c-.285.075-.579.112-.874.112zM38.789 3.707a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949a1.64 1.64 0 0 0-.711-.686A1.66 1.66 0 0 0 39.85 0a1.87 1.87 0 0 0-.974.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm12.568 1.335a10.25 10.25 0 0 0-2.209.25 5.04 5.04 0 0 0-2.009.936 4.94 4.94 0 0 0-1.46 1.922c-.374.824-.562 1.872-.562 3.158v3.757c0 1.161.15 2.234.849 2.758.761.574 1.647.599 2.821.599-.025-.112-.037-.449-.062-.674a7.66 7.66 0 0 1-.038-.849l-.012-1.398v-4.818c0-1.136.187-2.596 2.184-2.758 1.123-.1 2.122-.524 2.122-1.747-.002-.387-.069-.771-.2-1.136h-1.423zM6.215 14.24c-1.535 0-2.708-.973-2.708-3.108 0-2.271 1.198-3.457 2.708-3.457 1.485 0 2.571.899 2.571 3.282 0 2.446-1.173 3.282-2.571 3.282zm.025-9.523C2.147 4.718 0 7.588 0 11.083c0 3.233 1.972 6.253 5.554 6.253 1.86 0 2.933-.786 3.207-1.023v1.622c0 1.86-.724 3.095-2.596 3.095-.899 0-1.573-.25-2.197-.537-.549-.262-.961-.574-1.51-.574-1.398 0-1.785 1.722-1.772 1.735C1.735 23.002 4.131 24 6.14 24c3.956 0 6.14-2.309 6.14-6.889v-5.354c-.012-4.181-1.86-7.039-6.041-7.039z"
                  fill="#ffd10d"
                />
                <path
                  d="M71.775 3.707a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949a1.64 1.64 0 0 0-.711-.686A1.66 1.66 0 0 0 72.836 0a1.87 1.87 0 0 0-.973.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.87 1.87 0 0 0 .237.936 1.97 1.97 0 0 0 .674.686zm5.28 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949-.161-.296-.41-.536-.711-.686A1.66 1.66 0 0 0 78.115 0a1.87 1.87 0 0 0-.973.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm20.954 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.723-1.036.174-.308.264-.657.262-1.011a1.95 1.95 0 0 0-.237-.949c-.161-.296-.41-.536-.712-.686A1.66 1.66 0 0 0 99.07 0a1.87 1.87 0 0 0-.974.287 1.95 1.95 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm5.267 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.723-1.036.173-.308.264-.657.262-1.011a1.94 1.94 0 0 0-.238-.949 1.64 1.64 0 0 0-.711-.686 1.66 1.66 0 0 0-.861-.237c-.345.004-.682.104-.974.287a1.95 1.95 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.85 1.85 0 0 0 .236.934 1.84 1.84 0 0 0 .675.688zM61.142 7.638c-1.66 0-2.908 1.635-2.908 3.694 0 3.033 1.298 4.281 3.257 4.281 1.635 0 2.821-1.572 2.821-3.694-.013-3.207-1.161-4.281-3.17-4.281zm0 10.896c-3.382 0-6.215-2.771-6.215-6.727V.612h1.123c1.273 0 2.159.736 2.159 2.271v3.844c.661-.949 1.785-2.009 3.569-2.009 3.357 0 5.928 2.746 5.928 6.627 0 3.981-2.546 7.189-6.565 7.189zm8.449-6.216V7.364c0-1.548.811-2.346 2.721-2.346h.587v7.413c0 2.246.948 3.183 2.296 3.183 1.498 0 2.671-.974 2.671-3.407V7.364c0-1.548.836-2.346 2.721-2.346h.611v7.513c0 3.844-2.571 5.991-5.828 5.991-3.844.012-5.778-2.097-5.778-6.203zm26.184 0V7.364c0-1.548.811-2.346 2.721-2.346h.587v7.413c0 2.246.948 3.183 2.296 3.183 1.498 0 2.671-.974 2.671-3.407V7.364c0-1.548.836-2.346 2.721-2.346h.611v7.513c0 3.844-2.571 5.991-5.828 5.991-3.844.012-5.779-2.097-5.779-6.203zM85.342 22.515c-1.223 0-2.296-.811-2.296-2.034v-.636l1.86-.125c1.198-.075 1.61-.562 2.321-2.421-1.735-2.621-4.231-9.173-4.68-12.281h1.735c.449-.007.887.144 1.236.427s.588.68.674 1.121c.462 2.546 1.448 5.292 2.646 7.613 1.073-2.471 2.271-6.465 2.571-9.148h1.423c1.048 0 1.548.462 1.548 1.548 0 1.398-2.296 7.413-2.908 8.836-2.446 5.753-3.744 7.101-6.128 7.101zm27.294-19.719v7.875c1.273-1.66 2.521-3.345 4.032-4.793.786-.736 1.572-.861 2.621-.861h1.884v.125c-.936.786-3.994 4.256-5.354 5.991l3.257 3.844c1.198 1.198 1.735 1.448 2.546 1.71-.337 1.048-.886 1.61-2.221 1.61a3.2 3.2 0 0 1-2.159-.911c-1.685-1.735-3.158-3.694-4.606-5.629v6.44l-1.048.025c-1.523.025-2.246-.786-2.246-2.321V.612h1.048c1.585 0 2.246.911 2.246 2.184z"
                  fill="#fff"
                />
              </svg>
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
          <div className="md:flex md:absolute md:top-[50px] rounded-lg shadow-lg md:right-1/4 w-auto md:p-8 mx-auto bg-white  md:z-50 items-center justify-center">
            <div className="container max-w-screen-xl mx-auto flex flex-col pt-8 md:z-50 ">
              <button
                className="absolute right-9 top-4 text-primary-brand-color"
                onClick={() => setOpen(!open)}
              >
                <AiOutlineClose size={25} />
              </button>
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
                        className="relative  flex flex-col bg-primary-white justify-center items-center border-b border-r border-opacity-30  md:p-3 w-full md:w-30"
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
                              {items.count > 1 ? (
                                <FiMinus />
                              ) : (
                                <RiDeleteBin6Line />
                              )}
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

              <div className="flex justify-betweeb items-center mx-auto w-[248px] h-10 mt-4 text-xl hover:border-l-[#7849f7] rounded-lg border-2 border-primary-brand-color ">
                <button className="w-[155px] h-[40px] bg-primary-brand-color hover:bg-[#7849f7] rounded-l-md text-white">
                  Sepete Git
                </button>
                <p className=" text-primary-brand-color w-[93px] font-semibold text-center">
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
