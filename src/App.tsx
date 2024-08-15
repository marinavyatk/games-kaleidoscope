import { FAQ, faqData } from './components/faq/faq.tsx';
import { FormSection } from './sections/formSection/formSection.tsx';
import { Footer } from './components/footer/footer.tsx';

export function App() {
  return (
    <div>
      <FAQ faqData={faqData} />
      <FormSection />
      <Footer />
    </div>
  );
}
