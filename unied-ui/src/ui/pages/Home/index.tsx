import { useState } from 'react';
import { Navbar } from '../../components/Home/Navbar';
import { Hero } from '../../components/Home/Hero';

export function Home() {
  const [language, setLanguage] = useState<'PT' | 'EN'>('PT');

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={'PT'} />
    </>
  );
}