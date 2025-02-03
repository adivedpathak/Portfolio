export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
        <nav className="flex gap-2 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur w-max">
          <a href="#" className="nav-item text-sm sm:text-base px-3 sm:px-4 py-2">Home</a>
          <a href="#" className="nav-item text-sm sm:text-base px-3 sm:px-4 py-2">Projects</a>
          <a href="#" className="nav-item text-sm sm:text-base px-3 sm:px-4 py-2">About</a>
          <a href="#" className="nav-item text-sm sm:text-base px-3 sm:px-4 py-2 bg-white text-gray-900 hover:bg-white/90">Content</a>
        </nav>
      </div>  
  );
};