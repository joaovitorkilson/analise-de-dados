
export default async function fetchData(url: string) {
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro: " + response.status);
    }

    const json = await response.json();
    console.log(response)
    return json;
    
  }  catch (error) {
    return null;
  }
  
}