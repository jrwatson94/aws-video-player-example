import Amplify, { Storage } from 'aws-amplify'
import awsconfig from 'aws-exports'

Amplify.configure(awsconfig)

document.getElementById('upload-form').addEventListener('submit', e => {
    // don't refresh the page on submit
    e.preventDefault()
    // get the file from the file upload element, this will be an array.
    // we only want the first element
    const file = document.getElementById('file-upload').files[0]
    // put our file in storage, use the file's name as its S3 Key
    Storage.put(file.name, file)
      .then(item => {
        console.log(item)
      })
      .catch(err => console.error(err))
  })

  Storage.list('')
  .then(result => {
    result.forEach(item => console.log(item))
  })
  .catch(err => console.error(err))

