import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";


function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}  component={Home}/>
                {/*<Route path="/courses" component={CourseManager}/>*/}
                <Route path="/courses/:layout" exact={true}>
                    <CourseManager/>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        </BrowserRouter>
    );
}
export default App;
