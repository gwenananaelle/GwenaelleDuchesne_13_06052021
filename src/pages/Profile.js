import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import Accounts from '../components/Accounts'
import { transactions } from '../data/transactions'
import Footer from '../components/Footer'

export default function Profile() {
    const listTransactions = transactions.map((item, index) => (
        <Accounts
            key={'transaction' + index}
            title={item.title}
            amount={new Intl.NumberFormat('us-US', {
                style: 'currency',
                currency: 'USD',
            }).format(item.amount)}
            amountDescription={item.amountDescription}
        />
    ))
    return (
        <>
            <NavigationBar />
            <main className="main bg-dark">
                <Header />
                <h2 className="sr-only">Accounts</h2>
                {listTransactions}
            </main>
            <Footer />
        </>
    )
}
