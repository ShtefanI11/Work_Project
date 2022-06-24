export const getAndSetStorage = (user) => {
  let usersStorage = JSON.parse(localStorage.getItem('users'))

  if (usersStorage?.length) {
    usersStorage.push(user)
    localStorage.setItem('users', JSON.stringify(usersStorage))
  }

  localStorage.setItem('users', JSON.stringify([{ ...user }]))
}