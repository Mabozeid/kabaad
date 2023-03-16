import React from 'react'
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

const error = () => {
  return (
    <Container>
    <div>
      <Link href='/'>
      Go Home
      </Link>

        </div>
   <style jsx global >
    {`
    .error {
     list-style: none;
    } 
    `}
 </style>
    </Container>


  )
}

export default error