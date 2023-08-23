export default function UserProfile(props){
    // console.log(props);
    // console.log(props.name);
    // console.log(props.age);
    return(
        <h3>name: {props.name}, age:{props.age},occupation: {props.occupation}</h3>
    )
}