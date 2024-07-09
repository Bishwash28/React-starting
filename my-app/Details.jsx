export let Details = ({ name, address, age}) => {
    console.log(name);
    console.log(address);
    console.log(age);
    return (
    <div>
        <p>My name is {name}</p>
        <p>I live in {address}</p>
        <p>I am {age}</p>
        </div>
    );
};