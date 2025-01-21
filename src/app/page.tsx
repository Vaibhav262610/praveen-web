import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import HeaderBg from '@/components/HeaderBg';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeaderBg />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}
