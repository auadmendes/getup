import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToLevelUp = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToLevelUp}%` }} />
        <span style={{ left: `${percentToLevelUp}%` }}>{currentExperience} xp </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}
