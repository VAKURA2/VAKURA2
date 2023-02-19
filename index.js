async function consultar(){
    let restultado = await fetch("https://randomuser.me/api/")
                            .then(Response => Response.json())
                            .then(data => data )
    console.log ( restultado )

}

consultar()