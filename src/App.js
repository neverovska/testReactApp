import "./App.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";
import {Main} from "./components/Main";
import {ThemeProvider} from "./ThemeContext";

function App() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(`https://dummyjson.com/products?limit=100`)
            .then(res => res.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData.products);
                console.log(data);
            })
            .then(console.log);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ThemeProvider>
                <Header/>
                <Main item={data}/>
                <Footer/>
            </ThemeProvider>
        </>
    );
}

export default App;
