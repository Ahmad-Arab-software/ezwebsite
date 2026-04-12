import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import CursorEffects from '../components/CursorEffects';
import ScrollToTop from '../components/ScrollToTop';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../i18n/LanguageContext';

const ProjectsPage: React.FC = () => {
  const { lang, t } = useLanguage();

  useSEO({
    title: t.projects.seoTitle[lang],
    description: t.projects.seoDesc[lang],
    path: '/projecten',
    lang,
  });

  return (
    <div className="antialiased selection:bg-violet-500 selection:text-white font-sans bg-white text-slate-900">
      <CursorEffects />
      <Navbar />
      <main className="pt-24">
        <Projects showAll />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectsPage;
