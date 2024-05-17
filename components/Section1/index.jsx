"use client";
import data from "@/app/datos.json";
import Image from "next/image";

//Iconos

export default function Section1({ darkMode }) {
  const section1 = data.section1;

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-6 md:flex-wrap md:flex-row md:justify-center xl:justify-between md:w-full max-w-[1111px]">
        {section1.map((datos, index) => (
          <div className="flex justify-center " key={index}>
            <div
              className={` flex flex-col justify-center w-80 md:w-[254px] items-center  ${
                datos.borderTop
              } py-6 rounded-md  ${
                darkMode ? "bg-Dark-Desaturated-Blue  " : "bg-Very-Pale-Blue  "
              }`}
            >
              <figure className="flex gap-2 items-center">
                <Image
                  src={datos.img}
                  alt={datos.borderTop}
                  width={20}
                  height={20}
                />
                <span
                  className={` font-bold text-xs ${
                    darkMode
                      ? "text-Dark-Grayish-Blue "
                      : "text-Very-Dark-Blue "
                  }`}
                >
                  {datos.usuario}
                </span>
              </figure>
              <div className="py-8 flex flex-col items-center">
                <h2
                  className={` text-5xl font-bold  ${
                    darkMode ? "text-Blanco  " : "text-Very-Dark-Blue "
                  }`}
                >
                  {datos.total}
                </h2>
                <span
                  className={` text-xs uppercase tracking-spacing ${
                    darkMode
                      ? "text-Dark-Grayish-Blue  "
                      : "text-Very-Dark-Blue "
                  }`}
                >
                  {datos.estado}
                </span>
              </div>
              <div>
                <figure className="flex items-center gap-2">
                  <Image
                    src={datos.icon}
                    width={10}
                    height={10}
                    alt="Icon Arriba"
                  />
                  <span className={` font-bold text-sm ${datos.color}`}>
                    {datos.numero} Today
                  </span>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
