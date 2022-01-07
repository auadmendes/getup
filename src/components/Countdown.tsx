import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.scss';



export function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return (
    <div>
      <div className={styles.containerCountdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countDownButton}
        >
          Done
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type='button'
              className={styles.leaveCountDownButton}
              onClick={resetCountdown}
            >
              Leave it
            </button>
          ) : (
            <button
              type='button'
              className={styles.countDownButton}
              onClick={startCountDown}
            >
              Start it
            </button>)
          }
        </>
      )}


    </div>
  )
}