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

const postForm = document.getElementById('postForm')

const postSubmission = async (e) => {
    e.preventDefault();

    const postTitle = document.getElementById('post_title').value;
    ocnsole.log(postTitle);
    const postContent = document.getElementById('post_content').value;
    console.log(postContent);
    const postPoster = document.getElementById('poster').value;
    console.log(postPoster);
  

    const postValue = await fetch('/dashboard/:id', {
        method: 'POST',
        body: JSON.stringify({
            post_title: postTitle,
            post_content: postContent,
            poster: postPoster,
            user_Id: req.params.id
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(postValue.ok) {
        alert('Post Made')
    } else {
        alert('Failed to Post')
    }
} 


userForm.addEventListener('submit', formSubmission);