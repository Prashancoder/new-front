import React, { useState } from 'react';

const nameNumerologyMap = {
  1: ['A', 'I', 'J', 'Q', 'Y'],
  2: ['B', 'K', 'R'],
  3: ['C', 'G', 'L', 'S'],
  4: ['D', 'M', 'T'],
  5: ['E', 'H', 'N', 'X'],
  6: ['U', 'V', 'W'],
  7: ['O', 'Z'],
  8: ['F', 'P'],
};

const planetMap = {
  1: 'Sun',
  2: 'Moon',
  3: 'Jupiter',
  4: 'Rahu',
  5: 'Mercury',
  6: 'Venus',
  7: 'Ketu',
  8: 'Saturn',
  9: 'Mars',
};

const reduceToSingleDigit = (num) => {
  while (num > 9) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return num;
};

const calculatePhoneNumberValue = (phone) => {
  const digits = phone.replace(/\D/g, '');
  const total = digits.split('').reduce((sum, d) => sum + parseInt(d), 0);
  const reduced = reduceToSingleDigit(total);
  return {
    total,
    reduced,
    planet: planetMap[reduced] || 'Unknown',
  };
};

const calculateNameNumber = (name) => {
  const upperName = name.toUpperCase().replace(/[^A-Z\s]/g, '');
  const parts = upperName.split(' ').filter(Boolean);
  let total = 0;

  for (let part of parts) {
    let partTotal = 0;
    for (let char of part) {
      for (let [num, letters] of Object.entries(nameNumerologyMap)) {
        if (letters.includes(char)) {
          partTotal += parseInt(num);
          break;
        }
      }
    }
    total += partTotal;
  }

  const reduced = reduceToSingleDigit(total);
  return {
    total,
    reduced,
    planet: planetMap[reduced] || 'Unknown',
  };
};

const loshuGridMap = {
  1: [2, 1],
  2: [0, 2],
  3: [1, 0],
  4: [0, 0],
  5: [1, 1],
  6: [2, 2],
  7: [1, 2],
  8: [2, 0],
  9: [0, 1],
};

const createEmptyGrid = () => Array(3).fill().map(() => Array(3).fill(''));

const NumerologyCalculator = () => {
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('Male');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [grid, setGrid] = useState(createEmptyGrid());
  const [results, setResults] = useState({
    driver: '',
    conductor: '',
    kua: '',
    nameNumber: null,
    phoneNumberValue: null,
  });

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!dob) return;

    const [yyyy, mm, dd] = dob.split('-');
    const day = parseInt(dd);
    const driver = reduceToSingleDigit(day);
    const totalDOB = dd + mm + yyyy;
    const conductor = reduceToSingleDigit(
      totalDOB.split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    );

    const yearSum = reduceToSingleDigit(
      yyyy.split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    );
    let kua;
    if (gender === 'Male') kua = reduceToSingleDigit(11 - yearSum);
    else kua = reduceToSingleDigit(yearSum + 4);

    const digitCounts = {};
    totalDOB.split('').forEach(d => {
      digitCounts[d] = (digitCounts[d] || '') + d;
    });
    digitCounts[driver] = (digitCounts[driver] || '') + driver;
    digitCounts[conductor] = (digitCounts[conductor] || '') + conductor;
    digitCounts[kua] = (digitCounts[kua] || '') + kua;

    const newGrid = createEmptyGrid();
    Object.entries(digitCounts).forEach(([digit, str]) => {
      const num = parseInt(digit);
      if (loshuGridMap[num]) {
        const [row, col] = loshuGridMap[num];
        newGrid[row][col] += str;
      }
    });

    const nameNumResult = calculateNameNumber(fullName);
    const phoneResult = calculatePhoneNumberValue(phoneNumber);

    setGrid(newGrid);
    setResults({
      driver,
      conductor,
      kua,
      nameNumber: nameNumResult,
      phoneNumberValue: phoneResult,
    });
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>🔮 Numerology Calculator 🔮</h2>
        <form onSubmit={handleCalculate} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
          <input
            type="date"
            value={dob}
            onChange={e => setDob(e.target.value)}
            style={styles.input}
          />
          <select value={gender} onChange={e => setGender(e.target.value)} style={styles.input}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit" style={styles.button}>Calculate</button>
        </form>

        <>
          <div style={styles.grid}>
            {grid.map((row, rowIndex) =>
              row.map((val, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  style={{ ...styles.cell, animationDelay: `${(rowIndex * 3 + colIndex) * 0.1}s` }}
                >
                  {val}
                </div>
              ))
            )}
          </div>

          <div style={styles.resultGrid}>
            <div style={styles.resultBox}>
              <strong>Driver</strong>
              <div>{results.driver}</div>
            </div>
            <div style={styles.resultBox}>
              <strong>Conductor</strong>
              <div>{results.conductor}</div>
            </div>
            <div style={styles.resultBox}>
              <strong>KUA</strong>
              <div>{results.kua}</div>
            </div>
            <div style={styles.resultBox}>
              <strong>Name</strong>
              <div>
                {results.nameNumber?.reduced}<br />{results.nameNumber?.planet}
              </div>
            </div>
            <div style={styles.resultBox}>
              <strong>Phone Number</strong>
              <div>{results.phoneNumberValue?.reduced}</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/gplay.png")',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  container: {
    maxWidth: 700,
    width: '100%',
    margin: '30px auto',
    padding: '30px',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/gplay.png")',
    backgroundColor: '#e0eafc',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: 20,
    color: '#333',
  },
  form: {
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  input: {
    padding: '12px 15px',
    fontSize: 16,
    borderRadius: '6px',
    border: '1px solid #ccc',
    transition: 'border 0.3s ease',
  },
  button: {
    padding: '12px 20px',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    color: 'white',
    fontSize: 16,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: 20,
  },
  cell: {
    border: '2px solid #888',
    padding: 25,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    animation: 'fadeIn 0.5s ease forwards',
    opacity: 0,
  },
  resultGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginTop: 30,
  },
  resultBox: {
    flex: 1,
    textAlign: 'center',
    padding: '15px',
    border: '2px solid #aaa',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 5px 10px rgba(0,0,0,0.05)',
    fontSize: '18px',
    color: '#333',
  },
};

// Inject fadeIn animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

export default NumerologyCalculator;
