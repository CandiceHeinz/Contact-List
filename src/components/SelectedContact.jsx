
export default function App() {
    const [selectedContactId, setSelectedContactId] = useState(null);
  
    return (
      <>
        {selectedContactId ? (
          <div>Selected Contact View</div>
        ) : (
          <ContactList  setSelectedContactId={setSelectedContactId}/>
        )}
      </>
    );
  };
  