import * as React from 'react';

import { cn } from '@cosmas/ui';

import { VehicleCardGrid } from './VehicleCardGrid';

/**
 * FeaturedProductsSection
 *
 * Dealership-style grid of featured vehicles.
 */
export interface FeaturedProductsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FeaturedProductsSection = function FeaturedProductsSection({
  className,
}: FeaturedProductsSectionProps) {
  const vehicles = [
    {
      title: '2022 Toyota Camry',
      brand: 'Toyota',
      price: '₦34,500,000',
      conditionBadgeLabel: 'Brand New',
      ratingValue: '4.7',
      stockLabel: 'In stock',
      compatibleLabel: 'Imported-ready',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '15,000 km',
      year: '2022',
      location: 'Lagos',
      imageSrc: '/images/vehicles/bmw-x5-2021-white-000.jpg',
    },
    {
      title: '2021 Lexus RX350',
      brand: 'Lexus',
      price: '₦52,000,000',
      conditionBadgeLabel: 'Tokunbo',
      ratingValue: '4.8',
      stockLabel: 'In stock',
      compatibleLabel: 'Inspection verified',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '28,000 km',
      year: '2021',
      location: 'Abuja',
      imageSrc: '/images/vehicles/Lexus is-250-sliver-2013.jpg',
    },
    {
      title: 'Toyota Camry',
      brand: 'Toyota',
      price: '₦34,500,000',
      conditionBadgeLabel: 'Nigerian Used',
      ratingValue: '4.6',
      stockLabel: 'In stock',
      compatibleLabel: 'Roadworthy',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '62,000 km',
      year: '2022',
      location: 'Port Harcourt',
      imageSrc: '/images/vehicles/toyota camry.jpg',
    },
    {
      title: '2020 Hyundai Tucson',
      brand: 'Hyundai',
      price: '₦26,900,000',
      conditionBadgeLabel: 'Tokunbo',
      ratingValue: '4.5',
      stockLabel: 'In stock',
      compatibleLabel: 'Inspection verified',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '40,000 km',
      year: '2020',
      location: 'Lagos',
      imageSrc: '/images/vehicles/hyundai-tucson-2024-gblack-001.jpg',
    },
    {
      title: '2019 Honda Accord',
      brand: 'Honda',
      price: '₦31,200,000',
      conditionBadgeLabel: 'Nigerian Used',
      ratingValue: '4.7',
      stockLabel: 'In stock',
      compatibleLabel: 'Roadworthy',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '55,000 km',
      year: '2019',
      location: 'Ibadan',
      imageSrc: '/images/vehicles/honda-accord-2022-black.jpg',
    },
    {
      title: '2022 Kia Sportage',
      brand: 'Kia',
      price: '₦29,500,000',
      conditionBadgeLabel: 'Brand New',
      ratingValue: '4.4',
      stockLabel: 'In stock',
      compatibleLabel: 'Imported-ready',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '8,000 km',
      year: '2022',
      location: 'Abuja',
      imageSrc: '/images/vehicles/IMG-20260713-WA0120.jpg',
    },
    {
      title: '2023 Mercedes-Benz C-Class',
      brand: 'Mercedes-Benz',
      price: '₦75,800,000',
      conditionBadgeLabel: 'Nigerian Used',
      ratingValue: '4.6',
      stockLabel: 'In stock',
      compatibleLabel: 'Roadworthy',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '62,000 km',
      year: '2023',
      location: 'abuja',
      imageSrc: '/images/vehicles/mercedes-benz.jpg',
    },
    {
      title: '2023 Toyota prado',
      brand: 'Toyota',
      price: '₦75,800,000',
      conditionBadgeLabel: 'Nigerian Used',
      ratingValue: '4.6',
      stockLabel: 'In stock',
      compatibleLabel: 'Roadworthy',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '62,000 km',
      year: '2023',
      location: 'Port Harcourt',
      imageSrc: '/images/vehicles/toyota-prado-black-2024-front.jpg',
    },
  ];

  return (
    <VehicleCardGrid
      className={cn(className)}
      heading="Featured Vehicles"
      description="Professional dealership listings—brand new, Tokunbo, and verified Nigerian used stock."
      vehicles={vehicles}
    />
  );
};
