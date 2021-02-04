import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadContactsOperation} from "../../redux/operations/contactOperations";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Notification from "./notification/Notification";
import {Div, H1} from "./PhonebookStyled";

const Phonebook = () => {
    const [state, setState] = useState({
        showNotification: false,
    });

    const contacts = useSelector(state => state.contacts.items);
    const loading = useSelector(state => state.contacts.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContactsOperation());
    }, []);

    const contactExists = () => {
        setState({showNotification: true});
        setTimeout(() => {
            setState({showNotification: false});
        }, 4000);
    };

    return (
        <Div>
            <H1 in={true} appear timeout={500}>
                {loading ? "Loading..." : "Phonebook"}
            </H1>
            <ContactForm contacts={contacts} contactExists={contactExists} />
            {contacts.length > 0 && (
                <>
                    <h2>Contacts</h2>
                    <Filter />
                </>
            )}
            <ContactList />
            <Notification showNotification={state.showNotification} />
        </Div>
    );
};

export default Phonebook;
