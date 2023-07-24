import React from "react"; 
import {useEffect} from 'react'

export default function App() {
  return (
    <>
      <ContactList />
    </>
  );
}

useEffect(() => {
  async function fetchContacts() {
    try {
      const response = await fetch(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );
      const result = await response.json();
      setContacts(result);
      } catch (error) {
      console.error(error);
    }
  }
  fetchContacts()
}, []);



