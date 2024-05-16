const user = {
    name : "Bill Gates",
    imgUrl : "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ6oETpSOxkYgVT83q-_tUl2P1MD6sAvY3akfS0LPLKreFL8-LIkOY4VDIeKyzkzg2AcHSFSxCa-JvROP9BFjJ-C-Ydb96ls_CopDoIKl4IMxt7xFDzxe4Ym6QAVyAz2wLtw3qYWTge_g"
};


const products = [
    {id:1, title:'mango'},
    {id:2, title:'orange'},
    {id:3, title: 'banana'}
];

const liProducts = products.map((product)=>{
    return <li key={product.id}>{product.title}</li>
})
function Profile() {
    return (
        <>
         <h1>{user.name}</h1>
         <img src={user.imgUrl} alt={user}  height="500px" width="500px"/>
         <ul>
            {liProducts}
         </ul>
         {console.log(liProducts)}
        </>
    )
}

export default Profile;