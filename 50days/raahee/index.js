'use strict';
// navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#navbar-menu');
const navLinks = document.querySelectorAll('.navbar-link');

navToggle.addEventListener('click' , () => {
    const visibility = navMenu.getAttribute('visible');
    if(visibility === 'false'){
        navMenu.setAttribute('visible', true);
        navToggle.classList.toggle('rotate');
    } else if(visibility === 'true'){
        navMenu.setAttribute('visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navToggle.classList.toggle('rotate');
    }
});

// navlinks close nav menu after clicked
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navMenu.setAttribute('visible', false);
        navToggle.classList.toggle('rotate');
    })
});


// Reviews
// Fetch Data from reviews.json
fetch('reviews.json')
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(data => {
        renderReviewCards(data);
    })
    .catch(error => {
        console.log(error);
    });

// render cards for fetched data
function renderReviewCards(cards){
    const cardContainer = document.querySelector('.reviews-container');
    const prevBtn = document.querySelector('#reviews .btn-group .prev-btn');
    const nextBtn = document.querySelector('#reviews .btn-group .next-btn');

    let currentIndex = 0;

    cardContainer.innerHTML = '';

    cards.forEach((card , index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'review-card';
        cardElement.innerHTML = `
            <div class="review-card-img">
                <img src=${card.img} alt="" >
            </div>
            <div class="review-card-desc">
                <p>${card.desc}</p>
                <p style="text-align: right;">--- ${card.name}</p>
            </div>
        `;

        if(index !== 0){
            cardElement.style.display = 'none'
        }

        cardContainer.appendChild(cardElement);
    });

    // Select all review cards
    const reviewCards = document.querySelectorAll('.review-card');

    // Event listener for the Previous button
    prevBtn.addEventListener('click', () => {
        reviewCards[currentIndex].style.display = 'none'; // Hide the current card
        currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length; // Decrement the index, loop to the last if at the beginning
        reviewCards[currentIndex].style.display = 'block'; // Show the new card
    });

    nextBtn.addEventListener('click', () => {
        reviewCards[currentIndex].style.display = 'none'; // Hide the current card
        currentIndex = (currentIndex + 1) % reviewCards.length; // Increment the index, loop to the first if at the end
        reviewCards[currentIndex].style.display = 'block'; // Show the new card
    });
}


// Blog
fetch('./blog.json')
    .then(response => {
        if(!response.ok){
            throw new Error('network error');
        }
        return response.json();
    })
    .then(data => {
        renderBlog(data)
    })
    .catch(error => {
        console.log(error);
    });

function renderBlog(cards){
    const blogContainer = document.querySelector('.blog-card-container');
    const showBtn = document.querySelector('#blog #show-more');
    let showMore = true;

    blogContainer.innerHTML = '';
    
    cards.forEach((card, index) => {
        const blogCardEl = document.createElement('div');
        blogCardEl.className = 'blog-card';
        blogCardEl.innerHTML = `
            <div class="blog-card-img">
                <img src="${card.img}" alt="">
            </div>
            <div class="blog-card-title">
                <p class="bold-1">${card.title}</p>
            </div>
            <div class="blog-card-desc">
                <p>${card.desc}</p>
            </div>
            <div class="blog-card-footer">
                <p class="text-muted">${card.date}</p>
                <p class="text-muted">${card.time}</p>
            </div>
        `;

        if(index > 2){
            blogCardEl.style.display = 'none';
        }
        blogContainer.appendChild(blogCardEl);
    });

    showBtn.addEventListener('click', () => {
        const blogCards = document.querySelectorAll('.blog-card');
        if(showMore){
          blogCards.forEach((blog, index) => {
            if(index > 2){
                blog.style.display = 'block';
            }
            showBtn.innerText = 'Show Less';
          })
        } else {
            blogCards.forEach((blog, index) => {
                if(index > 2){
                    blog.style.display = 'none';
                }
                showBtn.innerText = 'Show More';
            })
        }
        showMore = !showMore;
       });

}