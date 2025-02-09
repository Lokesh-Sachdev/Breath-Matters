import {
  Brands,
  BreathingIssues,
  CapnotrainerIntro,
  FAQ,
  Footer,
  Header,
  HowItWorks,
  KeyFeatures,
  PowerOfCapnoTrainer,
  Testimonials,
  WhatMakesDifferent,
  WhoIsItFor,
} from ".";

const Homebody = () => {
  return (
    <>
      <Header />
      <Brands />
      <BreathingIssues />
      <CapnotrainerIntro />
      <PowerOfCapnoTrainer />
      <HowItWorks />
      {/* <WhatMakesDifferent />
      <WhoIsItFor />
      <Testimonials />
      <KeyFeatures /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Homebody;
