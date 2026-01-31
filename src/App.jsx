// React Router
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./pages/MainLayout";
import PlainLayout from "./pages/PlainLayout";

// Home components
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import WhyGuthiSansthan from "./components/WhyGuthiSansthan";
import LatestUpdate from "./components/LatestUpdate";
import MapSection from "./components/MapSection";

// Pages
import Notices from "./pages/Notices";
import NoticeDetail from "./pages/NoticeDetail";
import ActsandLaws from "./pages/ActsandLaws";
import BranchPage from "./pages/BranchPage";
import BranchBhaktapur from "./pages/BranchBhaktapur";
import BranchLalitpur from "./pages/BranchLalitpur";
import BranchTripureshwor from "./pages/BranchTripureshwor";
import Calendar from "./pages/Calendar";
import Circular from "./pages/Circular";
import Complaint from "./pages/Complaint";
import Contact from "./pages/Contact";
import FileTracking from "./pages/FileTracking";
import Gallery from "./pages/Gallery";
import Map from "./pages/Map";
import RecommendedHome from "./pages/RecommendedHome";
import Result from "./pages/Result";
import SetoMachindranath from "./pages/SetoMachindranath";
import Vacancy from "./pages/Vacancy";
import YearlyBudget from "./pages/YearlyBudget";
import AboutUs from "./pages/AboutUs";
import Culture from "./pages/Culture";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HeroSlider />
            <Services />
            <WhyGuthiSansthan />
            <LatestUpdate />
            <MapSection />
          </MainLayout>
        }
      />

      <Route path="/notice" element={<MainLayout><Notices /></MainLayout>} />
      <Route path="/notice/:id" element={<MainLayout><NoticeDetail /></MainLayout>} />
      <Route path="/calendar" element={<MainLayout><Calendar /></MainLayout>} />
      <Route path="/gallery" element={<PlainLayout><Gallery /></PlainLayout>} />
      <Route path="/complaint" element={<PlainLayout><Complaint /></PlainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/recommended-home" element={<MainLayout><RecommendedHome /></MainLayout>} />
      <Route path="/file-tracking" element={<MainLayout><FileTracking /></MainLayout>} />
      <Route path="/map" element={<MainLayout><Map /></MainLayout>} />

      {/* BRANCHES */}
      <Route path="/branches" element={<MainLayout><BranchPage /></MainLayout>} />
      <Route path="/branches/bhaktapur" element={<MainLayout><BranchBhaktapur /></MainLayout>} />
      <Route path="/branches/lalitpur" element={<MainLayout><BranchLalitpur /></MainLayout>} />
      <Route path="/branches/tripureshwor" element={<MainLayout><BranchTripureshwor /></MainLayout>} />

      <Route path="/vacancy" element={<MainLayout><Vacancy /></MainLayout>} />
      <Route path="/result" element={<MainLayout><Result /></MainLayout>} />
      <Route path="/yearly-budget" element={<MainLayout><YearlyBudget /></MainLayout>} />
      <Route path="/circular" element={<MainLayout><Circular /></MainLayout>} />
      <Route path="/acts-laws" element={<MainLayout><ActsandLaws /></MainLayout>} />
      <Route path="/seto-machindranath" element={<MainLayout><SetoMachindranath /></MainLayout>} />
      <Route path="/cultural" element={<MainLayout><Culture /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUs /></MainLayout>} />
    </Routes>
  );
}

export default App;
