import meetingOne from "../assets/meetingone.png";
import meetingTwo from "../assets/meetingtwo.png";
import meetingThree from "../assets/meetingthree.png";
import meetingFour from "../assets/meetingfour.png";
import cultureOne from "../assets/cultureone.png";
import cultureTwo from "../assets/culturetwo.png";
import cultureThree from "../assets/culturethree.png";
import cultureFour from "../assets/culturefour.png";
import cultureFive from "../assets/culturefive.png";

const Gallery = () => {
  const images = [
    meetingOne,
    meetingTwo,
    meetingThree,
    meetingFour,
    cultureOne,
    cultureTwo,
    cultureThree,
    cultureFour,
    cultureFive,
  ];

  return (
    <section className="bg-[#fff3e6] py-14 min-h-screen">

      {/* ===== FULL WIDTH HEADER (UPDATED) ===== */}
      <div className="bg-[#fff7ee] py-10 text-center shadow-sm w-full transform -translate-y-[10%]">
        <h1 className="text-3xl font-semibold mb-2">Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Supporting Communities with trusted and time-honored practices where
          tradition meets services for the people
        </p>
      </div>

      {/* ===== CONSTRAINED GALLERY CONTENT ===== */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-[90px] mt-14">
        <div className="grid grid-cols-4 gap-4">
          <img
            src={images[0]}
            className="col-span-2 row-span-2 w-full h-[calc(233px*2+2rem)] object-cover rounded-lg shadow-md"
          />

          {images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-[233px] object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Gallery;
