const Navbar = () => {
  return (
    <nav className="sticky top-0  text-white flex items-center justify-between px-6  shadow-lg bg-black">
      <h1>CareerScout</h1>
      <ul className="flex items-center gap-x-9   py-3 justify-center">
        <li className="min-h-full">Login</li>
        <li className="min-h-full">Signup</li>
        <li className="min-h-full">Dashboard</li>
      </ul>
    </nav>
  );
};

export default Navbar;
