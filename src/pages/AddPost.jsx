import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 text-white font-semibold text-left my-2'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost