
            var equation;
            var answers=[],eq=[];
            var inputVal=document.querySelector("#input");
            var questionInput=document.querySelector("#equation");
            var historyDiv=document.querySelector("#history");
            function getVal(val)
            {
                if(inputVal.value=="0")
                {
                    inputVal.value=val;
                }
                else
                {
                    inputVal.value+=val;
                }
                
            }
            function clearInput()
            {
                inputVal.value="0";
                questionInput.value="";
            }
            function ans()
            {
                equation=inputVal.value+ " = ";
                inputVal.value=eval(inputVal.value);
                questionInput.value=equation;
                answers.push(eval(inputVal.value));
                eq.push(equation);
                console.log(answers);
                console.log(eq);
                showHistory();
                
            }

            function showHistory()
            {
                
                var history="<div>";
                for(let i=0;i<eq.length;i++)
                {
                    history+="<div class='his'><p>"+eq[i]+"</p><p>"+answers[i]+"</p></div>";
                }
                history+="</div>";
                historyDiv.innerHTML=history;
            }

            function clearHistory()
            {
                const res=confirm(" Are You Sure want to delete history ? ");
                if(res)
                {
                    historyDiv.innerHTML="";
                    eq=[];
                    answers=[];
                }
               

            }