import Footer from "../Footer/Footer";
import css from "./Layout.module.css";
export const Layout = ({ children }) => (
  <>
    <div className={css.layout}>
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  </>
);
export default Layout;
