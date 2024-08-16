import React from 'react';
import iconMap from '../helpers/iconMap';

interface IconDisplayProps {
    iconName: string;
    size?: number;
    color?: string;
    className?: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ iconName, className }) => {
    const IconComponent = iconMap[iconName];

    if (!IconComponent) {
        return <div>Icon not found</div>;
    }

    return <IconComponent className={className} />;
};

export default IconDisplay;