import Layout from '../components/layouts/home/Layout';
import MainContent from "../components/home/MainContent";
import SliderImages from "../components/home/SliderImages";

export default function Home() {
  return (
    <Layout>
      <MainContent />
      <SliderImages />
    </Layout>
  )
}
