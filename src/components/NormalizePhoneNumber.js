import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const normalizedPhoneNumber = (value) => {
  let left =
    value
      .replace(/\s/g, "")
      .match(/.{1,3}/g)
      ?.join(" ")
      .substr(0, 7) || "";
  let right =
    value
      .replace(/\s/g, "")
      .match(/.{1,2}/g)
      ?.join(" ")
      .substr(8, 12) || "";
  return left + right;
};
export default function NormalizePhoneNumber() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    TR: "+90",
    DE: "+50",
    IT: "+1",
  };
  return (
    <div className="flex flex-col mx-auto gap-y-4 w-full">
      <div className="flex gap-x-2">
        <ReactFlagsSelect
          className="flag-select"
          countries={Object.keys(phones)}
          customLabels={phones}
          onSelect={(code) => setSelected(code)}
          selected={selected}
          selectedSize={12}
          optionsSize={12}
        />
        <label
          htmlFor="phone"
          className="flex group w-full relative cursor-pointer "
        >
          <input
            inputMode="numeric"
            type="tel"
            maxLength="13"
            autoComplete="cc-number"
            name="phone"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizedPhoneNumber(value);
            }}
            id="phone"
            required
            className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2"
          />
          <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
            Telefon Numarası
          </span>
        </label>
      </div>
      <button className="bg-brand-yellow transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
        <a href="https://getir.com/" target="_blank" rel="noreferrer">
          Telefon ile Devam Et
        </a>
      </button>
    </div>
  );
}
