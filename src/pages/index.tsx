import Layout from '@/components/Layout';
import TechExp from '@/components/TechExp';
import Paragraph from '@/components/ui/Paragraph';

export default function Home() {
  return (
    <Layout>
      <div className='relative flex items-center justify-center overflow-x-hidden'>
        {/* h-screen */}
        <div className='container pt-48 max-w-7xl w-full mx-auto'>
          <div className='h-full gap-2 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
            <h1 className='gradient-text'>Hello, I&apos;m Patrick</h1>
            <TechExp />
            <Paragraph className='max-w-xl lg:text-left'>
              {/* &#128376;  */}
              &#128187; Web Developer
              <br />
              &#127468;&#127463; London-based
              <br />
              &#127918; Gamer
              <br />
              &#128764; Skater
            </Paragraph>
          </div>
        </div>
      </div>
    </Layout>
  );
}
