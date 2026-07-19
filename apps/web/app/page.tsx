import * as React from 'react';

import {

  FeaturedCategoriesSection,
  FeaturedProductsSection,
  FooterCTA,
  HeroSection,
  PromotionalBanner,
  WhyChooseUsSection,
  BrowseByBrand,
} from '../src/components/homepage';

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedCategoriesSection />
      <FeaturedProductsSection />
      <PromotionalBanner />
      <WhyChooseUsSection />
      <BrowseByBrand />
      <FooterCTA />
    </>
  );
}
