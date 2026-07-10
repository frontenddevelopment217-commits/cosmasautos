import * as React from 'react';

import {
  BrandLogos,
  FeaturedCategoriesSection,
  FeaturedProductsSection,
  FooterCTA,
  HeroSection,
  PromotionalBanner,
  WhyChooseUsSection,
} from '../src/components/homepage';

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedCategoriesSection />
      <FeaturedProductsSection />
      <PromotionalBanner />
      <WhyChooseUsSection />
      <BrandLogos />
      <FooterCTA />
    </>
  );
}
