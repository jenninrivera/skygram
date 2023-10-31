import React from 'react'
import {useState} from 'react'

function CreatePost() {


  

  return (
    <div>
        <form>
            <input type="file" accept="image/" name='image'/>
            <input type='text' name='caption'/>
        </form>
    </div>
  )
}

export default CreatePost