import Cards from './Cards.js';
import Example from './Slide.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitlebarImageList from './ActionAreaCard.js';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"
/>;
function Home() {
    return (
        <div>
            {/* <Navibar/> */}
            <Cards />

            {/* <Example /> */}
            <TitlebarImageList />
        </div>
    );
}

export default Home;
