import React, { useEffect } from "react";

export default function DrawerContainer({
  children,
  isOpen,
  setIsOpen,
  position = "left",
  ...rest
}) {
  const containerPosition = `${position}-0`;
  const positionsOpen = {
    right: "translate-x-0",
    left: "-translate-x-0",
    top: "translate-y-0",
    bottom: "translate-y-0",
  };
  const positionsClose = {
    right: "translate-x-full",
    left: "-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full",
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isOpen]);

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? `transition-opacity opacity-100 duration-500  ${positionsOpen[position]}`
          : `transition-all delay-500 opacity-0 ${positionsClose[position]}`)
      }
    >
      <section
        className={`${
          position == "top" || position == "bottom"
            ? `max-h-96 ${
                position == "bottom" ? "rounded-t-xl" : "rounded-b-xl"
              }`
            : "h-full max-w-lg"
        } w-screen ${containerPosition} absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${
          isOpen ? positionsOpen[position] : positionsClose[position]
        }`}
      >
        <div
          className={`${
            position == "top" || position == "bottom"
              ? "max-h-96"
              : "h-full max-w-lg"
          } relative w-screen pb-10 flex flex-col space-y-6`}
        >
          <header className="p-4 font-bold text-lg">{rest.title}</header>
          <div className="p-4">{children}</div>
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
