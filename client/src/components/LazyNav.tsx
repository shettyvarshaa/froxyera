import React from 'react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
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
      <Button onClick={getOnClickHandler(props.page)}>
        <Link to={"/portfolio"}>Nothing at all !</Link>
      </Button>
    </div>
  );
}

export default LazyNav;