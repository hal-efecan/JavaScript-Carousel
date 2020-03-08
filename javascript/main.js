const slideshow = {
    items: [],
    delay: 3000,
    setStyleTag: () => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = './css/style.css'    
        document.head.appendChild(link)
        document.title = 'Interval Carousel'
    },
    createElement: (type, className, id, num) => {
        const element = document.createElement(type)
        className ? element.classList.add(className) : className = null
        
        document.querySelector('.slideshow-container').appendChild(element)
        element.id = id
        element.src = `./assets/pic${num}.jpg`                  // set active class to last item at end of array
        slideshow.items.push(element)
    },
    setInitialSlide: () => {
        slideshow.items[2].classList.add('active')          // set active class to last item at end of array
        setTimeout(() => {
            slideshow.items[2].classList.remove('active')
        }, slideshow.delay)
    },
    startSlideInterval: () => {
        setInterval(() => {
            let [ firstItem, ...rest ] = slideshow.items        // select first item in slideshow array
            firstItem.classList.add('active')               // attach an active class
            slideshow.items = [ ...rest, firstItem ]            // move to the end of the array
            slideshow.switch()                                  // invoke switch
        }, slideshow.delay)
    },
    switch: () => {       
        setTimeout(() => {
            slideshow.items[2].classList.remove('active')   // remove active class from item at end of array
            },2950)
    }
}

window.onload = () => {
    slideshow.setStyleTag()
    slideshow.createElement('img', 'slideshow-item', 'one', '1')
    slideshow.createElement('img', 'slideshow-item', 'two', '2')
    slideshow.createElement('img', 'slideshow-item', 'three', '3')
    slideshow.setInitialSlide()
    slideshow.startSlideInterval()
}