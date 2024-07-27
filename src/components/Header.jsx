

function Header(){
  return(
    <header class="bg-gray-800 p-4">
      <nav class="flex justify-between">
        <div class="text-white font-extrabold text-2xl">Dota 2<span class="animate-pulse text-red-500">>></span></div>
        <ul class="flex space-x-4">
          <li><a href="/teams" class="text-white hover:text-gray-200">Teams</a></li>
          <li><a href="/tournaments" class="text-white hover:text-gray-200">Tournaments</a></li>
          <li><a href="/scores" class="text-white hover:text-gray-200">Scores</a></li>
          <li><a href="/news" class="text-white hover:text-gray-200">News</a></li>
          <li><a href="/auth/register" class="text-white bg-gray-300 rounded-sm p-1 text-sm   hover:text-gray-200">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

  export default Header;
  