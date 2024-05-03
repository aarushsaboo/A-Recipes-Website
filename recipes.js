// Load existing comments from local storage when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadComments();
});

// Add comment form submission event listener
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    addComment(); // Call function to add comment
});

// Function to add a new comment
function addComment() {
    // Get the comment text from the textarea
    var commentText = document.getElementById('comment').value.trim();

    // If the comment is not empty
    if (commentText !== '') {
        // Create a new comment object
        var comment = {
            text: commentText,
            timestamp: new Date().getTime() // Add timestamp to identify each comment uniquely
        };

        // Save the comment to local storage
        saveComment(comment);

        // Add the comment to the comment list
        displayComment(comment);

        // Clear the textarea
        document.getElementById('comment').value = '';
    }
}

// Function to save a comment to local storage
function saveComment(comment) {
    // Get existing comments from local storage or initialize an empty array if there are none
    var comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Add the new comment to the array of comments
    comments.push(comment);

    // Save the updated array of comments back to local storage
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Function to load existing comments from local storage
function loadComments() {
    // Get existing comments from local storage
    var comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Display each comment in the comment list
    comments.forEach(function(comment) {
        displayComment(comment);
    });
}

// Function to display a comment in the comment list
function displayComment(comment) {
    // Create a new comment element
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = comment.text;

    // Get the comment list container
    var commentList = document.getElementById('comment-list');

    // Add the new comment element to the comment list
    commentList.appendChild(commentElement);
}
