import React from 'react';

const AboutBanner = () => {
    return (
        <div className="bg-gradient-to-r from-[#d0f8fc6c] to-[#fcebc4] py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-4 py-16 max-w-6xl mx-auto">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">We’re changing the way<br /> people access and afford<br /> healthcare</h1>
                    <p>We connect patients and their medical providers, to empower them to take back control of healthcare. Our simple platform puts patients at the center of the healthcare experience, with the tools and resources they need to access care at a price they can afford.</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div>
                        <img src="https://i.ibb.co/PWqT6z7/191-health-flatline.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;
