import React from 'react';

// import { Container } from './styles';

const HeaderCardapio: React.FC = () => {
  return (
    <div className='w-full bg-amber-200 h-[200px] mt-3 rounded-3xl relative'>
      <button className='absolute bottom-4 right-2 bg-white px-4 py-2'>Informações</button>
    </div>
  );
}

export default HeaderCardapio;