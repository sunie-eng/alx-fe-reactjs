// src/ColorPicker.jsx
import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        style={{ width: '100px', height: '100px', border: 'none', cursor: 'pointer' }}
      />
      <p>Selected Color: <strong>{color}</strong></p>
      <div
        style={{
          margin: '1rem auto',
          width: '200px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}

export default ColorPicker;
