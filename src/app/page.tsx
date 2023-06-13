import Image from 'next/image'
import Hero from '@/section/hero/Hero'
import Promotion from '@/section/promotion/Promotion'
import Body from '@/section/body/Body'
import Sale from '@/section/sale/Sale'
import Banner from '@/section/banner/Banner'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Promotion/>
      <Body/>
      <Sale/>
      <Banner/>
    </div>
  )
}
