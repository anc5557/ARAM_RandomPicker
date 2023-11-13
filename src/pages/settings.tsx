// path : src/pages/settings.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Settings() {
    const [redTeamCount, setRedTeamCount] = useState(5);
    const [blueTeamCount, setBlueTeamCount] = useState(5);
    const [diceCount, setDiceCount] = useState(2);
    const router = useRouter();

    const handleSubmit = () => {
        if (diceCount >= 0 && diceCount <= 2 && redTeamCount >= 1 && redTeamCount <= 5 && blueTeamCount >= 1 && blueTeamCount <= 5) {
            router.push(`/processing?dice=${diceCount}&redTeam=${redTeamCount}&blueTeam=${blueTeamCount}`);
        } else {
            toast.success('Please enter a valid number of dice and team members.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 pb-10 pt-40"> 
            <h1 className="text-4xl font-bold text-center mb-16">Setting</h1>
            <p className="text-center text-lg  mb-5">
                Randomly pick champions for each team based on the number of team members and the number of dice.
            </p>
            <p className="text-center text-lg  mb-20">
                Number of champions on each team = (number of team members + 1) * number of dice
            </p>
            <div className="flex justify-center space-x-6">
                {['dice', 'redTeam', 'blueTeam'].map((team, index) => (
                    <div className="w-1/5" key={index}>
                        <label htmlFor={`${team}Count`} className="block text-sm font-medium text-gray-700">
                            {team === 'dice' ? 'Number of dice' : team === 'redTeam' ? <span style={{ color: 'red' }}>Red Team</span> : <span style={{ color: 'blue' }}>Blue Team</span>}
                        </label>
                        <input
                            type="number"
                            id={`${team}Count`}
                            className={`mt-1 form-input block w-full px-2 py-1 border ${team === 'redTeam' ? 'border-red-500 focus:ring-red-500 focus:border-red-500' :
                                    team === 'blueTeam' ? 'border-blue-500 focus:ring-blue-500 focus:border-blue-500' :
                                        'border-black focus:ring-indigo-500 focus:border-indigo-500' 
                                }`}
                            value={team === 'dice' ? diceCount : team === 'redTeam' ? redTeamCount : blueTeamCount}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                if (team === 'dice') setDiceCount(value);
                                else if (team === 'redTeam') setRedTeamCount(value);
                                else setBlueTeamCount(value);
                            }}
                            min={team === 'dice' ? 0 : 1}
                            max={team === 'dice' ? 2 : 5}
                        />
                    </div>
                ))}
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
