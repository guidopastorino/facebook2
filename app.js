let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


document.addEventListener('click', (e) => {
    // more options aside left
    if (e.target.getAttribute('id') == 'dropMenuAsideLeft') {
        e.target.nextElementSibling.classList.toggle('d-none')
        e.target.nextElementSibling.classList.toggle('footer-options')
    }

    // share options btn post
    if (e.target.getAttribute('id') == 'shareOptionsPost') {
        e.target.nextElementSibling.classList.toggle('d-none')
        e.target.nextElementSibling.classList.toggle('btn-share-options')
    }

    // post desc hide/show
    if (e.target.getAttribute('id') == 'postDesc') {
        e.target.classList.toggle('d-flex')
        e.target.classList.toggle('post-hide')
    }

    // post options menu
    if (e.target.getAttribute('id') == 'btnOptionsPost') {
        e.target.nextElementSibling.classList.toggle('d-none')
        e.target.nextElementSibling.classList.toggle('post-options')
        

        // open in mediaquery 700
        e.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].classList.replace('d-none', 'preview--mobile')
    }

    
    // close options click bg
    if (e.target.getAttribute('id') == 'closeOptionsPost') {
        e.target.nextElementSibling.nextElementSibling.classList.replace('post-options', 'd-none')

        // open in mediaquery 700
        e.target.classList.replace('preview--mobile', 'd-none')
    }

    // btn like
    if (e.target.getAttribute('id') == 'btnLike') {
        e.target.classList.toggle('btn-post-like')
        e.target.classList.toggle('no-like')
    }

    // ocultar publicación
    if (e.target.getAttribute('id') == 'hidePost') {
        document.querySelector('.content').removeChild(e.composedPath()[5])
    }

    // mostrar preview de imagen de publicación
    if (e.target.getAttribute('id') == 'imgPost') {
        document.querySelector('#previewImgPost').classList.replace('d-none', 'preview')
        document.body.style.overflow = 'hidden'
        // replacing src attribute
        document.querySelector('#previewImgPost img').setAttribute('src', `${e.target.src}`)
    }

    // boton ocultar preview de imagen de publicación
    if (e.target.getAttribute('id') == 'btnClosePreview') {
        document.querySelector('#previewImgPost').classList.replace('preview', 'd-none')
        document.body.style.overflow = 'auto'
    }

    // boton ad
    if (e.target.getAttribute('id') == 'btnAd') {
        e.target.nextElementSibling.classList.toggle('d-none')
        e.target.nextElementSibling.classList.toggle('ad-options')

        if (e.target.nextElementSibling.classList.contains('ad-options')) {
            e.target.style.opacity = '1'
        } else {
            e.target.setAttribute('style', '')
        }
    }

    // hide ad
    if (e.target.getAttribute('id') == 'hideAd') {
        document.querySelector('#asideRight').removeChild(e.composedPath()[3])
    }

    // create post btn (open modal)
    if (e.target.getAttribute('id') == 'createPostBtn') {
        document.querySelector('#modalCreatePost').classList.replace('d-none', 'modal-create-post')
        document.body.style.overflow = 'hidden'

        document.querySelector('#textNewPost').value = ''
        document.querySelector('#imgNewPost').value = ''


        // if statement disabled btn post
        if (document.querySelector('#publishPost').classList.contains('btn-publish-disabled')) {
            document.querySelector('#publishPost').disabled = true
        } else {
            document.querySelector('#publishPost').disabled = false
        }
    }

    // close create post btn (modal)
    if (e.target.getAttribute('id') == 'btnCloseCreateModal') {
        document.querySelector('#modalCreatePost').classList.replace('modal-create-post', 'd-none')
        document.body.style.overflow = 'auto'
        document.querySelector('#textNewPost').value = ''
        document.querySelector('#imgNewPost').value = ''

        // btn post
        document.querySelector('#publishPost').classList.replace('btn-publish-allowed', 'btn-publish-disabled')
        document.querySelector('#publishPost').disabled = true
    }

    // btn make post
    if (e.target.getAttribute('id') == 'publishPost') {
        document.querySelector('#modalCreatePost').classList.replace('modal-create-post', 'd-none')
        document.body.style.overflow = 'auto'

        // btn post
        document.querySelector('#publishPost').classList.replace('btn-publish-allowed', 'btn-publish-disabled')
        document.querySelector('#publishPost').disabled = true


        let date = new Date()
        
        // append new post
        const $div = document.createElement('div')
        $div.classList.add('user-post', 'post')

        if (document.querySelector('#imgNewPost').value == '') {
            // without img
            $div.innerHTML = `
        <div class="user-post__header">
        <div class="user-post__user-info">
            <div class="user-info__profile-img hvr-img">
                <img src="https://placeimg.com/300/300/nature" alt="profile img">
            </div>
            <div class="user-info__info">
                <div class="user-info__username">
                    <span>Username</span>
                </div>
                <div class="user-info__date">
                    <span>${months[date.getMonth()]} ${date.getDate()} at ${date.getHours()}:${date.getMinutes()}hs</span>
                    &#8226;
                    <span class=" popover" data-popover="Público"><i class="bi bi-globe"></i></span>
                </div>
            </div>
        </div>
        <div class="user-post__btn-options">
            <!-- close bg -->
            <div id="closeOptionsPost" class="d-none"></div>

            <button id="btnOptionsPost" class="btn-option hvr-nav btn-option-post"><i class="bi bi-three-dots"></i></button>

            <!-- options post -->
            <div class="d-none">
                <ul>
                    <li class="hvr-item">
                        <i class="bi bi-bookmark-plus"></i>
                        <div>
                            <span class="post-options__title">Guardar publicación</span>
                            <span class="post-options__desc">Agregar a tus elementos guardados.</span>
                        </div>
                    </li>
                    <li class="hvr-item">
                        <i class="bi bi-bell"></i>
                        <div>
                            <span class="post-options__title">Activar notificaciones de esta publicación</span>
                        </div>
                    </li>
                    <li class="hvr-item" id="hidePost">
                        <i class="bi bi-x-square"></i>
                        <div>
                            <span class="post-options__title">Ocultar publicación</span>
                            <span class="post-options__desc">Ver menos publicaciones como esta.</span>
                        </div>
                    </li>
                    <li class="hvr-item">
                        <i class="bi bi-person-dash"></i>
                        <div>
                            <span class="post-options__title">Dejar de seguir</span>
                            <span class="post-options__desc">Dejar de ver sus publicaciones pero seguir siendo amigos.</span>
                        </div>
                    </li>
                    <li class="hvr-item">
                        <i class="bi bi-exclamation-circle"></i>
                        <div>
                            <span class="post-options__title">Reportar publicación</span>
                            <span class="post-options__desc">Me preocupa esta publicación.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


    <div class="user-post__main">
        <div class="user-post__main-desc">
            <span id="postDesc" class="post-hide">${document.querySelector('#textNewPost').value}</span>
        </div>
    </div>


    <div class="splitter splitter--post">
        <div></div>
    </div>


    <div class="user-post__footer">
        <div class="user-post__footer-btns">
            <button id="btnLike" class="hvr-nav btns-post-footer no-like">
                <i class="bi bi-hand-thumbs-up btn-icon-normal"></i>
                <i class="bi bi-hand-thumbs-up-fill btn-icon-active"></i>
                <span>Me gusta</span>
            </button>
        </div>

        <div class="user-post__footer-btns">
            <button class="hvr-nav btns-post-footer">
                <i class="bi bi-chat"></i>
                <span>Comentar</span>
            </button>
        </div>

        <div class="user-post__footer-btns">
            <button id="shareOptionsPost" class="hvr-nav btns-post-footer">
                <i class="bi bi-share"></i>
                <span>Compartir</span>
            </button>

            <!-- btn share options -->
            <div class="d-none">
                <ul>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-share"></i>
                            <span>Compartir ahora (Amigos)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-plus-circle"></i>
                            <span>Compartir en tu historia (Amigos)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-messenger"></i>
                            <span>Enviar por Messenger</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-code-slash"></i>
                            <span>Insertar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        `
        } else {
            // with img
            $div.innerHTML = `
        <div class="user-post__header">
        <div class="user-post__user-info">
            <div class="user-info__profile-img hvr-img">
                <img src="https://placeimg.com/300/300/nature" alt="profile img">
            </div>
            <div class="user-info__info">
                <div class="user-info__username">
                    <span>Username</span>
                </div>
                <div class="user-info__date">
                    <span>${months[date.getMonth()]} ${date.getDate()} at ${date.getHours()}:${date.getMinutes()}hs</span>
                    &#8226;
                    <span class=" popover" data-popover="Público"><i class="bi bi-globe"></i></span>
                </div>
            </div>
        </div>
        <div class="user-post__btn-options">
            <!-- close bg -->
            <div id="closeOptionsPost" class="d-none"></div>

            <button id="btnOptionsPost" class="btn-option hvr-nav btn-option-post"><i class="bi bi-three-dots"></i></button>

            <!-- options post -->
            <div class="d-none">
                <ul>
                    <li class="hvr-item">
                        <i class="bi bi-bookmark-plus"></i>
                        <div>
                            <span class="post-options__title">Guardar publicación</span>
                            <span class="post-options__desc">Agregar a tus elementos guardados.</span>
                        </div>
                    </li>
                    <li class="hvr-item">
                        <i class="bi bi-bell"></i>
                        <div>
                            <span class="post-options__title">Activar notificaciones de esta publicación</span>
                        </div>
                    </li>
                    <li class="hvr-item" id="hidePost">
                        <i class="bi bi-x-square"></i>
                        <div>
                            <span class="post-options__title">Ocultar publicación</span>
                            <span class="post-options__desc">Ver menos publicaciones como esta.</span>
                        </div>
                    </li>
                    <li class="hvr-item">
                        <i class="bi bi-person-dash"></i>
                        <div>
                            <span class="post-options__title">Dejar de seguir</span>
                            <span class="post-options__desc">Dejar de ver sus publicaciones pero seguir siendo amigos.</span>
                        </div>
                    </li>
                    <li class="hvr-item">
                        <i class="bi bi-exclamation-circle"></i>
                        <div>
                            <span class="post-options__title">Reportar publicación</span>
                            <span class="post-options__desc">Me preocupa esta publicación.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


    <div class="user-post__main">
        <div class="user-post__main-desc">
            <span id="postDesc" class="post-hide">${document.querySelector('#textNewPost').value}</span>
        </div>
        <div class="user-post__main-img">
            <img id="imgPost" src="${document.querySelector('#imgNewPost').value}" alt="post img" title="Haz click para ver la foto">
        </div>
    </div>


    <div class="splitter splitter--post">
        <div></div>
    </div>


    <div class="user-post__footer">
        <div class="user-post__footer-btns">
            <button id="btnLike" class="hvr-nav btns-post-footer no-like">
                <i class="bi bi-hand-thumbs-up btn-icon-normal"></i>
                <i class="bi bi-hand-thumbs-up-fill btn-icon-active"></i>
                <span>Me gusta</span>
            </button>
        </div>

        <div class="user-post__footer-btns">
            <button class="hvr-nav btns-post-footer">
                <i class="bi bi-chat"></i>
                <span>Comentar</span>
            </button>
        </div>

        <div class="user-post__footer-btns">
            <button id="shareOptionsPost" class="hvr-nav btns-post-footer">
                <i class="bi bi-share"></i>
                <span>Compartir</span>
            </button>

            <!-- btn share options -->
            <div class="d-none">
                <ul>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-share"></i>
                            <span>Compartir ahora (Amigos)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-plus-circle"></i>
                            <span>Compartir en tu historia (Amigos)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-messenger"></i>
                            <span>Enviar por Messenger</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hvr-item">
                            <i class="bi bi-code-slash"></i>
                            <span>Insertar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        `
        }


        document.querySelector('.create-post').after($div)
    }

    // btn open emojis modal
    if (e.target.getAttribute('id') == 'modalEmojis') {
        e.target.nextElementSibling.classList.toggle('d-none')
        e.target.nextElementSibling.classList.toggle('emojis-content')
    }

    // btn add emojis to text
    if(e.target.getAttribute('id') == 'btnEmoji'){
        console.log(e.target)
        document.querySelector('#textNewPost').value += e.target.textContent
        e.stopPropagation()
    }


    // --- BTN MENU DROPDOWN ---
    // menu btn
    if (e.target.getAttribute('id') == 'btnMenu') {
        e.target.classList.toggle('btn-normal')
        e.target.classList.toggle('btn-active')

        // hide class active in others btns
        document.querySelector('#btnProfile').classList.replace('btn-active' , 'btn-normal')
    }

    // profile btn
    if (e.target.getAttribute('id') == 'btnProfile') {
        e.target.classList.toggle('btn-normal')
        e.target.classList.toggle('btn-active')

        // hide class active in others btns
        document.querySelector('#btnMenu').classList.replace('btn-active' , 'btn-normal')
        document.querySelector('#btnCreate').classList.replace('btn-active' , 'btn-normal')
    }

    // create btn
    if (e.target.getAttribute('id') == 'btnCreate') {
        e.target.classList.toggle('btn-normal')
        e.target.classList.toggle('btn-active')

        // hide class active in others btns
        document.querySelector('#btnMenu').classList.replace('btn-active' , 'btn-normal')
        document.querySelector('#btnProfile').classList.replace('btn-active' , 'btn-normal')
    }



    // --- THEME BTNS ---
    if (e.target.getAttribute('id') == 'light') {
        lightMode()
    }

    if (e.target.getAttribute('id') == 'dark') {
        darkMode()
    }



    // Aside left btns show more
    // btn 1
    if (e.target.getAttribute('id') == 'seeMoreBtn1') {
        // showing items
        document.querySelectorAll('#itemHidden1').forEach(item1 => {
            item1.classList.toggle('d-none')
            item1.classList.toggle('item-block')
        })

        // changing icon direction
        document.querySelector('#iconRotate1').classList.toggle('icon-up')

        // changing text
        if (document.querySelector('#iconRotate1').classList.contains('icon-up')) {
            document.querySelector('#textBtnSeeMore1').textContent = 'Ver menos'
        } else {
            document.querySelector('#textBtnSeeMore1').textContent = 'Ver más'
        }

        e.preventDefault()
    }


    // btn 2
    if (e.target.getAttribute('id') == 'seeMoreBtn2') {
        // showing items
        document.querySelectorAll('#itemHidden2').forEach(item2 => {
            item2.classList.toggle('d-none')
            item2.classList.toggle('item-block')
        })

        // changing icon direction
        document.querySelector('#iconRotate2').classList.toggle('icon-up')

        // changing text
        if (document.querySelector('#iconRotate2').classList.contains('icon-up')) {
            document.querySelector('#textBtnSeeMore2').textContent = 'Ver menos'
        } else {
            document.querySelector('#textBtnSeeMore2').textContent = 'Ver más'
        }

        e.preventDefault()
    }
    
})



// ipt text new post
document.querySelector('#textNewPost').addEventListener('keyup', () => {
    if (document.querySelector('#textNewPost').value == '') {
        document.querySelector('#publishPost').classList.replace('btn-publish-allowed', 'btn-publish-disabled')
        document.querySelector('#publishPost').disabled = true
    } else {
        document.querySelector('#publishPost').classList.replace('btn-publish-disabled', 'btn-publish-allowed')
        document.querySelector('#publishPost').disabled = false
    }
})


// THEME

// theme functions
function lightMode(){
    localStorage.setItem('theme', 'light')
    document.body.classList.remove('dark-mode')
    document.querySelector('#pointer-light').checked = true
}

function darkMode(){
    localStorage.setItem('theme', 'dark')
    document.body.classList.add('dark-mode')
    document.querySelector('#pointer-dark').checked = true
}


// theme localstorage
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('theme') == null) {
        lightMode()
    }

    if(localStorage.getItem('theme') == 'light') {
        lightMode()
    }

    if(localStorage.getItem('theme') == 'dark') {
        darkMode()
    }
})