import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center md:w-3/4 w-full text-white p-4'>
      {/* <div className="logo font-bold">VaultMaster</div> */}
      <div> <span className='font-bold text-xl'><span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 font-bold text-xl'>&lt;</span>Vault</span>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 font-bold text-xl">
          Master/&gt;
        </span></div>






      <ul>
        <li className='gap-5 hidden md:flex'>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="https://github.com/theblag" target="_blank">
          <lord-icon
            src="https://cdn.lordicon.com/ioihllwu.json"
            trigger="hover"
            colors="primary:#3a3347,secondary:#ebe6ef"
            alt="Github Logo">
          </lord-icon></a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar
