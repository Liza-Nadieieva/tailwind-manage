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
            Manage provides all the funcionality your team needs,
            without the 
            complexity. Our software is tailor-made for modern digital product teams.
         </p>

        </div>
        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
         {/* LIST ITEM 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
           {/* heading */}
           <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress 
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress 
              </h3>
              <p className="text-darkGrayIshBlue">
                  See how your day-to-day taska fit into the wider vision. Go from 
                  tracking progress at the milestone level all the way done to the 
                  smallest of details. Never lose sight of the bigger picture againe.
              </p> 
            </div>

          </div>
          {/* list item 2  */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
           {/* heading */}
           <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports 
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports 
              </h3>
              <p className="text-darkGrayIshBlue">
                  See how your day-to-day taska fit into the wider vision. Go from 
                  tracking progress at the milestone level all the way done to the 
                  smallest of details. Never lose sight of the bigger picture againe.
              </p> 
            </div>
          </div>
          {/* list item 3  */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
           {/* heading */}
           <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place  
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place  
              </h3>
              <p className="text-darkGrayIshBlue">
                  See how your day-to-day taska fit into the wider vision. Go from 
                  tracking progress at the milestone level all the way done to the 
                  smallest of details. Never lose sight of the bigger picture againe.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials */}
    <section id="testimonials">
      {/* container to heading and testimonials blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* heading */}
        <h2 className="text-4xl font-bold text-center">
          What's different about manange?
        </h2>
        {/* testimonials container*/}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* testimoanila--1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg rounded-full bg-verylightGray md:w-1/3">
            <img src="https://picsum.photos/100" alt="" className="w-16 -mt-14 rounded-full"/>
            <h5 className="text-lg font-bold">
              Anisha Li
            </h5>
            <p className="text-sm text-darkGrayIshBlue">
              See how your day-to-day taska fit into the wider vision. Go from 
              tracking progress at the milestone level all the way done to the 
              smallest of details. Never lose sight of the bigger picture againe.
            </p>
          </div>

           {/* testimoanila--2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg rounded-full bg-verylightGray md:flex md:w-1/3">
            <img src="https://picsum.photos/200" alt="" className="w-16 -mt-14 rounded-full"/>
            <h5 className="text-lg font-bold">
              Anisha Li2
            </h5>
            <p className="text-sm text-darkGrayIshBlue">
              See how your day-to-day taska fit into the wider vision. Go from 
              tracking progress at the milestone level all the way done to the 
              smallest of details. Never lose sight of the bigger picture againe.
            </p>
          </div>
           {/* testimoanila--3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg rounded-full bg-verylightGray md:flex md:w-1/3">
            <img src="https://picsum.photos/300" alt="" className="w-16 -mt-14 rounded-full"/>
            <h5 className="text-lg font-bold">
              Anisha Li3
            </h5>
            <p className="text-sm text-darkGrayIshBlue">
              See how your day-to-day taska fit into the wider vision. Go from 
              tracking progress at the milestone level all the way done to the 
              smallest of details. Never lose sight of the bigger picture againe.
            </p>
          </div>
        </div>
        {/* button */}
        <div className="my-16">
          <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
        </div>
      </div>
    </section>
    </div>
  );
}
