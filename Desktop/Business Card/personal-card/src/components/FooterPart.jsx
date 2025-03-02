import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { MdOutlineFileUpload, MdOutlineQrCode2 } from 'react-icons/md';
import { Link } from 'react-router-dom';
import QrCodeModal from './modal/QrCodeModal';

const FooterPart = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: "My Business Card",
            text: "Check out this website!",
            url: "https://personalcarddesign.netlify.app/", // Ei link ta replace kore diona
          })
          .then(() => console.log("Shared successfully"))
          .catch((error) => console.log("Error sharing:", error));
        } else {
          alert("Sharing not supported in this browser.");
        }
      };

      const handleDownloadVCF = () => {
        const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Rakib Hasan\nORG:Rakib Hasan\nTEL:97433517340\nEMAIL:nojir5456@gmail.com\nURL:https://personalcarddesign.netlify.app/\nADR:;;Dhaka, Bangladesh\nEND:VCARD`;
    
        const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Rakib_Hasan.vcf";
        document.body.appendChild(link);
        
        setTimeout(() => {
            link.click();
            document.body.removeChild(link);
        }, 100);
    };
    
    return (
        <div className='flex items-center my-8'>
            <div className='flex items-center gap-3 fixed bottom-4 left-4'>
                <div>
                    <MdOutlineQrCode2 onClick={() => {setIsEditModalOpen(true) }} className='text-6xl text-info-content p-4 rounded-full  border-2 sm:border-primary-content  border-primary-content bg-neutral' />
                    <QrCodeModal
                        isOpen={isEditModalOpen}
                        setIsEditModalOpen={setIsEditModalOpen}
                    />
                </div>

                <MdOutlineFileUpload onClick={handleShare} className='text-6xl border-2 sm:border-primary-content  border-primary-content text-info-content p-4 rounded-full bg-neutral' />

            </div>
           

            
                <button onClick={handleDownloadVCF} className='flex fixed pl-6 bottom-4 right-4 border-2 sm:border-primary-content border-primary-content text-md items-center text-info-content gap-5 bg-neutral rounded-full py-3 px-4'>
                    <span className="text-center text-sm leading-none">Add to <br /> Contact</span>
                    <FaPlus className='text-4xl text-primary-content p-2 rounded-full bg-info-content' />
                </button>
            

        </div>
    );
};

export default FooterPart;