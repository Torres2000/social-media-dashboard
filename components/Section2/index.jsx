"use client";
import data from "@/app/datos.json";
import Image from "next/image";

//Iconos

export default function Section1({ darkMode }) {
  const section2 = data.section2;

  return (
    <section className="flex justify-center flex-col mt-14 items-center pb-4">
      <div className="max-w-[1111px] w-11/12">
        <h2
          className={` font-bold text-2xl w-80 mb-8 ${
            darkMode ? "text-White " : "text-Dark-Grayish-Blue "
          }`}
        >
          Overview - Today
        </h2>

        <div className="flex flex-col gap-6 md:flex-wrap md:flex-row  md:justify-center xl:justify-between md:w-full ">
          {section2.map((datos, index) => (
            <div className="flex justify-center " key={index}>
              <div
                className={` flex flex-col justify-center w-80 md:w-[254px] items-center   p-6 rounded-md  ${
                  darkMode ? "bg-Dark-Desaturated-Blue" : "bg-Very-Pale-Blue"
                }`}
              >
                <figure className="flex gap-2 items-center w-full justify-between">
                  <span
                    className={` font-bold text-xs ${
                      darkMode
                        ? "text-Desaturated-Blue "
                        : "text-Dark-Grayish-Blue "
                    }`}
                  >
                    {datos.info}
                  </span>
                  <Image
                    src={datos.img}
                    alt={datos.info}
                    width={20}
                    height={20}
                  />
                </figure>
                <div className="pt-8 w-full flex  items-center justify-between">
                  <h2
                    className={` text-3xl font-bold  ${
                      darkMode ? "text-Blanco  " : "text-Very-Dark-Blue "
                    }`}
                  >
                    {datos.total}
                  </h2>

                  <figure className="flex items-center gap-2">
                    <Image
                      src={datos.icon}
                      width={10}
                      height={10}
                      alt="Icon Arriba"
                    />
                    <span className={` font-bold text-sm  ${datos.color}`}>
                      {datos.numero}
                    </span>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
