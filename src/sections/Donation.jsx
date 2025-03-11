import React, { useState } from 'react';
import { FaRegHeart, FaRegCheckCircle } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { accessBankLogo } from '../assets/images';

const Donation = () => {
  const accountNumber = "1451848188";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber); // Copy number to clipboard
    setCopied(true);

    // Revert back to copy icon after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='my-20 flex flex-col items-center text-center px-5'>

      {/* Heart Icon */}
      <div className='text-[60px] md:text-[65px] lg:text-[70px] text-amber-900 mb-3'>
        <FaRegHeart />
      </div>

      {/* Title & Description */}
      <h2 className='text-amber-900 mb-3 font-bold text-[23px] md:text-[27px] uppercase lg:text-[30px]'>
        Make a Difference Today
      </h2>
      <p className='mb-24 text-[19px] md:text-[21px] text-gray-900 lg:text-[23px]'>
        Your donation helps us provide education, care, and support to children in need. <br className='hidden md:inline' />
        Every contribution matters.
      </p>

      {/* Bank Details Header */}
      <h4 className='font-bold text-[24px] md:text-[27px] text-gray-900 mb-1 lg:text-[30px]'>
        Bank Account Details
      </h4>
      <p className='text-[19px] text-gray-900 lg:text-[23px] md:text-[21px]'>
        Make your donation through the bank account details below
      </p>

      {/* Bank Account Card */}
      <div className='bg-gray-50 flex justify-between mt-14 w-full mx-2 gap-20 px-5 items-center py-9 rounded-lg shadow-lg max-w-[400px] hover:shadow-xl md:text-[1.1em]'>

        {/* Bank Info */}
        <div className='text-left'>
          <h5 className='font-semibold text-[18px] mb-2'>Access Bank</h5>
          <p className='mb-1 text-gray-800'>Account Name:</p>
          <p className='text-gray-800'>Account Number:</p>
        </div>

        {/* Account Number & Copy Button */}
        <div className='text-right flex flex-col items-end'>
          <img src={accessBankLogo} alt="Access Bank Logo" className='w-[120px] mb-2' />

          <p className='font-semibold mb-1'>Jasmine Alofoje</p>
          
          <div className='font-semibold flex items-center gap-2'>
            <p>{accountNumber}</p>
            <button onClick={handleCopy} className='hover:scale-110 transition-transform'>
              {copied ? <FaRegCheckCircle className="text-green-600" /> : <IoCopyOutline />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donation;
