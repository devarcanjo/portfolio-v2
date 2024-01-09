import { Theme } from "./styles/theme";
import { Header } from "./components/Header";
import { TextSection, Wrapper } from "./AppStyle";
import { Victor } from "./components/Victor";
import { About } from "./components/About";

const App = () => {
  return (
    <Theme>
      <Header />
      <Wrapper>
        <Victor />
        <TextSection>
          <About />
        </TextSection>
      </Wrapper>
    </Theme>
  );
};

export default App;
