export let Fatherdetails = ({ name, age, wife}) => {
    console.log(name);
    console.log(wife);
    console.log(age);
    return (
    <div>
        <p>My fathername is {name}</p>
        <p>My fatherage is {age}</p>
        <p>My fatherwife is {wife}</p>
        </div>
    );
};