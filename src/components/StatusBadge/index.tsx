import React from 'react';
import { Character } from '../../features/characters/characterSlice';
import './style.scss';

interface StatusBadgeProps {
    status: Character['status'];
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    let backColor;

    switch (status) {
        case 'Alive':
            backColor = '#39ff14';
            break;
        case 'Dead':
            backColor = 'red';
            break;
        default:
            backColor = 'grey';
            break;
    }

    const styleDiv = {
        backgroundColor: backColor,
    };

    return (
        <div className="circle" style={styleDiv}></div>
    );
};

export default StatusBadge;