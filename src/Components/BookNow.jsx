import img13 from "/img13.jpg";
import img14 from "/img14.jpg";
import car1 from "/car1.jpg";
import img111 from "/img111.jpg";
function BookNow() {
  return (
    <>
      <section className="overflow-hidden bg-[url('img12.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gray-800/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-xl font-bold text-gray-100 sm:text-3xl md:text-5xl">
              Drive into Tomorrow Where Every Journey Begins
            </h2>

            <p className="hidden max-w-lg text-gray-200/100 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Embark on an unforgettable journey where the road becomes your
              canvas, and every turn sparks your passion. Feel the thrill of the
              open road as you ignite your spirit of adventure with every mile.
              Let the rhythm of the engine fuel your excitement, as you carve
              your path through the landscapes of possibility. Discover the
              freedom of the highway, where each journey becomes a testament to
              your love for the drive. Experience the ultimate expression of
              automotive passion, where the road meets your heart.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:items-stretch bg-fine1 px-4 ">
            <div className="grid place-content-center rounded bg-fine2 p-6 sm:p-8 mt-4">
              <div className="mx-auto max-w-md text-center lg:text-left ">
                <header>
                  <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">
                    Car Collection
                  </h2>

                  <p className="mt-4 text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="#"
                  className="mt-8 inline-block bg-yugin rounded border-none   px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4 bg-fine2 p-10">
                <li className="bg-fine p-3">
                  <a href="#" className="group block">
                    <img
                      src={img111}
                      alt=""
                      className="aspect-square w-full h-96 rounded  bg-cover "
                    />

                    <div className="mt-3 flex  ">
                      <h3 className="font-medium text-gray-100 group-hover:underline group-hover:underline-offset-4 mx-2">
                        car 1
                      </h3>
                      <p className="mt-1 text-sm text-gray-300 mx-2">$150</p>
                      <button className="mx-2 bg-yugin rounded p-1 text-white">
                        Buy Now
                      </button>
                    </div>
                  </a>
                </li>

                <li className="bg-fine p-3">
                  <a href="#" className="group block">
                    <img
                      src={car1}
                      alt=""
                      className="aspect-square w-full h-96 rounded bg-cover"
                    />

                    <div className="mt-3 flex">
                      <h3 className="font-medium text-gray-100 group-hover:underline group-hover:underline-offset-4 mx-2">
                        car 2
                      </h3>
                      <p className="mt-1 text-sm text-gray-300 mx-2">$150</p>
                      <button className="mx-2 bg-yugin rounded p-1 text-white">
                        Buy Now
                      </button>
                    </div>
                  </a>
                </li>
                <li className="bg-fine p-3">
                  <a href="#" className="group block">
                    <img
                      src={img13}
                      alt=""
                      className="aspect-square w-full h-96 rounded object-cover"
                    />

                    <div className="mt-3 flex">
                      <h3 className="font-medium text-gray-100 group-hover:underline group-hover:underline-offset-4 mx-2">
                        car 3
                      </h3>
                      <p className="mt-1 text-sm text-gray-300 mx-2">$150</p>
                      <button className="mx-2 bg-yugin rounded p-1 text-white">
                        Buy Now
                      </button>
                    </div>
                  </a>
                </li>
                <li className="bg-fine p-3">
                  <a href="#" className="group block">
                    <img
                      src={img14}
                      alt=""
                      className="aspect-square w-full h-96 rounded object-cover"
                    />

                    <div className="mt-3 flex">
                      <h3 className="font-medium  text-gray-100 group-hover:underline group-hover:underline-offset-4 mx-2">
                        car 4
                      </h3>
                      <p className="mt-1 text-sm text-gray-300 mx-2">$150</p>
                      <button className="mx-2 bg-yugin rounded p-1 text-white">
                        Buy Now
                      </button>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="bg-fine1">
        <h1 className="text-fine4 text-center text-4xl font-bold">
          Having a doubt? Ask our experts
        </h1>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg text-gray-300">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic text-gray-300">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-fine p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only text-gray-100" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-600 p-3 text-sm bg-fine2"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only text-gray-300" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-600 p-3 text-sm bg-fine2"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only text-gray-300" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-600 p-3 text-sm bg-fine2"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer bg-fine2 rounded-lg border border-gray-600 p-3 text-gray-300 hover:border-white hover:bg-yugin"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Book Online </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer bg-fine2 rounded-lg border border-gray-600 p-3 text-gray-300 hover:border-white hover:bg-yugin"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Store Enquiry </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only  text-gray-300" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-600 p-3 text-sm bg-fine2"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block bg-yugin w-full rounded-lg  px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookNow;
