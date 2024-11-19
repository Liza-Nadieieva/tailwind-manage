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
    </div>
  );
}
