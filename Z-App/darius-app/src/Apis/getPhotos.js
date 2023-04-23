export const getPhotos = async() => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
      const data = await response.json();
      return data; 
    } catch(error){
      console.error('Error:', error)
    }
  }