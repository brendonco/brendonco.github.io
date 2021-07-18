import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const Canvas = ({
    completed: percent,
    bgColor,
    innerWidth,
    innerHeight,
    textColor,
    ...restProps
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const width = innerWidth;
        const height = innerHeight;

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
        ctx.strokeStyle = '#e0e0de';
        ctx.lineWidth = 20;
        ctx.stroke();
        ctx.closePath();

        const angle = (percent / 100) * 360;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 100, (-90 * Math.PI) / 180, ((angle - 90) * Math.PI) / 180);
        ctx.strokeStyle = bgColor;
        ctx.lineWidth = 20;
        ctx.stroke();
        ctx.closePath();

        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = '3em Helvetica bold';
        ctx.fillStyle = textColor;
        ctx.fillText(`${percent}%`, width / 2, height / 2);
    }, [percent, bgColor, innerWidth, innerHeight, textColor]);

    return <canvas ref={canvasRef} {...restProps} />;
};

Canvas.propTypes = {
    completed: PropTypes.number.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    innerWidth: PropTypes.string.isRequired,
    innerHeight: PropTypes.string.isRequired
};

export default Canvas;
