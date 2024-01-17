import { FaPlus } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { MdExposureNeg1, MdExposureNeg2 } from 'react-icons/md';

const Cards = () => {
  return (
<div class="bg-transparent min-h-70 flex justify-center items-center ">
        <div class="space-y-16">
            <div class="w-96 h-56 m-auto bg-[#0f94c4] rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
                
                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                Balance
                            </p>
                        </div>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            10000000
                        </p>
                        <p class="font-medium tracking-more-wider">
                        Flan Folani
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    Valid
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    
                                </p>
                            </div>
    
                            <div class="">
                                <p class="font-light text-xs">
                                    
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        
        </div>
    </div>
  );
};

export default Cards;
