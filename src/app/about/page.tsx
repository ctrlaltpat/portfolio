
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { FC } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CtrlAltPat | About',
  description: 'Friendly neighbourhood web developer',
}

const page: FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>About</LargeHeading>
        <Paragraph>me</Paragraph>
      </div>
    </div>
  )
}

export default page