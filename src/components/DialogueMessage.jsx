import React from 'react';
import { Icon } from '@iconify/react';

const DialogueMessage = (props) => {
    return (
        <div className="message-container" onClick={props.next}>
            <div className="message">
                <p>{props.message}</p>
                <Icon icon="material-symbols:arrow-drop-down-rounded" />
            </div>
        </div>
    );
};

export default DialogueMessage;