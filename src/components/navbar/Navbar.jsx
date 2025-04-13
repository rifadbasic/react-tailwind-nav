import React from 'react';
import { Menu, X } from 'lucide-react';

const navigationData = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]
;

const Navbar = () => {

  const links = navigationData.map((item) => (<li key={item.id}><a href={item.path}>{item.name}</a></li>));

  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex justify-between mx-4 mt-3'>
    <div className='flex gap-4'>
      <span onClick={() => setOpen(!open)}>
      {
        open ? <X className='md:hidden' /> : <Menu className='md:hidden'></Menu>
      }
      
      </span>
      <h3>Logo</h3>
    </div>
    <div>
      <ul className='flex gap-4'>
        {
          links
        }
      </ul>
    </div>

    <div>
      <button className='btn'>Get Started</button>
    </div>
      
    </div>
  );
};

export default Navbar;