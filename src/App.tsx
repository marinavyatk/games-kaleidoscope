import { FAQ, faqData } from './sections/faqSection/faq.tsx';
import { FormSection } from './sections/formSection/formSection.tsx';
import { Footer } from './components/footer/footer.tsx';
import { MainSection } from './sections/mainSection/mainSection.tsx';
import { AboutSection } from './sections/aboutSection/aboutSection.tsx';
import s from './App.module.scss';
import { CatalogSection } from './sections/catalogSection/catalogSection.tsx';
import { DocumentationSection } from './sections/documentationSection/documentationSection.tsx';

export function App() {
  return (
    <div className={s.content}>
      <MainSection />
      <AboutSection />
      <CatalogSection />
      <FAQ faqData={faqData} />
      <FormSection />
      <DocumentationSection />
      <Footer />
    </div>
  );
}
