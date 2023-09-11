import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react'
import coverImg from '../assets/cover.jpeg'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src={coverImg}
                className={styles.cover}
            />

            <div className={styles.profile}>
                <div className={styles.customStylesAvatar}>
                    <Avatar src="https://github.com/CleiltonRocha.png" />
                </div>
                <strong>Cleilton Rocha</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} weight="bold" />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}