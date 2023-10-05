
        function calculateAge(){
            
            var inputDate = document.getElementById('Input').value;
            var result = document.getElementById('result');
            
            var today = new Date();
            var birthDate = new Date(inputDate);
            var age = today.getFullYear() - birthDate.getFullYear();
            var monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            document.getElementById('result').textContent = "Your age is: " + age + " years old.";
        
        }
    
