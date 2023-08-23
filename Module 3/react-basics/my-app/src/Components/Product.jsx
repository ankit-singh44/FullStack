export default function(){
    // let products=["Laptop","Headphone","Mouse","Keyboard","Mouse"];

    let productsList=[
        {id: 1,name: "Laptop",price: 35000},
        {id: 2,name: "Headphone",price: 2400},
        {id: 3,name: "Mouse",price: 450},
        {id: 4,name: "Keyboard",price: 600}
    ];
    return(
        <ul>
            {/* {products.map(function(product,index){
                return <li key={index}>{product}</li>
            })} */}

            {productsList.map((product)=>{
                return <div key={product.id}>Name: {product.name} and Price: {product.price}</div>
            })}
                
        </ul>
    )
}