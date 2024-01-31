import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import GithubProfileFinder from "./components/github-profile-finder";



function App() {
  return (
    <div className="App">
      <Accordian />
      <ModalTest />
      <TabTest />
      <FeatureFlags />
      <GithubProfileFinder />
     
    </div>
  );
}

export default App;
