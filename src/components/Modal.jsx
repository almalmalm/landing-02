import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen absolute bg-[#F4F4F2]">
      <div className="flex justify-between px-5 py-4 border-[#e0e0e0] border-y">
        <div
          className="flex items-center justify-between"
          onClick={() => dispatch(closeModal(false))}
        >
          <div className="w-[1.125rem] h-0.5 bg-black rotate-45 ">
            <div className="w-[1.125rem] h-0.5 bg-black rotate-90"></div>
          </div>
        </div>
        <div className="font-heading pl-0.5 ">GlobalTalk</div>
        <div className="font-bold">lkalinin</div>
      </div>
      <div className="flex justify-center items-center h-[85%]">
        <div className="flex flex-col gap-8 items-center px-5 py-4 text-[#757575] font-semibold">
          <div className="text-[#2B788B]">Main</div>
          <div>Textbook</div>
          <div>Statistics</div>
          <div>Sprint</div>
          <div>Audio-call</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
