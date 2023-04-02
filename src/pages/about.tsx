import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { FC } from 'react';
import NextLink from 'next/link';
import Layout from '@/components/Layout';
// import Code from '@/ui/Code';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs';

// export const randomCode = `const genPassword = (): string => {
//   const chars =
//     '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   return Array.from(Array(12).keys())
//     .map((char) => chars[Math.floor(Math.random() * chars.length)])
//     .join('');
// };`;

//TODO: links, images
const page: FC = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading size='sm'>About</LargeHeading>
        <Paragraph>Hey, thanks for visiting! </Paragraph>
        <Paragraph>
          My name is Patrick, and I&apos;m a web developer based in London, UK.
          I&apos;m currently specialising in Front-End web development but
          always interested in working on the full stack.
        </Paragraph>
        <Paragraph>
          This website is a personal portfolio to display a few{' '}
          <NextLink href={'/projects'}>projects</NextLink>, share knowledge and
          hopefully inspire others during my muggle struggle. The repo can be
          found{' '}
          <NextLink href={'/'} className='text-blue-400'>
            here
          </NextLink>
          .
        </Paragraph>
        <Paragraph>
          Feel free to say hello on{' '}
          <NextLink className='text-blue-400' href={'/'}>
            LinkedIn
          </NextLink>{' '}
          or{' '}
          <NextLink className='text-blue-400' href={'/'}>
            Twitter
          </NextLink>
          {/* , but don&apos;t expect a speedy reply ;) */}.
        </Paragraph>

        {/* <Code animated code={randomCode} language='typescript' show />
        <Tabs defaultValue='left' className='max-w-2xl w-full'>
          <TabsList>
            <TabsTrigger value='left'>left</TabsTrigger>
            <TabsTrigger value='right'>right</TabsTrigger>
          </TabsList>
          <TabsContent value='left'>
            <Paragraph>Left</Paragraph>
          </TabsContent>
          <TabsContent value='right'>
            <Paragraph>Right</Paragraph>
          </TabsContent>
        </Tabs> */}
      </div>
    </Layout>
  );
};

export default page;
