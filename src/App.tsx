import { FAQ, faqData } from './sections/6-faqSection/faq.tsx';
import { FormSection } from './sections/7-formSection/formSection.tsx';
import { Footer } from './components/footer/footer.tsx';
import { MainSection } from './sections/1-mainSection/mainSection.tsx';
import { AboutSection } from './sections/2-aboutSection/aboutSection.tsx';
import s from './App.module.scss';
import { CatalogSection } from './sections/3-catalogSection/catalogSection.tsx';
import { DocumentationSection } from './sections/8-documentationSection/documentationSection.tsx';
import { ProjectMapSection } from './sections/4-projectMapSection/projectMapSection.tsx';
import { Header } from './components/header/header.tsx';
import { MapSection } from './sections/5-mapSection/mapSection.tsx';

export function App() {
  return (
    <div className={s.content}>
      <Header className={s.header} />
      <MainSection />
      <AboutSection />
      <CatalogSection />
      <ProjectMapSection />
      <MapSection />
      <FAQ faqData={faqData} />
      <FormSection />
      <DocumentationSection />
      <Footer />
    </div>
  );
}
