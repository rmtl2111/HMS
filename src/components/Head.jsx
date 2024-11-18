import './Head.css';

const Head = () => {
  return (
    <div className="Head">
      <header className="header-container">
        <div className="header-row">
          <h1>Welcome to</h1>
          <h3 className="bits-text">BITS, Pilani</h3> {/* Aligned to the right */}
        </div>
        <p className="tagline">Hostel Management System</p>
        <h3 className="subtext">We build, We Maintain!</h3>
      </header>
    </div>
  );
};

export default Head;
