import { NextPageWithLayout } from './page';
import MainLayout from '@/components/commons/Layout/MainLayout';
import HomePageSections from '@/components/Landing';

const index: NextPageWithLayout = () => {
  return <HomePageSections />;
};
export default index;

index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
