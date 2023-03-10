// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Topnav } from "./components/Topnav";
import { Footer } from "./components/Footer";
import { Home } from "./components/Routes/Home";
import { FindOpportunities } from "./components/Routes/FindOpportunities";
import { AboutMeWork } from "./components/Routes/AboutMeWork";
import { HelpAndSuppor } from "./components/Routes/AboutWorkComponents/HelpAndSuppor";
import { HowItWorks } from "./components/Routes/AboutWorkComponents/HowItWorks";
import { OurStory } from "./components/Routes/AboutWorkComponents/OurStory";
import { WhyMeToWork } from "./components/Routes/AboutWorkComponents/WhyMeToWork";
import { FindProfession } from "./components/Routes/FindProfession";
import { MemberShip } from "./components/Routes/AboutWorkComponents/MemberShip";
import { ExtendKnowledge } from "./components/Routes/AboutWorkComponents/ExtendKnowledge";
import { Agreement } from "./components/Routes/HRComponennts/Agreement";
import { HRSupport } from "./components/Routes/HRComponennts/HRSupport";
import { EnterpriceSolution } from "./components/Routes/HRComponennts/EnterpriceSolution";
import { Contact } from "./components/Routes/HRComponennts/Contact";
import { LoaginMain } from "./components/Routes/LoaginMain";
import { MainSignin } from "./components/Routes/MainSignin";
import { CompanyProfile } from "./components/Routes/CompanyProfile";
import { MainPublishJobs } from "./components/Routes/MainPublishJobs";
import { MainDraftJobs } from "./components/Routes/MainDraftJobs";
import { MainInterview } from "./components/Routes/MainInterview";
import { RecuriterProfessional } from "./components/Routes/RecuriterProfessional";
import { MainPurchasePlan } from "./components/Routes/MainPurchasePlan";
import { RenewPlan } from "./components/Routes/RenewalPlanComponents/RenewPlan";
import { RenewPlanMain } from "./components/Routes/RenewPlanMain";
import { FreelancerProfile } from "./components/Routes/FreelancerProfile";
import { FreelanceGenerateCv } from "./components/Routes/FreelanceGenerateCv";
import { MainFreelanceFindWork } from "./components/Routes/MainFreelanceFindWork";
import { FreelanceMainJobApply } from "./components/Routes/FreelanceMainJobApply";
import { FreelanceMainSavedJobs } from "./components/Routes/FreelanceMainSavedJobs";
import { FreelancerSheduled } from "./components/Routes/FreelancerSheduled";
import { FreelanceMainOffer } from "./components/Routes/FreelanceMainOffer";
import FacebookInUI from "./components/Routes/facebook";
import { Navigate } from "react-router-dom";
import { Forget } from "./components/Routes/ForgetComponents/Forget";
import { RecruiterShedule } from "./components/Routes/RecruiterShedule&Offer/RecruiterShedule";
import { RecruiterOffer } from "./components/Routes/RecruiterShedule&Offer/RecruiterOffer";
import { RecMainOffer } from "./components/Routes/RecMainOffer";
import { RecMainShedule } from "./components/Routes/RecMainShedule";

function App() {
  const navigate = useNavigate();

  const getToken = async () => {
    let token = await localStorage.getItem("access-token");
    let userType = await localStorage.getItem("userType");

    if (token && userType == "freelancer") {
      navigate("/FreelancerProfile" + `?id=${token.substring(0, 20)}`, {
        state: token,
      });
    }
    if (token && userType === "recruiter") {
      navigate("/CompanyProfile" + `?id=${token.substring(0, 20)}`, {
        state: token,
      });
    }
  };

  React.useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindProfessions" element={<FindProfession />} />
        <Route path="/Opportunities" element={<FindOpportunities />} />
        <Route path="/AboutMe" element={<AboutMeWork />} />
        <Route path="/HelpSupport" element={<HelpAndSuppor />} />
        <Route path="/HowWork" element={<HowItWorks />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/WhyMeWorks" element={<WhyMeToWork />} />
        <Route path="/MemberPlans" element={<MemberShip />} />
        <Route path="/ExtendKnowledge" element={<ExtendKnowledge />} />
        <Route path="/Agreement" element={<Agreement />} />
        <Route path="/HRsupport" element={<HRSupport />} />
        <Route path="/Enterprice" element={<EnterpriceSolution />} />
        <Route path="/FreeContact" element={<Contact />} />
        <Route path="/Login" element={<LoaginMain />} />
        <Route path="/Signup" element={<MainSignin />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/facebook" element={<FacebookInUI />} />
        {/* Recruiter */}
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/PublishedJob" element={<MainPublishJobs />} />
        <Route path="/DraftJob" element={<MainDraftJobs />} />
        <Route path="/Interview" element={<MainInterview />} />
        <Route path="/RecruiterSheduled" element={<RecMainShedule />} />
        <Route path="/RecruiterOffeer" element={<RecMainOffer />} />
        <Route path="/Professional" element={<RecuriterProfessional />} />
        <Route path="/PurchasePlan" element={<MainPurchasePlan />} />
        <Route path="/RenewPlan" element={<RenewPlanMain />} />
        {/* RecruiterEnd */}

        {/* Freelancer */}
        <Route path="/FreelancerProfile" element={<FreelancerProfile />} />
        <Route path="/FreelancerGenerateCv" element={<FreelanceGenerateCv />} />
        <Route path="/FreelancerFindWork" element={<MainFreelanceFindWork />} />
        <Route
          path="/FreelanceJobApplied"
          element={<FreelanceMainJobApply />}
        />
        <Route
          path="/FreelanceMainSavedJob"
          element={<FreelanceMainSavedJobs />}
        />
        <Route path="/FreelanceSheduled" element={<FreelancerSheduled />} />
        <Route path="/FreelanceOffeer" element={<FreelanceMainOffer />} />

        {/* FreelancerEnd */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
