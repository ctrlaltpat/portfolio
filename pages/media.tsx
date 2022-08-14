import PageWrapper from '@/components/layout/pageWrapper';
import ExternalMedia from '@/components/media/externalMedia';
import Note from '@/components/media/note';
import Snippet from '@/components/media/snippet';
import { getContentType } from '@/utils/index';
import { Box, Input } from '@chakra-ui/react';
import { ContentfulApi } from 'lib/contentful';
import type { NextPage } from 'next';
import { useState } from 'react';

const renderList = (list: any) => // TODO
  list
    .sort(
      (a: any, b: any) =>
        new Date(b.sys.updatedAt).getTime() -
        new Date(a.sys.updatedAt).getTime()
    )
    .map((item: any, idx: string) => {
      switch (getContentType(item)) {
        case 'note':
          return <Note key={idx} note={item} />;
        case 'media':
          return <ExternalMedia key={idx} media={item} />;
        case 'snippet':
          return <Snippet key={idx} snippet={item} />;
        default:
          break;
      }
    });

const Media: NextPage = ({ notes, external, snippets }: any) => { //TODO
  const media = [...external, ...notes, ...snippets];

  const [value, setValue] = useState('');
  const [list, setList] = useState(media);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filteredList = [...media].filter(({ fields }) =>
      JSON.stringify({ fields }).toLowerCase().includes(value.toLowerCase())
    );

    setValue(value);
    setList(filteredList);
  };

  return (
    <Box>
      <PageWrapper title='Media'>
        <Box marginBottom={'1rem'}>
          <p>Just sharing some snippets, links etc.</p>
          <Input
            value={value}
            onChange={handleChange}
            placeholder='search'
            size='sm'
            sx={{
              borderColor: 'brand.primary',
              maxWidth: '200px',
            }}
          />
        </Box>
        <Box
          sx={{
            columnCount: [1, 2, 3, 4],
            columnGap: 2,
            counterReset: 'item-counter',
            '& > div': {
              marginBottom: '10px',
            }
          }}
        >
          {renderList(list)}
        </Box>
      </PageWrapper>
    </Box>
  );
};

export async function getStaticProps() {
  const api = new ContentfulApi();

  const [external, notes, snippets] = await Promise.all([
    api.fetchEntries('media'),
    api.fetchEntries('note'),
    api.fetchEntries('snippet'),
  ]);

  return {
    props: { external, notes, snippets },
    revalidate: 10,
  };
}

export default Media;
