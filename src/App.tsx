import { Theme } from "./styles/theme";
import { Header } from "./components/Header";
import { TextSection, Wrapper } from "./AppStyle";
import { Victor } from "./components/Victor";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import Contact from "./components/Contact";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <Theme>
      <Header />
      <Wrapper>
        <Victor />
        <TextSection>
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </TextSection>
      </Wrapper>
      <Footer />
    </Theme>
  );
};

export default App;
