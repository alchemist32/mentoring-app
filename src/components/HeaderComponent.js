import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header className="header">
      <section>
        <h1>
          <Link to="/">Movie App</Link>
        </h1>
      </section>
    </header>
  );
}

export default HeaderComponent;
