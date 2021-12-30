import { lazy } from "react";
import { routes } from "./routes";
import usePageTracking from "./usePageTracking";
import Helmet from "react-helmet";
import CodeLinks from "./CodeLinks";
import {Link} from 'react-router-dom';
import BottomNav from "./BottomNav";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
const MainNav = lazy(() => import("./MainNav"));

function App(props) {
  usePageTracking();
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>React JS Foundations by Chris Minnick</title>
        <meta
          name="description"
          content="Code examples, tutorials, updates, downloads, and blog for React JS Foundations by Chris Minnick. Get up to speed on building applications with ReactJS."
        />
        <meta
          property="og:url"
          content={`https://www.reactjsfoundations.com${location.pathname}${location.search}`}
        />
        <meta
          property="og:image"
          content="https://www.reactjsfoundations.com/images/cover.jpg"
        />
        <meta
          property="og:description"
          content="Code examples, tutorials, updates, downloads, and blog for React JS Foundations by Chris Minnick. Get up to speed on building applications with ReactJS."
        />
      </Helmet>
      <div class="container">
        <Suspense fallback={<div>Loading...</div>}>
          <div id="column2">
            <header style={{display: "flex", justifyContent:"space-between" }}>
              <div style={{justifyContent:"flex-start"}}>
              <a
                href="/"
                style={{
                  fontSize: "1.75em",
                  fontWeight: "800",
                  display: "block",
                  color: "#000",
                }}
              >
                React JS Foundations
              </a>
              <p>by Chris Minnick</p>
              </div>
              <div style={{justifyContent:"flex-end"}}><Link to="/wheretobuy">Get the book</Link></div>
            </header>
            <main>
              {routes}
              <CodeLinks />
              <BottomNav />
            </main>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <MainNav />
          </Suspense>
        </Suspense>
      </div>
    </>
  );
}

export default App;