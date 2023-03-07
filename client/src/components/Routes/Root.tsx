import { Outlet, Link } from "react-router-dom"
// import Reports from "../../screens/Reports";
// import {Header} from "../Header/Header";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>BugTracker</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search reports"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`reports/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`reports/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {/* <Header title={"Test"} /> */}
        <Outlet />
      </div>
    </>
  );
}