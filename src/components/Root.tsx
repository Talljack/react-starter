import { Link, Outlet } from '@tanstack/react-router';
export default function Root() {
  return (
    <>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
