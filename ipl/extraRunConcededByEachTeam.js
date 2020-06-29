function extraRunConcededByEachTeam(matches,deliveries)
  {
      const ans={}
      for(var year=2008;year<=2019;year++)
      {
       const  result={}
        for(var i=0;i<matches.length;i++)
          {
          if(matches[i].season==year)
          {
              var id=matches[i].id;
    
              for(var j=0;j<deliveries.length;j++)
              
              {
                  var id2=deliveries[j].match_id;
                
                  if(id2==id)
                  {
                    
                   if(result[deliveries[j].bowling_team])
                   {
              
                      var k=parseInt(deliveries[j].extra_runs);
                      result[deliveries[j].bowling_team] +=k;
                     
                    }
                   else
                   {
                     var k=parseInt(deliveries[j].extra_runs);
          
                     result[deliveries[j].bowling_team] = k;
                    
                   }
                 
                
                  }
          }

        }
        

      }
      ans[year]=result;
    }
      return ans;

    }

module.exports = extraRunConcededByEachTeam;
