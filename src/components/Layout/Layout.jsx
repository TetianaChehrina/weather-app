import css from "./Layout.module.css";
export const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <footer className={css.footer}>© 2025 Weather App</footer>
  </>
);
export default Layout;
