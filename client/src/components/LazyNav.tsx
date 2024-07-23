import React from 'react';

function LazyNav(props: { page: string }) {
  const getOnClickHandler = (page: string) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      if (page === 'home') {
        e.currentTarget.style.backgroundColor = 'green';
      } else if (page === 'portfolio') {
        e.currentTarget.style.backgroundColor = 'red';
      }
      else if (page === 'contact') {
        e.currentTarget.style.backgroundColor = 'pink';
      }
    };
  };

  return (
    <div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={getOnClickHandler(props.page)}>Nothing at all !</button>
    </div>
  );
}

export default LazyNav;