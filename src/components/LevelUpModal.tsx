
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.scss';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.containerLevelUpModal}>
        <header>{level}</header>
        <strong>Well done!</strong>
        <p>You achieved a new level</p>

        <button type='button' onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}