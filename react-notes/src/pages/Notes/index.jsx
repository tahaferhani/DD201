import { useEffect, useRef, useState } from 'react';
import './style.scss';
import StackedAvatars from '../../components/StackedAvatars';
import Switch from '../../components/Switch';
import Loader from '../../components/Loader';
import axios from 'axios';
import NoteManager from '../../components/NoteManager';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Notes = () => {
    const [fullname, setFullname] = useState(null);
    const [notes, setNotes] = useState([]);
    const [myNotesOnly, setMyNotesOnly] = useState(false);
    const [loading, setLoading] = useState(true);
    const [logoutLoading, setLogoutLoading] = useState(false);
    const noteManager = useRef();
    const itemsKeySuffix = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        const fullname = localStorage.getItem('fullname');
        setFullname(fullname);

        fetchNotes();
    }, [])

    const fetchNotes = async () => {
        try {
            itemsKeySuffix.current = new Date().getTime();

            const notes = await axios.get("/notes");
            setNotes(notes);
        }
        finally {
            setLoading(false);
        }
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleTimeString('en-US', {
            month: "short",
            day: "numeric",
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const onFilterChange = checked => {
        itemsKeySuffix.current = new Date().getTime();
        setMyNotesOnly(checked);
    }

    const onNotesManagerDismissed = (refreshNotes) => {
        if (refreshNotes)
            fetchNotes();
    }

    const onDelete = e => {
        e.stopPropagation();
        const id = e.target.getAttribute('data-id');

        confirmAlert({
            title: "Confirmation",
            message: "Are you sure you want to delete this note ?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        setLoading(true);
                        try {
                            await axios.delete(`/notes/${id}`);
                        }
                        finally {
                            fetchNotes();
                        }
                    }
                },
                { label: 'No' }
            ]
        })
    }

    const onLogout = async () => {
        try {
            setLogoutLoading(true);
            await axios.post("/logout");
            localStorage.removeItem('fullname');
            localStorage.removeItem('token');
            navigate('/login');
        }
        finally {
            setLogoutLoading(false);
        }
    }

    const filteredNotes = myNotesOnly ? notes.filter(note => note.is_owner) : notes;

    return <>
        <div id="notes">
            <div className="container">
                {
                    fullname &&
                    <div className="toolbar">
                        <h1 className="title">
                            <span>Hello {fullname} 👋</span>
                            <Switch onChange={onFilterChange}>My notes only</Switch>
                        </h1>

                        <div className="buttons">
                            <Button round onClick={() => noteManager.current.open()}><big>+</big> New note</Button>
                            <Button dark round loading={logoutLoading} onClick={onLogout}>Logout</Button>
                        </div>
                    </div>
                }

                <div className="listing">
                    {
                        filteredNotes.map((note, index) => {
                            return <div key={note.id + itemsKeySuffix.current}
                                className={`listing-item ${note.is_owner ? '' : 'shared-with-me'}`}
                                style={{ animationDelay: `${150 * index}ms` }}
                                onClick={() => noteManager.current.open(note.id)}>

                                <span className="date">{formatDate(note.date)}</span>
                                <h2 className="title">{note.title.toLowerCase()}</h2>
                                <div className="content" dangerouslySetInnerHTML={{ __html: note.content }}></div>
                                <StackedAvatars users={note.shared_with} dark={!note.is_owner} />
                                <button className="btn-delete" data-id={note.id} onClick={onDelete}>✕</button>
                            </div>
                        })
                    }
                </div>

                <Loader visible={loading} />
            </div>
        </div>

        <NoteManager ref={noteManager} onDismiss={onNotesManagerDismissed} />
    </>
}

export default Notes