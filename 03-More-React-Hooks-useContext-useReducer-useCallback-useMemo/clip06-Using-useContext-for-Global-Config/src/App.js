import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

//This is the object to create context in all app
export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
};

const App = ({ pageName }) => {
  return ({/*Here the configContex wrap the entire app and set the values that the context is going to share with childs*/}
      <ConfigContext.Provider value={configValue} >
        <div>{pageToShow(pageName)}</div>
      </ConfigContext.Provider>
  )
};

export default App;
