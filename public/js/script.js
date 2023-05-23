console.log('Lets Go')

const userForm = document.getElementById('userForm')

const formSubmission = async (e) => {
    e.preventDefault();

    const userValue = document.getElementById('user_name').value;
    console.log(userValue);

    const emailValue = document.getElementById('email').value;
    console.log(emailValue);

    const passwordValue = document.getElementById('password').value;
    console.log(passwordValue);


    const postValue = await fetch('/users/sign-up', {
        method: 'POST',
        body: JSON.stringify({
            user_name: userValue,
            email: emailValue,
            password: passwordValue
        }),
        headers: {'Content-Type': 'application/json'}
    })
    if(postValue.ok) {
        alert('You are signed up')
    } else {
        alert('Try Again')
    }
}

userForm.addEventListener('submit', formSubmission);