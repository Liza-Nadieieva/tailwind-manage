export default function Home() {
  return (
    <div>
      {/* navbar */}
      <nav className="relative container mx-auto p-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            Blah
          </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-6">
          <a href="" className="hover:text-darkGrayIsBlue">Pricing</a>
          <a href="" className="hover:text-darkGrayIsBlue">Product</a>
          <a href="" className="hover:text-darkGrayIsBlue">About Us</a>
          <a href="" className="hover:text-darkGrayIsBlue">Careers</a>
          <a href="" className="hover:text-darkGrayIsBlue">Community</a>
        </div>
        {/* button */}
        <a href="" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
      </div>
      </nav>
    {/* hero section */}
    <section id="hero">
      {/* flex container */}
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products 
          </h1>
          <p className="max-w-sm text-center text-darkGrayIshBlue md:text-left">
            Manage makes it simple for software teams to plan
            day-to-day tasks
            while keeping in larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
          </div>
        </div>
        {/* image */}
        <div className="md:w-1/2">
          <img src="https://fastly.picsum.photos/id/450/200/200.jpg?hmac=DluUYibC-zBoNHLOHsO6aHIuiA3pDhholFjiR5KcwR0" alt="" />
        </div>
      </div>
    </section>
    {/* features section */}
    <section id="features">
      {/* flex container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* whats different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
         <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
         </h2>
         <p className="max-w-sm text-center text-darkGrayIshBlue md:text-left">
            Manage provides all the ..
         </p>

        </div>
        {/* Numbered List */}
        <div>

        </div>
      </div>
    </section>

    </div>
  );
}
