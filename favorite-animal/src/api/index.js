 const getApiData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const jsonResponse = response.ok ? response.json() : null;
      return jsonResponse;
    }
    catch(error){
      console.log("ERROR");
    }
  }

  export default getApiData;


  
  