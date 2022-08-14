import PageWrapper from '@/components/layout/pageWrapper';
import Slider from '@/components/slider';
import { TileProps } from '@/components/slider/tile';
import type { NextPage } from 'next';
import { ContentfulApi } from '../lib/contentful';

const Projects: NextPage = ({ projects }: any) => { //TODO
  const items: TileProps[] = [...projects].map(({ fields }) => ({
    title: fields.title,
    description: fields.description,
    status: fields.status,
    demoUrl: fields.demo,
    imgUrl: fields.coverImage.fields.file.url,
    imgAlt: fields.slug,
    repoUrl: fields.repo,
    tags: fields.tags,
  }));

  return (
    <PageWrapper title='Projects'>
      <Slider items={items} />
      <Slider />
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const api = new ContentfulApi();

  const projects = await api.fetchEntries('project');

  return {
    props: { projects },
    revalidate: 10,
  };
}

export default Projects;
