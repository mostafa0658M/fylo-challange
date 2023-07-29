import {
  FeaturesSection,
  Footer,
  HeroSection,
  Navbar,
  ProductiveSection,
  ReviewsSection,
  SignUpSection,
} from "./components";

function App() {
  return (
    <div className='bg-main w-full text-white'>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductiveSection />
      <ReviewsSection />
      <SignUpSection />
      <Footer />
    </div>
  );
}

export default App;
