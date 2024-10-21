const Navbar = () => {
  return (
    <div className="fixed top-0 min-h-[50px] z-20 min-w-full shadow-lg bg-black">
      <nav className="max-w-[1440px] bg-inherit  w-full mx-auto text-white flex items-center justify-between py-3">
        <h1>CareerScout</h1>
        <ul className="flex items-center gap-x-9">
          <li>Login</li>
          <li>Signup</li>
          <li>Dashboard</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
