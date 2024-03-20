import img5 from "/img5.jpg";
import img6 from "/img6.jpg";

function Desiging() {
  return (
    <>
      <section className="bg-fine1 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Designing the Future of Connected Cars
            </h2>

            <p className="mt-4 text-white">
              While Lizmotors isnt currently a car manufacturer in the
              traditional sense, based on their focus on connected vehicle
              technology, here how we can imagine they might approach car
              design:
            </p>
          </div>

          <div className="flex gap-4">
            {/* 1 */}
            <div
              className="mt-8 flex flex-wrap justify-between "
              style={{ minWidth: "450px", minHeight: "350px" }}
            >
              <a
                className="flex flex-col items-center bg-fine  justify-center w-68 rounded-xl border border-gray-700 py-8 px-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 mx-4 my-4"
                href="#"
              >
                <h2 className="text-lg font-bold whitespace-nowrap m-2">
                  Seamless Connectivity
                </h2>

                <p className="mt-1 text-sm">
                  Lizmotors vehicles would likely prioritize seamless
                  integration with smartphones and cloud services, allowing
                  features like remote diagnostics and personalized
                  infotainment.
                </p>
              </a>
              {/* Repeat similar structures for other flex items */}
            </div>
            {/* 2  */}
            <div
              className="mt-8 flex flex-wrap justify-center "
              style={{ minWidth: "450px", minHeight: "350px" }}
            >
              <a
                className="flex flex-col items-center bg-fine justify-center w-68 rounded-xl border border-gray-700 py-8 px-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 mx-4 my-4"
                href="#"
              >
                <h2
                  className="text-lg font-bold whitespace-nowrap m-2 overflow-hidden"
                  style={{ maxWidth: "300px", textOverflow: "ellipsis" }}
                >
                  Advanced Driver Assistance Systems
                </h2>

                <p className="mt-1 text-sm">
                  Building on their core competency, Lizmotors cars might have
                  industry-leading ADAS features powered by their connected
                  platform.
                </p>
              </a>
              {/* Repeat similar structures for other flex items */}
            </div>
            {/* 3  */}
            <div
              className="mt-8 flex flex-wrap justify-center"
              style={{ minWidth: "450px", minHeight: "350px" }}
            >
              <a
                className="flex flex-col items-center bg-fine justify-center w-68 rounded-xl border border-gray-700 py-8 px-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 mx-4 my-4"
                href="#"
              >
                <h2 className="text-lg font-bold whitespace-nowrap m-2">
                  Focus on User Experience
                </h2>

                <p className="mt-1 text-sm">
                  The interior design could be optimized for comfort and ease of
                  use, potentially featuring holographic displays or
                  voice-controlled interfaces.
                </p>
              </a>
              {/* Repeat similar structures for other flex items */}
            </div>
          </div>
          {/* end */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="overflow-hidden bg-fine1 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Hardware Components
            </h2>
            <ul className="list-disc ml-4 text-gray-300">
              <li className="mb-4  ">
                Next-Gen Sensors: We can expect Lizmotors cars to be equipped
                with a comprehensive suite of high-resolution cameras, LiDAR
                (Light Detection and Ranging) systems, and advanced radar for
                superior environmental awareness.
              </li>
              <li className="mb-4">
                Telematics Unit: This would be the heart of the connected car
                experience, collecting and transmitting vehicle data to the
                Lizmotors cloud platform.
              </li>
              <li>
                Hardware Redundancy: For safety and reliability in critical
                systems like steering and braking, Lizmotors might incorporate
                hardware redundancy.
              </li>
            </ul>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src={img5}
          className="h-56 w-11/12 object-cover mr-10 sm:h-full"
          style={{ backgroundSize: "cover" }}
        />
      </section>
      {/* 2 */}
      <section className="overflow-hidden bg-fine1 sm:grid sm:grid-cols-2 ">
        <img
          alt=""
          src={img6}
          className="h-56 w-11/12 ml-10 object-cover sm:h-full mt-14"
          style={{ backgroundSize: "cover", maxHeight: "700px" }}
        />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl mb-6">
              Software Components
            </h2>
            <ul className="list-disc ml-4 text-gray-300">
              <li className="mb-4">
                Lizmotors Mobility OS: This custom operating system would power
                the in-car interface, offering features like navigation,
                entertainment, and control of ADAS functionalities.
              </li>
              <li className="mb-4">
                Cloud-Based AI: Lizmotors might leverage the power of cloud
                computing for advanced AI features like real-time traffic
                analysis, predictive maintenance, and personalized driving
                assistance.
              </li>
              <li>
                Lizmotors App: The mobile app would allow for remote monitoring,
                diagnostics, and control of various car functions, further
                enhancing the connected car experience.
              </li>
            </ul>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8 ">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Desiging;
