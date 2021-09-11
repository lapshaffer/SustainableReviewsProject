// JS for front-end functionality of editing and deleteing reviews

//EDIT
const editBtn = document.querySelector('#editBtn');

const editForm = async (event) => {

    event.preventDefault();

    const title = document.querySelector('#editTitle').value.trim();
    const content = document.querySelector('#editContent').value.trim();
    const rating = document.querySelector('#editRating').value.trim();

    if(title && content && (rating>0 && rating<=5)) {
        const req = await fetch('/api/review/:id', {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                content: content,
                rating: rating
            }),
            headers: { 'Content-type': 'application/json' }
        });
        console.log(req);
        if (req.ok) {
            alert("Review Successfully updated!");
            document.location.replace('/');
        } else {
            alert("Review FAILED to update. Leave no fields blank, ratings at 1-5");
        }
    }
}

editBtn.addEventListener('click', editForm);



//DELETE
const deleteBtn = document.querySelector('#deleteBtn');

const deleteForm = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#deleteId').value.trim();
    if(id){
        const req = await fetch('api/review/:id', {
            method: 'DELETE',
            where: {
                id: id
            },
        });
        if(req.ok) {
            alert("Review successfully deleted");
            document.location.replace('/');
        } else {
            alert("Something went wrong, please verify review ID");
        }
    } else {
        alert("Please enter an ID");
    }
}

deleteBtn.addEventListener('click', deleteForm);
