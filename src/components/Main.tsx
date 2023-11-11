import About from './About';
import ExpandPortfolio from './ExpandPortfolio';
import Portfolio from './Portfolio';

export default function Main() {
  return (
    <section className="bg-primary rounded-[40px] relative -top-4">
      <About />
      <Portfolio />
      {/* <ExpandPortfolio /> */}
    </section>
  );
}
