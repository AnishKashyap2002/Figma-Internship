import Navbar from "./components/Navbar";
import { gradientPrimary, gradientText } from "./utilities";
import StudyCard from "./components/StudyCard";
import Path from "./components/Path";
import CreateFlash from "./components/CreateFlash";
import FAQ from "./components/FAQ";

function App() {
    return (
        <>
            <div className="px-14 py-2">
                <Navbar />
                <Path />
                <h1 className={`${gradientText} text-3xl font-bold`}>
                    Relations and Functions ( Mathematics )
                </h1>
                <StudyCard />
                <CreateFlash />
                <FAQ />
            </div>
        </>
    );
}

export default App;
