import { NextPageWithLayout } from './page';
import dynamic from 'next/dynamic';
const MainLayout = dynamic(
  () => import('@/components/commons/Layout/MainLayout'),
  { ssr: false }
);
import HomePageSections from '@/components/Landing';

const index: NextPageWithLayout = () => {
  return <HomePageSections />;
};
export default index;

index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
