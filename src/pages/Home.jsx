import Layout from "../components/layout/Layout";
import Hero from "../components/ui/Hero";
import AboutPreview from "../components/ui/AboutPreview";

function Home() {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
    </Layout>
  );
}

export default Home;