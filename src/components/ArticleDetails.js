import React, { useState } from 'react'
import { Dialog } from '@material-ui/core'
import Iframe from 'react-iframe'

function ArticleDetails(props) {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <div className="Details" onClick={handleShow}>
                <h4>{props.data.webTitle}</h4>
            </div>
            <Dialog open={show} onClose={handleClose} maxWidth="md" fullWidth={true}>
                {props.data.webTitle}
                <Iframe url={props.data.webUrl} style={{height:'50vh'}}/>
            </Dialog>
        </>
    )
}

export default ArticleDetails
