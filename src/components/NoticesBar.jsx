import { Link, useNavigate } from "react-router-dom";

function NoticesBar() {
  const Navigate = useNavigate()
  return (
    <div className="w-full h-12 bg-gradient-to-b from-gray-700 to-black flex items-center overflow-hidden">
      
      
      <div className="px-4 text-white font-semibold whitespace-nowrap">
        Notices:
      </div>

      
    <marquee behavior="" direction=""><div className="relative flex-1 overflow-hidden">
        <div className="flex items-center gap-10 text-white text-sm whitespace-nowrap animate-marquee">
                <button
      onClick={() => Navigate("/notice/1")}
      className="hover:underline text-white text-lg leading-none max-h-12"
    >
      • Parking Bid Notice
    </button>
          
          <button
      onClick={() => Navigate("/notice/2")}
      className="hover:underline text-white text-lg leading-none max-h-12"
    >
      • Open,Inclusive, Internal Written Examination Schedule
    </button>

          <button
      onClick={() => Navigate("/notice/3")}
      className="hover:underline text-white text-lg leading-none max-h-12"
    >
      • Exam Center
    </button>
    
          <button
      onClick={() => Navigate("/notice/4")}
      className="hover:underline text-white text-lg leading-none max-h-12"
    >
      • List of Candidates
    </button>
    <button
      onClick={() => Navigate("/notice/5")}
      className="hover:underline text-white text-lg leading-none max-h-12"
    >
      • आ.व. ०८१/८२
    </button>

          
        </div>
      </div></marquee>
      
    </div>
  );
}

export default NoticesBar;
