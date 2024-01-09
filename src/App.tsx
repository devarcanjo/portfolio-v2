import { Theme } from "./styles/theme";
import { Header } from "./components/Header";
import { TextSection, Wrapper } from "./AppStyle";
import { Victor } from "./components/Victor";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";

const App = () => {
  return (
    <Theme>
      <Header />
      <Wrapper>
        S
        <Victor />
        <TextSection>
          <About />
          <Technologies />
        </TextSection>
      </Wrapper>
    </Theme>
  );
};

export default App;
