import React, { useEffect, useRef, useState } from 'react';

const Canvas = ({ completed: percent, bgColor, innerWidth, innerHeight,  ...restProps }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const width = innerWidth || window.innerWidth;
      const height = innerHeight || window.innerHeight;

      canvas.width = width;
      canvas.height = height
      const ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
      ctx.strokeStyle = '#e0e0de';
      ctx.lineWidth = 20;
      ctx.stroke();
      ctx.closePath();
  
      const angle = (percent / 100) * 360;
      ctx.beginPath();
      ctx.arc(
          width / 2,
          height / 2,
          100,
          (-90 * Math.PI) / 180,
          ((angle - 90) * Math.PI) / 180
      );
      ctx.strokeStyle = bgColor;
      ctx.lineWidth = 20;
      ctx.stroke();
      ctx.closePath();
  
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.font = '3em Helvetica bold';
      ctx.fillStyle = bgColor;
      ctx.fillText(`${percent}%`, width / 2, height / 2);
    });

    return <canvas ref={canvasRef} {...restProps} />;
};

export default Canvas;
