import MainLayout from '@/components/commons/Layout/MainLayout';
import HomePageSections from '@/components/Landing';

export default function index() {
  return (
    <MainLayout>
      <HomePageSections />
    </MainLayout>
  );
}
