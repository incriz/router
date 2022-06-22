import {Link} from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
      This page doesn't exits. Go
      <Link style={{ color: "red" }} to="/">
        home
      </Link>
    </div>
  );
};

export { Notfoundpage };
