import { Theme } from "./styles/theme";
import { Header } from "./components/Header";
import { Wrapper } from "./AppStyle";

const App = () => {
  return (
    <Theme>
      <Header />
      <Wrapper></Wrapper>
    </Theme>
  );
};

export default App;
