import { createSignal } from 'solid-js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen());

  return (
    <header class="bg-gray-800 p-4">
      <nav class="flex justify-between items-center">
        <div class="text-white font-extrabold text-2xl">
          Dota 2<span class="animate-pulse text-red-500">&gt;&gt;</span>
        </div>
        
        <div class="flex items-center">
          <a href="/auth/register" class="text-white lg:hidden bg-gray-700 hover:bg-gray-600 rounded px-3 py-1 text-sm mr-4">Register</a>
          
          
          <button 
            class="md:inline-block lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

       
        <ul class="hidden lg:flex space-x-4 items-center">
          <li><a href="/teams" class="text-white hover:text-gray-200">Teams</a></li>
          <li><a href="/tournaments" class="text-white hover:text-gray-200">Tournaments</a></li>
          <li><a href="/scores" class="text-white hover:text-gray-200">Scores</a></li>
          <li><a href="/news" class="text-white hover:text-gray-200">News</a></li>
          <li><a href="/auth/register" class="text-white bg-gray-700 hover:bg-gray-600 rounded px-3 py-1 text-sm">Register</a></li>
        </ul>
      </nav>

      {/* Mobile and tablet menu */}
      <div class={`lg:hidden ${isMenuOpen() ? 'block' : 'hidden'}`}>
        <ul class="mt-4 space-y-2 flex flex-col text-center">
          <li><a href="/teams" class="block hover:bg-gray-900 p-3 hover:rounded border-transparent border-2 hover:border-gray-700 text-white hover:text-gray-200">Teams</a></li>
          <li><a href="/tournaments" class="block hover:bg-gray-900 p-3 hover:rounded border-transparent border-2 hover:border-gray-700 text-white hover:text-gray-200">Tournaments</a></li>
          <li><a href="/scores" class="block hover:bg-gray-900 p-3 hover:rounded border-transparent border-2 hover:border-gray-700 text-white hover:text-gray-200">Scores</a></li>
          <li><a href="/news" class="block hover:bg-gray-900 p-3 hover:rounded border-transparent border-2 hover:border-gray-700 text-white hover:text-gray-200">News</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;