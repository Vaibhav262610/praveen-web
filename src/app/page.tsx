import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import HeaderBg from '@/components/HeaderBg';
import Contact from '@/components/Contact';
import Work from '@/components/Work';

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeaderBg />
        <AboutMe />
        <Work />
        <Contact />
      </div>
    </>
  );
}
