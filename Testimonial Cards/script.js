const testimonials = [
    {
        name: 'Hoshi',
    position: 'Producer',
    photo:
      'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=549&q=80',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
        name: 'Chaewon Kim',
        position: 'Software Engineer',
        photo: 'https://images.unsplash.com/photo-1528341866330-07e6d1752ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
        text:
          'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
      },
      {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://images.unsplash.com/photo-1511763368359-c0d890ede0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80',
        text:
          "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
        name: 'Renee Sims',
        position: 'Senior Developer',
        photo: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text:
          "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
        name: 'Sasha Ho',
        position: 'UX Designer',
        photo:
          'https://images.unsplash.com/photo-1542157585-ef20bfcce579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=522&q=80',
        text:
          'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
        
    },
    {
        name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',

    },
]

const testimonial_container = document.getElementById('container')
const testimonial_details = document.querySelector('.testimonials')
const userImage = document.querySelector('.user-img')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

let idx = 1;

function showTestimonials() {
    const { name, position, photo, text} = testimonials[idx]

    testimonial_details.innerHTML=text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    }
}

setInterval(showTestimonials, 10000)