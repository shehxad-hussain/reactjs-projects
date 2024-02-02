import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tact-toe";
import TreeView from "./components/tree-view";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";



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
      <QRCodeGenerator />
      <RandomColor />
      <ScrollIndicator />
      <ScrollToTopAndBottom />
      <SearchAutocomplete />
      <StarRating />
      <TicTacToe />
      <TreeView />
      <UseFetchHookTest />
      <UseOnclickOutsideTest />
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
