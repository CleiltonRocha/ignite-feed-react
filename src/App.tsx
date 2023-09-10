import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/CleiltonRocha.png",
      name: "Cleilton Rocha",
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-09-09 10:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4E03AQEgtH0Ws3oGkA/profile-displayphoto-shrink_800_800/0/1682974857816?e=1699488000&v=beta&t=EDPgL3UdGbfwKQXfs5qybvUIF3sWmsgReZrOJY9ZcVY",
      name: "Maria Kailane",
      role: "Biomédica"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-09-08 10:30:00')
  },

]

export function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
              )
              
            })
          }
        </main>
      </div>
    </div>
  )
}
