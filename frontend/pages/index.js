import Link from 'next/link';  // Importing the Link component from Next.js for client-side navigation
import Todo_List from '../components/Todo_List';  // Importing the Todo_List component to be displayed on the home page

// This function component represents the "Home" page
export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <h1>First Page</h1>  {/* Displaying the title of the home page */}
      
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Todo_List />  {/* Rendering the Todo_List component to allow the user to interact with the to-do list */}
      </div>
      
      {/* Link component to navigate to the second page */}
      <Link href="/secondPage">Go to Second Page</Link>  {/* Creates a client-side link to the "about" page */}
    </div>
  );
}