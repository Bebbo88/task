import Header from "@/components/prodDetailsUI/layout/Header";
import Footer from "@/components/prodDetailsUI/layout/Footer";
import SectionWrapper from "@/components/prodDetailsUI/layout/SectionWrapper";
import ProductGallery from "@/components/prodDetailsUI/product/ProductGallery";
import ProductInfo from "@/components/prodDetailsUI/product/ProductInfo";
import RatingSummary from "@/components/prodDetailsUI/reviews/RatingSummary";
import SimilarProducts from "@/components/prodDetailsUI/related/SimilarItems";
import Hero from "@/components/prodDetailsUI/product/Hero";
import AfterHero from "@/components/prodDetailsUI/product/AfterHero";
import TotalReviews from "@/components/prodDetailsUI/reviews/TotalReviews";
import RatingBars from "@/components/prodDetailsUI/reviews/RatingBars";
import ReviewsList from "@/components/prodDetailsUI/reviews/ReviewsList";

export default function ProductDetailsPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <SectionWrapper className="pt-4 pb-10 ps-5 pe-5 md:ps-20 md:pe-20">
        <AfterHero />
      </SectionWrapper>
      <SectionWrapper className="pt-4 pb-10 ps-5 pe-5  md:ps-20 md:pe-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <ProductGallery />
          </div>

          <div className="lg:col-span-7">
            <ProductInfo />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="pt-4 pb-10 ps-5 pe-5 md:ps-20 md:pe-60">
        <div className="flex flex-col md:items-center lg:flex-row gap-1 lg:gap-25 lg:justify-between">
          <RatingSummary />
          <RatingBars />
          <TotalReviews />
        </div>
      </SectionWrapper>
      <SectionWrapper className="pt-4 pb-10 ps-5 pe-5 md:ps-20 md:pe-60">
        <ReviewsList />
      </SectionWrapper>
      <SectionWrapper className="pt-4 pb-10 ps-5 pe-5 md:ps-20 md:pe-20">
        <SimilarProducts />
      </SectionWrapper>
      <Footer />
    </div>
  );
}
