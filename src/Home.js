import {Header,Footer} from "./Partials";
function Home(){
    return (
        <div>
            <Header/>
            <div id="HomeBody">
                <div id="HomeDisc">
                    <h2>Welcome to Legal-E-Portal</h2>
                    <p>ambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers</p>
                </div>
                <img alt="justice" id="HomeImg" src="https://static.vecteezy.com/system/resources/previews/006/476/152/original/icon-scales-symbol-of-law-and-justice-image-of-judgment-vector.jpg"></img>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;