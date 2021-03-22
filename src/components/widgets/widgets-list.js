import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService from "../../services/widget-service";
import {CREATE_WIDGET, UPDATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, FIND_ALL_WIDGET}
from "../action-types/widget-actions";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = (
    {
        findWidgetsForTopic,
        widgets = [],
        updateWidget,
        createWidget,
        deleteWidget
    }) => {
    const {topicId} = useParams();

    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
        findWidgetsForTopic(topicId)
    }, [topicId])
    return (
        <div>
            <button type="submit"
                    className="btn new-course-btn mr-2 float-right"
                    onClick={() => createWidget(topicId)}
            >
                <i className="fa fa-plus"/>
            </button>
            {/*<i onClick={createWidget(topicId)} className="fas fa-plus float-right fa-2x"/>*/}
            <h2>Widget List {widgets.length}</h2>


            <ul className="list-group">
                {
                    widgets.map(widget =>
                                    <li className="list-group-item"
                                        key={widget.id}>
                                        {
                                            widget.type === "HEADING" &&
                                            <HeadingWidget
                                                widget={widget}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}/>
                                        }
                                        {
                                            widget.type === "PARAGRAPH" &&
                                            <ParagraphWidget
                                                widget={widget}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}/>
                                        }
                                    </li>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}
const dtpm = (dispatch) => ({

        createWidget: (tid) => {
            if(tid === undefined){
                alert("Please select a topic to add widget")
            }else {
                widgetService.createWidget(tid, {
                    // id: 123,
                    type: "HEADING",
                    text: "New Widget",
                    size: 1,
                    // topicId: tid
                })
                    .then(widget => dispatch({
                                                 type: CREATE_WIDGET,
                                                 widget: widget
                                             }))
            }
        },
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(widgets => dispatch({
                                                type: FIND_ALL_WIDGETS_FOR_TOPIC,
                                                widgets: widgets
                                            }))
        },
        deleteWidget: (widgetId) => {
            widgetService.deleteWidget(widgetId)
                .then(status => dispatch({
                                             type: DELETE_WIDGET,
                                             widgetToDelete: widgetId
                                         }))
        },
        findAllWidgets: () => {
            widgetService.findAllWidgets()
                .then(widgets => dispatch({
                                              type: FIND_ALL_WIDGET,
                                              widgets: widgets
                                          }))
        },
        updateWidget: (wid, updatedWidget) => {
            widgetService.updateWidget(wid, updatedWidget)
                .then(widget => dispatch({
                                             type: UPDATE_WIDGET,
                                             widget: updatedWidget,
                                             wid: wid
                                         }))

        }

    }
)
export default connect(stpm, dtpm)
(WidgetList)
// export default WidgetList;
