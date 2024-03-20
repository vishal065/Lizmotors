import img19 from "/img19.jpg";
import img22 from "/img22.png";
import img23 from "/img23.png";
import img24 from "/img24.jpg";
import img25 from "/img25.png";
import img26 from "/img26.png";
import img27 from "/img27.png";
function Manufacturing() {
  return (
    <>
      <h1 className="text-5xl text-center mb-10 bg-fine p-2 font-bold text-fine4">
        Manufacturing
      </h1>
      <section className="overflow-hidden bg-fine21 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Crafting Excellence, Driving Innovation
            </h2>
            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>

              <span className="relative z-10 bg-white px-6"></span>
            </span>

            <p className="hidden text-white md:mt-4 md:block">
              In the bustling factories, a symphony of machinery orchestrates
              the birth of automobiles. Steel is molded and shaped with
              precision, while sparks dance in the air, marking the creation of
              each component. Engineers meticulously assemble the puzzle pieces,
              ensuring every bolt and gear fits seamlessly. With each stroke of
              craftsmanship, a vehicle takes form, embodying innovation and
              excellence. From assembly line to showroom floor, the journey of
              car production is a testament to human ingenuity and dedication.
            </p>

            <div className="mt-4 md:mt-8 ">
              <a
                href="#"
                className="inline-block text-white rounded bg-emerald-600 px-10 py-3 text-sm font-medium transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Know more
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src={img19}
          className="h-56 w-full object-cover sm:h-full  "
        />
      </section>

      {/* 2 */}
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kickstart your marketing
            </h2>
            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>

              <span className="relative z-10 bg-white px-6"></span>
            </span>

            <p className="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl bg-fine2  border border-gray-800 p-7 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <img
                src={img22}
                alt="Digital Campaigns"
                className="size-10  w-full h-24"
              />

              <h2 className="mt-4 text-xl font-bold text-white">Steel</h2>

              <p className="mt-1 text-sm text-gray-300">
                The traditional workhorse of car manufacturing, steel is still
                widely used for its strength and durability. It makes up the
                cars chassis, body panels (doors, roof, etc.), and frame. On
                average, a car uses around 60% steel by weight .
              </p>
            </a>

            <a
              className="block rounded-xl border bg-fine2 border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              {" "}
              <img
                src={img26}
                alt="Digital Campaigns"
                className="size-10 text-pink-500 w-full h-24"
              />
              <h2 className="mt-4 text-xl font-bold text-white">Aluminum</h2>
              <p className="mt-1 text-sm text-gray-300">
                Lighter than steel, aluminum is increasingly being used in car
                manufacturing to improve fuel efficiency. Its typically used for
                parts that dont require the extreme strength of steel, like
                hoods, trunks, and some engine components .
              </p>
            </a>

            <a
              className="block rounded-xl border bg-fine2 border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              {" "}
              <img
                src={img27}
                alt="Digital Campaigns"
                className="size-10 text-pink-500 w-full h-24"
              />
              <h2 className="mt-4 text-xl font-bold text-white">Plastics</h2>
              <p className="mt-1 text-sm text-gray-300">
                A versatile material, plastics are used for a wide range of car
                parts, both interior and exterior. They re lightweight, can be
                molded into complex shapes, and are relatively inexpensive.
                Common plastic parts include bumpers, dashboards, door panels.
              </p>
            </a>

            <a
              className="block rounded-xl border bg-fine2 border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              {" "}
              <img
                src={img25}
                alt="Digital Campaigns"
                className="size-10 text-pink-500 ml-10 w-36 h-24"
              />
              <h2 className="mt-4 text-xl font-bold text-white">Rubber</h2>
              <p className="mt-1 text-sm text-gray-300">
                Provides grip, flexibility, and vibration dampening. Its
                essential for tires, hoses, gaskets, and seals .
              </p>
            </a>

            <a
              className="block rounded-xl border bg-fine2 border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              {" "}
              <img
                src={img24}
                alt="Digital Campaigns"
                className="size-10 text-pink-500 w-full h-28"
              />
              <h2 className="mt-4 text-xl font-bold text-white">Glass</h2>
              <p className="mt-1 text-sm text-gray-300">
                Used for windshields, windows, and sunroofs .
              </p>
            </a>

            <a
              className="block rounded-xl border bg-fine2 border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              {" "}
              <img
                src={img23}
                alt="Digital Campaigns"
                className="size-10 ml-10 text-pink-500 w-32 h-28"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                Fabrics and Leather
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Employed for seats, upholstery, and interior trim .
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Manufacturing;
