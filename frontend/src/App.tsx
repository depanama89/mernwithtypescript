import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

import Note from "./components/Note";
import styles from "./styles/NotesPage.module.css";
import stylesUtils from "./styles/utils.module.css";
import AddEditNoteDialog from "./components/AddEditNoteDialog";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";
import NavBar from "./components/NavBar";
import { User } from "./models/user";
import * as NotesApi from "./network/note_api"
import NotesPageLoggedInView from "./components/NotesPageLoggedInView";
import NotesPageLoggedOutView from "./components/NotesPageLoggedOutView";

function App() {
  const [loggedInUser,setLoggedInUser]=useState<User | null>()
  const [showSignUpModal, setShowSignUpModal] = useState(false);
const [showLoginModal,setShowLoginModal]=useState(false)
  useEffect(()=>{
    async function fetchLoggedInUser(){
      try {
        const user=await NotesApi.getLoggedInuser()
        setLoggedInUser(user)
        
      } catch (error) {
      console.error(error)
      }
    }
  })
 
 
  return (
    
    <div>
      <NavBar
        loggedInUser={loggedInUser}
        onLoginClicked={() => setShowLoginModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onLogoutClicked={() => setLoggedInUser(null)}
      />
      <Container className={styles.NotesPage}>
       <>
       { loggedInUser ? <NotesPageLoggedInView /> 
       : 
        <NotesPageLoggedOutView/>
       
       }
       </>
       
       
        
      </Container>
      {showSignUpModal && (
          <SignUpModal
           onDismiss={() => setShowSignUpModal(false)}
            onSignUpSuccessful={(user) => {
              setLoggedInUser(user)
              setShowSignUpModal(false)
            }} />
        )}

        {showLoginModal && (
          <LoginModal 
          onDismiss={() => setShowLoginModal(false)} 
          onLoginSuccessful={(user) => {
            setLoggedInUser(user)
            setShowLoginModal(false)
          }} />
        )}
    </div>
  );
}

export default App;
