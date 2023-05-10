import Link from 'next/link';
import { formatDate } from '@/lib/utils';
// import Paragraph from '@/ui/Paragraph';
// import Image from 'next/image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const theDate = formatDate(date);
  return (
    <Link
      as={`/posts/${slug}`}
      href='/posts/[slug]'
      className='bg-gradient-to-br from-orange-100 to-orange-200 dark:from-blue-200 dark:to-blue-500 max-w-2xl rounded-md transition ease-in-out delay-200 hover:-translate-y-1'
    >
      <div className='max-w-sm w-full lg:max-w-full lg:flex'>
        {/* <div className='lg:h-auto lg:w-64 rounded-t rounded-b lg:rounded-t-none lg:rounded-l text-center overflow-hidden'>
          <Image alt={title} src={coverImage} width={400} height={200}/>
        </div> */}
        <div className='p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-2'>
            <div className='text-gray-900 font-bold text-sm md:text-md mb-2 hover:underline'>{title}</div>
            <p className='hidden lg:block text-gray-700 text-xs'>{`${excerpt.substring(0, 120)}...`}</p>
          </div>
          <div className='flex items-center'>
            {/* <Image
              className='w-10 h-10 rounded-full mr-4'
              src={author.picture}
              width={150}
              height={150}
              alt={`Avatar of ${author}`}
            /> */}
            <div className='text-xs'>
              {/* <p className='text-gray-900 leading-none'>{author.name}</p> */}
              <p className='text-gray-700'>{theDate}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
