import ProductCard from '@/app/components/ProductCard';
import Title from '@/app/components/Title';
import { API_URL } from '@/app/constants';
import React from 'react';

export const metadata = { title: 'Shop' };

const Shop = async () => {
  const response = await fetch(API_URL, { next: { revalidate: 300 } });
  const products = await response.json();

  return (
    <div>
      <Title text={'Shop'} />
      <div className='grid grid-cols-2 gap-4'>
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  );
};

export default Shop;
