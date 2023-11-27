// TestResultsPage.js

import React from 'react';

const testData = [
    {
        id: 1,
        title: 'Blood Test',
        description: 'A comprehensive blood test to assess your health.',
        image: 'blood_test_image.jpg',
        dates: ['2023-11-21', '2023-11-22', '2023-11-23'],
        slots: [
            { time: '09:00 AM', available: true },
            { time: '02:00 PM', available: false },
            // Add more slots as needed
        ],
    },
    {
        id: 2,
        title: 'X-Ray',
        description: 'An X-Ray examination to detect any abnormalities.',
        image: 'xray_image.jpg',
        dates: ['2023-11-22', '2023-11-23', '2023-11-24'],
        slots: [
            { time: '10:00 AM', available: true },
            { time: '03:00 PM', available: true },
            // Add more slots as needed
        ],
    },
    // Add more tests as needed
];

const TestResult = () => {
    // Filter tests for future dates
    const today = new Date().toISOString().split('T')[0];
    const futureTests = testData.filter(test => test.dates[0] >= today);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Available Tests</h2>

                {futureTests.map(test => (
                    <div key={test.id} className="mb-6">
                        <img
                            src={test.image}
                            alt={test.title}
                            className="w-full h-40 object-cover mb-4 rounded"
                        />
                        <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
                        <p className="text-gray-600 mb-2">{test.description}</p>

                        <p className="mb-2">Available Dates:</p>
                        <ul className="list-disc ml-6 mb-4">
                            {test.dates.map(date => (
                                <li key={date}>{date}</li>
                            ))}
                        </ul>

                        <p className="mb-2">Available Slots:</p>
                        <ul className="list-disc ml-6">
                            {test.slots}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestResult;
