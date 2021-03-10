import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {BrowserRouter as Router, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import CourseHeader from "../course-header/course-header";

class CourseManager extends React.Component {
    newCourse = {
        title: "New Course",
        owner: "me",
        lastModified: "today",
    }

    state = {
        courses: [],

    }

    getCurrentDate = (separator = '-') => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return (
            `${month < 10 ? `0${month}` : `${month}`}${separator}${date}${separator}${year}`
        )
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        this.newCourse.lastModified = this.getCurrentDate("-")
        courseService.createCourse(this.newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return (
            <div>

                <Router>
                    <Route path="/courses/table">
                        <CourseHeader
                            addCourse={this.addCourse}
                            newCourse={this.newCourse}/>
                    </Route>
                    <Route path="/courses/grid">
                        <CourseHeader
                            addCourse={this.addCourse}
                            newCourse={this.newCourse}/>
                    </Route>
                    <Route path="/courses/table">
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            title={this.title}
                        />
                    </Route>
                    <Route path="/courses/grid">
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            title={this.title}
                        />
                    </Route>
                    <Route path={[
                        "/courses/editor/:courseId",
                        "/courses/editor/:courseId/:moduleId",
                        "/courses/editor/:courseId/:moduleId/:lessonId",
                        "/courses/editor/:courseId/:moduleId/:lessonId/:topicId",
                    ]}
                           exact={true}
                           render={(props) => <CourseEditor {...props}/>}>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default CourseManager