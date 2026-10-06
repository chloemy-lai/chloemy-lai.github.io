import { useEffect, useRef, useState } from 'react';
import './WelcomeScreen.css';

const LOGO_SRC = import.meta.env.BASE_URL + 'img/icon/ACEUTSC.png';
const TOTAL_MS = 4000;
const EXPAND_AT_MS = 1000;
const EXIT_AT_MS = 3000; 

export default function WelcomeScreen({ onComplete }) {
  const [phase, setPhase] = useState('hold'); // 'hold' | 'expand' | 'exit'
  const doneRef = useRef(false);
  const timersRef = useRef([]);
  const onCompleteRef = useRef(onComplete);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    clearTimers();
    onCompleteRef.current();
  };

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    timersRef.current = [
      setTimeout(() => setPhase('expand'), EXPAND_AT_MS),
      setTimeout(() => setPhase('exit'), EXIT_AT_MS),
      setTimeout(() => finish(), TOTAL_MS),
    ];
    return clearTimers;
  }, []);

  const handleSkip = () => {
    if (doneRef.current) return;
    clearTimers();
    setPhase('expand');
    // Match expand duration (~2.2s) then exit fade (~1s)
    timersRef.current = [
      setTimeout(() => setPhase('exit'), 2200),
      setTimeout(() => finish(), 3200),
    ];
  };

  const phaseClass =
    phase === 'expand'
      ? 'expand'
      : phase === 'exit'
        ? 'exit'
        : 'hold';

  return (
    <div
      className="screen"
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleSkip();
      }}
      aria-label="Welcome screen. Click to continue."
    >
      <img
        className={`logo ${phaseClass}`}
        src={LOGO_SRC}
        alt="ACE UTSC"
      />
    </div>
  );
}