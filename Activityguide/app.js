const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    let Name = document.getElementById.apply("name").value
    let Address = document.getElementById.apply("address").value
    let Telephone = document.getElementById.apply("telephone").value
    let Major = document.getElementById.apply("major").value
    let x = `hello $(name), I see you are from $(address), and you are also pursuing a degree $(major) and you can be contacted using $(telephone)`
    document.getElementById("output").innerHTML= x
})