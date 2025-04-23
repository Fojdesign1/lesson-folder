
  function submitComment() {
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (!name || !comment) {
      alert("Please fill out both name and comment.");
      return;
    }

    // Display success message to user
    alert("Thank you for your comment, " + name + "!");

    // Optional: Display comment in a section (if you want to show it on the page)
    const commentSection = document.getElementById("comment-section");
    const newComment = document.createElement("p");
    newComment.textContent = `${name}: ${comment}`;
    commentSection.appendChild(newComment);

    // WhatsApp link (pre-fills message for you to send manually)
    const phoneNumber = "2347040423766"; 
    const message = `New Comment from ${name}: ${comment}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${2347040423766}?text=${encodedMessage}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, "_blank");
  }
  $('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:  $('.next'),
    prevArrow: $('.right'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

