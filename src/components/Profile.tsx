import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { signIn, signOut, useSession } from "next-auth/react"
import { FaUser } from "react-icons/fa";
import styles from '../styles/components/Profile.module.scss';


export function Profile() {
  const { data: session } = useSession();
  const { level } = useContext(ChallengesContext);
  const [profile, setProfile] = useState({});


  //logar
  async function handleLoginNext() {
    await signIn();
    console.log(signIn);
    console.log('Sessão: ' + session.user);
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImage}>
        {session !== null ? (
          <img src={session?.user.image} alt={session?.user.name} />
        ) : (
          <FaUser size={35} />
        )}
      </div>
      <div>
        {session !== null ? (
          <strong>{session?.user.name}</strong>
        ) : (
          <button
            type='button'
            className={styles.profileLoginButton}
            onClick={handleLoginNext}
          >
            Sign in
          </button>
        )}
        <p>
          <img src="icons/level.svg" alt="Level" />
          {session !== null ? (
            <div className={styles.levelBox}>
              Level {level}
              <a href="" onClick={() => signOut()}>Signout</a>
            </div>
          ) : (
            <span>Your level goes here</span>
          )}
        </p>
      </div>
    </div>
  );
}