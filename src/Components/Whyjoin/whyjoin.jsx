import React from 'react';
import TemplatePage from '../TemplatePage/TemplatePage';
import redsymbol from '../../images/Common/redsymbol.png';

const Whyjoin = () => {
  return (
    <TemplatePage>
      <div className="page-container w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Three-column Layout with Vertical Centering */}
        <div className="whyjoin-container w-full grid grid-cols-3 gap-4 items-center text-[#EA4335] px-6 h-[70vh]">
          {/* Left Column - Why Join GDG */}
          <div className="whyjoin-text flex flex-col justify-center items-start">
            <div className="whyjoin-title text-2xl font-bold mb-6">Why Join GDG</div>
            <div className="whyjoin-content text-lg font-normal">
              GDG is a community of developers who are specifically interested in Google products and APIs. It is a community where developers can learn, share, and connect with each other. GDG provides opportunities to engage in technical discussions, attend events, and enhance development skills.
            </div>
          </div>

          {/* Middle Column - GDG Symbol (Vertically Centered) */}
          <div className="gdgsymbol-container flex justify-center items-center">
            <img src={redsymbol} alt="GDG Symbol" className="gdgsymbol-image " />
          </div>

          {/* Right Column - How to Join GDG */}
          <div className="howjoin-text flex flex-col justify-center items-end text-right">
            <div className="howjoin-title text-2xl font-bold mb-6">How to Join GDG</div>
            <div className="howjoin-content text-lg font-normal">
              Click on this WhatsApp link to join GDG as a member and start learning and sharing.
            </div>
          </div>
        </div>
      </div>
    </TemplatePage>
  );
};

export default Whyjoin;
