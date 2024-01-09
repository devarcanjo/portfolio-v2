import { Theme } from "./styles/theme";
import { Header } from "./components/Header";
import { Wrapper } from "./AppStyle";
import { Victor } from "./components/Victor";

const App = () => {
  return (
    <Theme>
      <Header />
      <Wrapper>
      <Victor />
      </Wrapper>
    </Theme>
  );
};

export default App;
