import { Hero } from '../../components/Home/Hero';
import { Navbar } from '../../components/Home/Navbar';

export function Home() {

  return (
    <>
      <Navbar language={"PT"} />
      <Hero language={'PT'} />
    </>
  );
}