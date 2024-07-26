import React from 'react';
import { Button } from "@/components/ui/button"
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
      <Button onClick={getOnClickHandler(props.page)}>Nothing at all !</Button>
    </div>
  );
}

export default LazyNav;