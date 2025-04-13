import React from 'react';

const Links = ({route}) => {
  return (
    <div>
      <li className='hover:bg-yellow-800 rounded-2xl px-4 mr-10 '>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Links;