
import fetchData from "./fetchData";




async function handleData() {
  const data = await fetchData('https://api.origamid.dev/json/transacofes.json');
 
  if (data) {
    data.forEach(element => {
      console.log(element)
    });
  }


  console.log('codigo continuou')

}


handleData()