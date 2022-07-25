import s from"./home-page.module.css"

const HomePage = () => {
    return (
        <main>
            <div className="container">
                <h1 className={s.title}>Welcome to create your phonebook!!!</h1>
                <div className={s.imgWrapper}></div>
            </div>
        </main>
    )
}

export default HomePage;