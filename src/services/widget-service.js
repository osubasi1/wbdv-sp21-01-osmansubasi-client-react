const WIDGET_URL = "http://localhost:8080/api/"
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/topics";


//POSTs to /api/topics/{tid}/widgets a JSON object encoded as a string representing a new widget instance
const createWidget = (tid, widget) => {
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());
}

//GETs all widgets as a JSON array from /api/topics/{tid}/widgets for a topic whose ID is tid
const findWidgetsForTopic = (tid) => {
    fetch(`${TOPIC_URL}/topic/${tid}/widgets`)
        .then(res => res.json());
}

//(optional) GETs all widgets as a JSON array from /api/widgets
const findAllWidgets = () => {}

//(optional) GETs a single widget as a JSON object from /api/widgets/{wid}
const findWidgetById = (wid) => {}

//PUTs to /api/widgets/{wid} a JSON object encoded as a string representing an existing widget
// instance with new values for the attributes for a widget whose ID is wid
const updateWidget = (wid, widget) => {
    fetch(`${WIDGET_URL}/widgets/${wid}`,{
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(res => res.json())
}

// DELETE an existing widget whose ID is wid from /api/widgets/{wid}
const deleteWidget = (wid) => {
    fetch(`${WIDGET_URL}/widgets/${wid}`,{
        method: 'DELETE'
    }).then((res) => res.json()
    )
}

