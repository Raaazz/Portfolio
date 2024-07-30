import React from 'react';

const Navbar = () => {
  const handleScroll = (event) => {
    event.preventDefault(); 
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  const navItems = ['home', 'about', 'photos', 'contact'];

  return (
    <nav className='fixed top-0 left-0 h-[40px] lg:bg-[#000000] bg-[rgb(5,5,8)] w-full'>
      <ul className='flex lg:hidden items-center justify-between w-full text-white'>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={handleScroll}
              className='cursor-pointer hover:bg-white hover:text-black p-3 leading-7 uppercase'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
