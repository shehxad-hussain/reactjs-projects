import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";



function App() {
  return (
    <div className="App">
      <Accordian />
      <ModalTest />
      <TabTest />
      <FeatureFlags />
      <GithubProfileFinder />
      <ImageSlider />
      <LightDarkMode />
      <LoadMoreData />
     
    </div>
  );
}

export default App;
