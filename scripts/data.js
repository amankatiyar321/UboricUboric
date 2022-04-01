// key:-https://api.rainforestapi.com/request?api_key=3995A8A7983C4D5AABB76F020A7218F5&type=search&amazon_domain=amazon.com&search_term=purse
// api key:-3995A8A7983C4D5AABB76F020A7218F5

async function searchdata(){
    

    try{

        let input=document.getElementById("floww").value;

        let res =await fetch(`https://api.rainforestapi.com/request?api_key=3995A8A7983C4D5AABB76F020A7218F5&type=search&amazon_domain=amazon.com&search_term=${input}`);

        let data= await res.json();

         let given=data.search_results

        console.log("data:",given);

    }
    catch(err){
        console.log("err:",err);
    }


}






