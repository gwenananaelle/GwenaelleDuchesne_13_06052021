import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import Accounts from '../components/Accounts'
import Footer from '../components/Footer'

export default function Profile() {
    return (
        <>
            <NavigationBar />
            <main className="main bg-dark">
                <Header />
                <h2 className="sr-only">Accounts</h2>
                <Accounts
                    title={'Argent Bank Checking (x8349)'}
                    amount={'$2, 082.79'}
                    amountDescription={'Available Balance'}
                />
            </main>
            <Footer />
        </>
    )
}
