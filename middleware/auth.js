export default function ({ route ,store, redirect }) {
    const guestRoutesName = ['login', 'register']
    const authRoutesName = ['', 'dashboard']
    const routeName = route.name
    if (store.state.user.isLoged === false) {
        if (guestRoutesName.find(element => element === routeName) === undefined) {
            console.log('redirect login')
            redirect('/login')
        }
    } else if(authRoutesName.find(element => element === routeName) === undefined) {
        console.log('redirect dashboard')
        redirect('/dashboard')
    }
  }