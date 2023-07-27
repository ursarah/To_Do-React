import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const closeModal = (): void => {
    const modal = document.querySelector('#modal');
    modal!.classList.add('hide');
  };
  return (
    <div id="modal" className="hide">
      {/* fade  */}
      <div className="w-full h-full absolute bg-white opacity-25" onClick={closeModal}></div>
      <div className="flex flex-col justify-center text-center absolute top-[10%] left-0 right-0 mx-auto my-0 w-[500px] h-[400px] z-1 bg-white">
        <h2 className="mb-[1em]">Texto Modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
