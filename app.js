// write code here
 <script>
        let num1 = parseFloat(prompt("ระบุตัวเลขตัวที่1:"));
        let num2 = parseFloat(prompt("ระบุตัวเลขตัวที่2:"));
        let num3 = parseFloat(prompt("ระบุตัวเลขตัวที่3:"));
        
        let numbers = [num1, num2, num3];
       
        numbers.sort(function(a, b) {
        return b - a;
        });

        alert("เรียงจากมากไปน้อย: " + numbers.join(", "));

</script>
