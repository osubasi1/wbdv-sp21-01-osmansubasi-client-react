import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"


function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}  component={Home}/>
                <Route path="/courses/:layout" exact={true}>
                    <CourseManager/>
                </Route>
            </div>
        </BrowserRouter>
    );
}
export default App;
