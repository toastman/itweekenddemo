import './scroller.scss'

const setUpScroller = () => {
    let _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    let template = document.createElement("DIV");

    template.classList.add('itw-progress-bar');
    document.body.appendChild(template);

    const setProgressBarPosition = () => {
        let proportion = Math.round(window.pageYOffset/(_docHeight-window.innerHeight)*100);
        template.style.width = `${proportion}%`
    }

    setProgressBarPosition();
    document.addEventListener('scroll', setProgressBarPosition);
}

document.addEventListener("DOMContentLoaded", setUpScroller)