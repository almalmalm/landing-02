import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/modalSlice';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-5 py-4 border-[#e0e0e0] border-y">
      <div
        className="flex flex-col gap-[0.344rem] justify-center"
        onClick={() => dispatch(openModal(true))}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-3.5 h-0.5 bg-black"></div>
        <div className="w-1.5 h-0.5 bg-black"></div>
      </div>
      <div className="font-heading">GlobalTalk</div>
      <div className="font-bold">lkalinin</div>
    </div>
  );
};

export default Header;
