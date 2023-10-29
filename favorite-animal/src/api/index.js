 const getApiData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=4')
      const jsonResponse = response.ok ? await response.json() : null;
      return jsonResponse;
    }
    catch(error){
      console.log("ERROR");
    }
  }

  export default getApiData;


  
  