async function foo(){
    try{ 
        let res=document.getElementById("text").value;
        console.log(res);
        let result=await fetch(`https://api.openbrewerydb.org/breweries/search?query=${res}`);
        let final=await result.json();
        console.log(final);
        
        
        for(var i=0;i<final.length;i++){
            
           let ele=document.createElement("div");
            ele.innerHTML=`&nbsp&nbsp&nbsp&nbsp Name &nbsp:&nbsp ${final[i].name} &nbsp &nbsp   Type &nbsp:&nbsp${final[i].brewery_type} &nbsp &nbsp Address &nbsp :&nbsp ${final[i].street} &nbsp &nbsp Website_url &nbsp:&nbsp ${final[i].website_url} &nbsp &nbsp Phone &nbsp:&nbsp${final[i].phone}&nbsp &nbsp`;
            
            document.body.append(ele);
            
           
        }
        
    }catch(error){
        console.log(error);
    }
       
    
    }
    function clean(){
        var inputArea=document.getElementById("text");
        inputArea.value="";
        window.location.reload();
    }


    
   
    