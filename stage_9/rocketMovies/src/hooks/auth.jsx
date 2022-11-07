import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({email, password}) {
    try{
      const response = await api.post("/sessions", {email, password})
      const {user, token} = response.data

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      setData({user, token})
    }
    
    catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert("não foi possível a autentificação do usuário.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")

    setData({}, "")
  }

  async function updateProfile({user, avatarFile}) {
  
    try {
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      
      setData({ user, token: data.token })
      alert("Perfil Atualizado!")
    }
    catch(error) {  
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert("não foi possível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")


    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({user: JSON.parse(user), token})
    }
    
  }, [])

  return (
    <AuthContext.Provider value={
      { 
        signIn, 
        signOut,
        updateProfile,
        user: data.user,
        }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export {
  AuthProvider,
  useAuth
}