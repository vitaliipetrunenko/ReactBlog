import "./App.css";
import ContainerHeader from "./components/header/ContainerHeader";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ContainerNewsFeed from "./components/NewsFeed/ContainerNewsFeed.jsx";
import ContainerCommentPage from "./components/CommentPage/ContainerCommentPage";
import ContainerEditPost from "./components/EditPost/ContainerEditPost";

function App(data) {
  return (
    <BrowserRouter>
      <div className="App">
        <ContainerHeader />
        <Sidebar />
        <div className="ContentBlock">
          <Route exact path="/" render={(props) => <Redirect to="/news" />} />
          <Route
            exact
            path="/reactblog"
            render={(props) => <Redirect to="/news" />}
          />
          <Route
            exact
            path="/news"
            render={(props) => (
              <ContainerNewsFeed postDB={data.state.postData.postDB} />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => <ContainerNewsFeed />}
          />
          <Route
            path="/post/:Id?"
            render={(props) => <ContainerCommentPage />}
          />
          <Route path="/edit/:Id?" render={(props) => <ContainerEditPost />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
