import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    setSelectedPage: (value: SelectedPage) => void; 
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    
    return <section
        id="home"
        className="gap-16 bg-hero-img h-full w-full bg-no-repeat bg-cover"
        >
        {/*MAIN HEADER*/}
        <div>
            {/*HEADINGS*/}
            <div>
                
            </div>
        </div>
        
    </section>;

}

export default Home