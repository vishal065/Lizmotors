import img1 from "/img1.png";
export function HeroOne() {
  return (
    <div className="relative w-full bg-fine1  text-fine4">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-fine3/70 p-1 px-1">
            <div className="rounded-full bg-fine2 p-1 px-2">
              <p className="text-sm font-medium text-fine4">
                We&apos;re hiring
              </p>
            </div>
            <p className="text-sm font-medium text-fine4 px-1">
              Join our team &rarr;
            </p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-fine4">
            Project Phoenix
          </h1>
          <p className="mt-8 text-lg text-fine4">
            As we embark on Project Phoenix, the development of our exciting new
            vehicle, a clear roadmap and collaborative environment are
            essential. To achieve this, we re implementing a timeline-mindmap
            dashboard to visualize each of the five crucial phases:
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <p className="mt-2 text-sm text-fine4">
                We care about your privacy
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md bg-fine2 px-3 py-2.5 text-sm font-semibold shadow-sm hover:bg-fine3/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-fine1 bg-cover lg:aspect-[4/3] lg:h-[550px] xl:aspect-[16/8] mt-20 py-12"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
