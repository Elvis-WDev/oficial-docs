import React from 'react';

type RawHtmlProps = {
    htmlContent: string;
};

export const RawHtmlComponent: React.FC<RawHtmlProps> = ({ htmlContent }) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
};
