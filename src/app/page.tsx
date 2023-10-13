import Image from 'next/image'
import Hero from '@/section/hero/Hero'
import Promotion from '@/section/promotion/Promotion'
import Body from '@/section/body/Body'
import Sale from '@/section/sale/Sale'
import Banner from '@/section/banner/Banner'
import { useState } from 'react'
export default function Home() {
  return (
    <div className='m-2'>
      <Hero/>
      <Promotion/>
      <Body/>
      <Sale/>
      <Banner/>
    </div>
  )
}
