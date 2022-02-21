const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ],
  // animate: true
};

// utility functions found in canvas-sketch-util
// const degToRad = (degrees) => { return degrees / 180 * Math.PI };
// const randomRange = (min, max) => { return Math.random() * (max - min) + min };

const sketch = ({ context, width, height }) => {

  // drawLines() {

  // };

  // drawArcs() {

  // };

  return ({ context, width, height }) => {
    context.fillStyle = 'salmon';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = width * 0.5;
    
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    let randomSliceNumber = Math.floor((Math.random() * 200));
    const num = randomSliceNumber;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

        // straight lines
        context.save();
        context.translate(x, y);
        context.rotate(-angle);
        context.scale(random.range(0.1, 1), random.range(0.05, 4));
        
        context.beginPath();
        context.rect(w * 0.5, random.range(0, -h * 0.5), w, h);
        context.fill();
        context.restore();

      // circular lines
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(0.5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.1, 1.3), slice * random.range(0, -8), slice * random.range(0, 5));
      context.stroke();
      context.restore();

      // circular lines
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(0.5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.1, 1.3), slice * random.range(0, -8), slice * random.range(0, 5));
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
