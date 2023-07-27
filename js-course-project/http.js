export class Http{
    static fetchData(url){
        
        return new Promise((resolver,reject)=>{
          const http =  new XMLHttpRequest();
          http.open('GET',url);
         
          http.onreadystatechange = function(){
            

            if(http.status == 200 &&http.readyState ==  XMLHttpRequest.DONE){
              const responce =  http.responseText;
               const data = JSON.parse(responce);
               resolver(data) ;
            }else if(http.readyState ==  XMLHttpRequest.DONE){
                reject('something wrong ')
                  }
          }
           http.send();

        })
    }
}