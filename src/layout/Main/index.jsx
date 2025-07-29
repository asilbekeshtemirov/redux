import Sidebar from "../Sidebar"
import { ContentWrapper, MainWrapper } from "./Main.style"

const MainLayout = (props) =>{
    return (
        <MainWrapper>
            <Sidebar></Sidebar>
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
        </MainWrapper>
    )
}

export default MainLayout