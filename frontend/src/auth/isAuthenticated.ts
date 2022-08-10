export const isAuthenticated = () => {
  const storageRepos = localStorage.getItem('@user')

  if (storageRepos) {
    return true
  }

  return false
};