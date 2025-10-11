import { useState } from "react";
import map from "../../assets/images/map.png";
import BrandMarquee from "../../components/marquee/BrandMarquee";

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnClick = () => {
    setIsPlaying(true);
  };
  return (
    <section className="py-10 lg:py-14.5">
      {/* Before Marquee Section */}
      <div className="container mx-auto px-5 space-y-18 lg:space-y-30">
        {/* 1st Text and Video section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 justify-center items-start">
          {/* Text */}
          <div className="w-full lg:w-1/2 lg:pr-[100px]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-semibold">
              We’re building the future of group travel
            </h3>
            <p className="text-base sm:text-lg mt-6">
              From the start, our goal has been to bring transparency and
              simplicity to booking group travel – by connecting group travel
              organizers with hoteliers and delivering a great experience for
              all. Through our technology and our solutions, we’re helping our
              customers save time, build trust and accelerate revenue.
            </p>
            <button className="mt-8 bg-[#7ED957] rounded-lg text-sm sm:text-base px-4 py-3 font-semibold hover:text-white hover:shadow-md hover:border-b hover:border-white transform transition-transform duration-150 ease-in-out active:scale-95">
              Try Group Book now!
            </button>
          </div>

          {/* Video */}
          <div className="w-full lg:w-1/2 aspect-video overflow-clip rounded-2xl max-w-full">
            {!isPlaying ? (
              <div
                onClick={handleOnClick}
                className="w-full h-full cursor-pointer relative"
              >
                <img
                  src="/Images/groupBooking.jpg"
                  alt="Thumbnail"
                  className="w-full h-full object-cover blur-[1px]"
                />
                <img
                  src="/Icons/autoPlay.png"
                  alt="Auto Play Icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-16 lg:w-20"
                />
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* 2nd Picture and Image section */}
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:gap-0 justify-center items-start">
          {/* Text */}
          <div className="w-full lg:w-1/2 lg:pl-[100px]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-semibold">
              A beginning rooted in hospitality
            </h3>
            <p className="text-base sm:text-lg mt-6">
              Founded in 2014, Group Booking began when former hotel executives
              David Kloeppel and Kemp Gallineau set out to solve the complex and
              inefficient challenges of booking hotels for groups. While some
              things have changed over the years, our primary goal remains –
              make group travel transparent and simpler for all. It’s a
              philosophy that many agree with, including four of the top global
              hotel brands – Accor, Hilton, IHG and Marriott – who in 2019
              invested in our people, direction and tech solution. As desire for
              our solution grew, so did our need to accelerate and expand the
              technology.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 aspect-video overflow-clip rounded-2xl max-w-full">
            <div className="w-full h-full cursor-pointer">
              <img
                src="/Images/women.png"
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-8 ">
        <BrandMarquee></BrandMarquee>
      </div>

      {/* Map Section */}
      <div className="container px-5 mx-auto mt-[120px] space-y-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-semibold text-center">
          Group Booking has nearly 50,000 hotels ready to be booked
        </h3>
        <figure className="w-full">
          <img src={map} alt="Map" className="w-full object-cover" />
        </figure>
      </div>
    </section>
  );
};

export default AboutUs;
