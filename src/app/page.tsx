import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import HeaderBg from '@/components/HeaderBg';
import Contact from '@/components/Contact';
import Work from '@/components/Work';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeaderBg />
        <AboutMe />
        <Work />
        <Services />
        <Contact />
      </div>
    </>
  );
}
