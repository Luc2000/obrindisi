function globe_more(){
    $('#globe .saiba_mais').hide();

    $('#globe .category').html(`Esfera de 6,5 cm feita em polimetilmetracrilato, texturizada internamente com glitter contendo mini bíblia com salmo e raminho natalino em material sintético, acabamento com fita de cetim e adesivo personalizável 2x2.`);
    $('#globe .category').css('margin-top','33px');
}
function ouro_more(){
    $('#kitouro .saiba_mais').hide();

    $('#kitouro .category').html(`Saquinho de organza dourado nas proporções 7x9 contendo imã de geladeira em formato de bíblia, pingente dourado, raminho natalino em material sintético, auto adesivo com a marca do cliente 4x4.`);
    $('#kitouro .category').css('margin-top','33px');
}


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp){
            startTimestamp = timestamp;
        } 

        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function gotokitouro(){
    let list_fps = $('#fp-nav ul li');
    let size = list_fps.length;
    let i = 0;

    while (i < size) {
        let text_html = $(list_fps[i]).find('.fp-tooltip').html();
        
        if(text_html === 'Kit Ouro'){
            $(list_fps[i]).find('a span').click();
        }
        i++;        
    }
    
}

function gotoglobe(){
    let list_fps = $('#fp-nav ul li');
    let size = list_fps.length;
    let i = 0;

    while (i < size) {
        let text_html = $(list_fps[i]).find('.fp-tooltip').html();
        
        if(text_html === 'Christmas Globe'){
            $(list_fps[i]).find('a span').click();
        }
        i++;        
    }

}
    

$(function(){
    var index=0;
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true){
            if(index === 0){
                var milheiro = document.getElementById("milheiro_ouro");
                var cinquilheiro = document.getElementById("cinquilheiro_ouro");
                animateValue(milheiro, 0, 1000, 1700);    
                animateValue(cinquilheiro, 0, 5000, 3000);

                $('#kitouro #content-cards_ouro .milheiro .text-center').addClass('animate__animated animate__hinge');

                setTimeout(() => {
                    $('#kitouro #content-cards_ouro .milheiro').prepend('<p class="text-center animate__animated animate__jackInTheBox" style="font-size: 1.5rem;  white-space: nowrap;height: fit-content;">R$ 7,99/Un.</p>');
                    $('#kitouro #content-cards_ouro .milheiro .selos').html(`
                        <div class="interno">
                            <i class="far fa-grin-hearts animate__animated animate__heartBeat" style="color: #fff;"></i>
                            <span class="mt-2" >Adesivo personalizado</span>
                        </div>
                    `);
                }, 2200);

                setTimeout(() => {
                    $('#kitouro #content-cards_ouro .cinquilheiro .text-center').addClass('animate__animated animate__hinge');
                }, 3000);

                setTimeout(() => {
                    $('#kitouro #content-cards_ouro .cinquilheiro').prepend('<p class="text-center animate__animated animate__zoomInUp" style="font-size: 1.7rem; white-space: nowrap;height: fit-content;">R$ 5,99/Un.</p>');
                    setTimeout(() => {
                        $('#kitouro #content-cards_ouro .cinquilheiro').addClass('active');

                        $('#kitouro #content-cards_ouro .cinquilheiro .selos').html(`
                            <div class="interno">
                                <i class="icon-ecommerce-cart-content animate__animated animate__lightSpeedInLeft" style="color: #fff;" ></i>
                                <span>Frete grátis</span>
                            </div>
                            <p class="text-center my-2">+</p>
                            <div class="interno">
                                <i class="far fa-grin-hearts animate__animated animate__heartBeat" style="color: #fff;"></i>
                                <span class="mt-2">Adesivo personalizado</span>
                            </div>
                        `);
                    }, 700);
                }, 4900);

                setTimeout(() => {
                    $('#kitouro .main-content-price').css('opacity','1');
                }, 6000);
                index++;
            }
        }
    },{threshold: [0.5]}
    );
        observer.observe(document.querySelector("#kitouro")
    );




    var index2=0;
    var observer2 = new IntersectionObserver(function(entries) {
        
    if(entries[0].isIntersecting === true){
        if(index2 === 0){
            var milheiro = document.getElementById("milheiro_globe");
            var cinquilheiro = document.getElementById("cinquilheiro_globe");
            animateValue(milheiro, 0, 1000, 1700);    
            animateValue(cinquilheiro, 0, 5000, 3000);

            $('#globe #content-cards_globe .milheiro .text-center').addClass('animate__animated animate__hinge');

            setTimeout(() => {
                $('#globe #content-cards_globe .milheiro').prepend('<p class="text-center animate__animated animate__jackInTheBox" style="font-size: 1.5rem;  white-space: nowrap;height: fit-content;">R$ 9,99/Un.</p>');
                $('#globe #content-cards_globe .milheiro .selos').html(`
                    <div class="interno">
                        <i class="far fa-grin-hearts animate__animated animate__heartBeat" style="color: #fff;"></i>
                        <span class="mt-2">Adesivo personalizado</span>
                    </div>
                `);
            }, 2200);

            setTimeout(() => {
                $('#globe #content-cards_globe .cinquilheiro .text-center').addClass('animate__animated animate__hinge');
            }, 3000);

            setTimeout(() => {
                $('#globe #content-cards_globe .cinquilheiro').prepend('<p class="text-center animate__animated animate__zoomInUp" style="font-size: 1.7rem; white-space: nowrap;height: fit-content;">R$ 5,99/Un.</p>');
                setTimeout(() => {
                    $('#globe #content-cards_globe .cinquilheiro').addClass('active');

                    $('#globe #content-cards_globe .cinquilheiro .selos').html(`
                        <div class="interno">
                            <i class="icon-ecommerce-cart-content animate__animated animate__lightSpeedInLeft" style="color: #fff;" ></i>
                            <span>Frete grátis</span>
                        </div>
                        <p class="text-center my-2">+</p>
                        <div class="interno">
                            <i class="far fa-grin-hearts animate__animated animate__heartBeat" style="color: #fff;"></i>
                            <span class="mt-2">Adesivo personalizado</span>
                        </div>
                    `);
                }, 700);
            }, 4900);

            setTimeout(() => {
                $('#globe .main-content-price').css('opacity','1');
            }, 6000);
            index2++;
        }
    }
    },{threshold: [0.5]}
    );
        observer2.observe(document.querySelector("#globe")
    );
});