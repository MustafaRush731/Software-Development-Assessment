import { useEffect, useState } from 'react';  // Importing useEffect and useState hooks from React
import Link from 'next/link';  // Importing the Link component from Next.js for client-side navigation

// This function component represents the "Second Page"
export default function secondPage() {
  const [p, setPosts] = useState([]);  // Initializing the 'posts' state to hold the fetched post data, initially an empty array

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <h1>Second Page</h1>  {/* Displaying the title of the page */}
      
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ul>
          {/* Mapping over the 'posts' array and rendering a list item for each post */}
          {p.map(post => (
            <li key={post.id}>{post.title}</li>  // Displaying each post's title, with the 'id' as the unique key
          ))}
        </ul>
      </div>

      {/* Link component to navigate back to the first page */}
      <Link href="/">Go to First Page</Link>  {/* This creates a client-side link to the home page */}
    </div>
  );
}
