import "./Header.css";

export const Header = ({ children }) => {
  return (
    <header className="header header__wrapper">
      <div className="container">
        <div className="text">
          <p className="text__title">Harry Potter</p>
          <p className="text__subtitle">
            View all characters from the Harry Potter universe
          </p>
        </div>
        <div className="header__search">{children}</div>
      </div>
    </header>
  );
};
