// src/pages/settings.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';

export default function Settings() {
    const [redTeamCount, setRedTeamCount] = useState(5);
    const [blueTeamCount, setBlueTeamCount] = useState(5);
    const [diceCount, setDiceCount] = useState(0); // 다이스 기본값 0으로 변경
    const router = useRouter();

    const diceOptions = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' }
    ];

    const teamOptions = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' }
    ];

    const handleSubmit = () => {
        if (diceCount >= 0 && diceCount <= 2 && redTeamCount >= 1 && redTeamCount <= 5 && blueTeamCount >= 1 && blueTeamCount <= 5) {
            router.push(`/processing?dice=${diceCount}&redTeam=${redTeamCount}&blueTeam=${blueTeamCount}`);
        } else {
            toast.error('Please enter a valid number of dice and team members.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 pb-10 pt-40">
            <h1 className="text-4xl font-bold text-center mb-16">Setting</h1>
            <p className="text-center text-lg mb-5">
                Randomly pick champions for each team based on the number of team members and the number of dice.
            </p>
            <p className="text-center text-lg mb-5">
                Number of champions on each team = (number of team members + 1) * number of dice
            </p>
            <p className="text-center text-lg mb-20">
                0 ≤ number of dice ≤ 2, 1 ≤ number of team members ≤ 5
            </p>
            <div className="flex justify-center space-x-6, mb-10">
                <div className="w-1/6" style={{ margin: '0 10px' }}>
                    <label htmlFor="diceCount" className="block text-sm font-medium text-gray-700">
                        Dice
                    </label>
                    <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        options={diceOptions}
                        value={diceOptions.find(option => option.value === diceCount)}
                        onChange={(selectedOption: { value: number, label: string } | null) => {
                            if (selectedOption) {
                                setDiceCount(selectedOption.value);
                            }
                        }}
                    />
                </div>
                <div className="w-1/6" style={{ margin: '0 10px' }}>
                    <label htmlFor="redTeamCount" className="block text-sm font-medium text-gray-700" style={{ color: 'red' }}>
                        Red Team
                    </label>
                    <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        options={teamOptions}
                        value={teamOptions.find(option => option.value === redTeamCount)}
                        onChange={(selectedOption: { value: number, label: string } | null) => {
                            if (selectedOption) {
                                setRedTeamCount(selectedOption.value);
                            }
                        }}
                    />
                </div>
                <div className="w-1/6" style={{ margin: '0 10px' }}>
                    <label htmlFor="blueTeamCount" className="block text-sm font-medium text-gray-700" style={{ color: 'blue' }}>
                        Blue Team
                    </label>
                    <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        options={teamOptions}
                        value={teamOptions.find(option => option.value === blueTeamCount)}
                        onChange={(selectedOption: { value: number, label: string } | null) => {
                            if (selectedOption) {
                                setBlueTeamCount(selectedOption.value);
                            }
                        }}
                    />
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className="block mx-auto mt-20 w-60 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Start Random Pick
            </button>
        </div>
    );
}
