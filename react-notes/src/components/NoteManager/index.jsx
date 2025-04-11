import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import './style.scss';
import Editor from 'react-medium-editor-17';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import axios from 'axios';
import Loader from '../Loader';
import Button from '../Button';
import Select from 'react-select';

const NoteManager = forwardRef(({ onDismiss }, ref) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saveLoading, setSaveLoading] = useState(false);
    const [note, setNote] = useState({});
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    useImperativeHandle(ref, () => ({
        open: async (id) => {
            setVisible(true);
            setLoading(true);

            if (!id) {
                setNote({
                    title: 'Note title',
                    content: 'Note default content',
                })
                setSelectedUsers([]);
                setLoading(false);
                return;
            };

            try {
                const note = await axios.get(`/notes/${id}`);
                setNote(note);
                setSelectedUsers(note.shared_with.map(user => ({
                    value: user.id,
                    label: `${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}`
                })));
            }
            finally {
                setLoading(false);
            }
        }
    }))

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const users = await axios.get('/users');
        setUsers(users.map(user => ({
            value: user.id,
            label: `${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}`
        })));
    }

    const closeNotesManager = () => {
        setVisible(false);
        setNote({});
    }

    const onSave = async () => {
        try {
            setSaveLoading(true);
            if (note.id)
                await axios.put(`/notes/${note.id}`, {...note, shared_with: selectedUsers.map(user => user.value) });
            else
                await axios.post('/notes', {...note, shared_with: selectedUsers.map(user => user.id) });

            // Close manager with true to refresh notes list
            closeNotesManager();
            onDismiss && onDismiss(true);
        }
        finally {
            setSaveLoading(false);
        }
    }

    const selectStyles = {
        control: base => ({
            ...base,
            backgroundColor: "#474336",
            padding: "6px 0",
            border: 0,
            boxShadow: "none",
            borderRadius: 6,
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#797462",
          borderRadius: 5,
          padding: "2px 5px",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#fff",
          textTransform: "capitalize"
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: "#fff",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#ddca89",
            color: "#474336",
          },
        }),
        menu: base => ({
            ...base,
            backgroundColor: "transparent"
        }),
        menuList: base => ({
            ...base,
            backgroundColor: "#797462",
            borderRadius: 6
        }),
        option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isFocused ? "#474336" : "#797462",
            cursor: "pointer",
            textTransform: "capitalize"
        }), 
    };

    return <div id="note-manager" className={visible ? 'visible' : ''}>
            <h2 className="title" contentEditable="true" spellCheck="false" onBlur={e => setNote({...note, title: e.target.innerHTML})}>{ note?.title }</h2>
            <Select
                value={selectedUsers}
                onChange={setSelectedUsers}
                options={users}
                placeholder="Share this note"
                isClearable={false}
                isMulti
                styles={selectStyles}/>

            <hr />
            
            <div className="content">
                <Editor
                    text={note?.content}
                    onChange={content => setNote({...note, content})}
                    options={{
                        spellcheck: false,
                        toolbar: {
                            buttons: ['bold', 'italic', 'underline', 'unorderedlist']
                        },
                        placeholder: false
                    }}/>
            </div>

            
            
            <div className="buttons">
                <Button round dark onClick={closeNotesManager}>Cancel</Button>
                <Button round loading={saveLoading} onClick={onSave}>Save</Button>
            </div>

            <Loader visible={loading}/>
        </div>
})

export default NoteManager