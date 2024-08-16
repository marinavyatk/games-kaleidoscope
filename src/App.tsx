import { FAQ, faqData } from './components/faq/faq.tsx';
import { FormSection } from './sections/formSection/formSection.tsx';
import { Footer } from './components/footer/footer.tsx';
import { MainSection } from './sections/mainSection/mainSection.tsx';
import { AboutSection } from './sections/aboutSection/aboutSection.tsx';
import s from './App.module.scss';
import { ProductCard } from './components/productCard/productCard.tsx';

export function App() {
  return (
    <div className={s.content}>
      <MainSection />
      <AboutSection />
      <FAQ faqData={faqData} />
      <FormSection />
      <Footer />
      <ProductCard />
    </div>
  );
}
