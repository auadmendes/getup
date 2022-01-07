import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';


import styles from '../styles/components/ChallengeBox.module.scss';


export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetCountdown();
    resetChallenge();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>{activeChallenge.type}</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type='button'
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Failed
            </button>
            <button
              type='button'
              className={styles.challengeCompletedButton}
              onClick={handleChallengeSucceeded}
            >
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finish a cycle to get challenges.
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Complete a challenge to level up.
          </p>
        </div>
      )}
    </div>
  )
}